/* 데이터 점검 도구
   사용법
     node tools/check-data.js          점검만 합니다. 기존 숙소가 바뀌었거나 사라졌으면 실패합니다.
     node tools/check-data.js --lock   새로 추가된 숙소만 잠금 목록(stays.lock.json)에 등록합니다.
     node tools/check-data.js --accept <id>   사용자가 직접 수정을 요청한 기존 숙소 하나만 잠금을 갱신합니다.
   잠금 기준은 photos 를 뺀 모든 항목입니다. 사진 경로를 채우는 것은 허용합니다. */
const vm=require('vm'),fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=path.join(__dirname,'..');
const src=['data/config.js','data/stays.js'].map(f=>fs.readFileSync(path.join(root,f),'utf8')).join('\n');
const {REGIONS,THEMES,FEATURED,STAYS}=vm.runInNewContext(src+';({REGIONS,THEMES,FEATURED,STAYS})');
const lockPath=path.join(__dirname,'stays.lock.json');
const lock=fs.existsSync(lockPath)?JSON.parse(fs.readFileSync(lockPath,'utf8')):{};
const fp=s=>{const {photos,hook,...rest}=s;return crypto.createHash('sha256').update(JSON.stringify(rest)).digest('hex').slice(0,16);};
const errors=[],warns=[];
const need=["id","name","regionKey","place","themes","hue","tagline","features","target","rooms","priceNote","priceDate","checkin","checkout","address","extras","rules","photos","link"];
const ids=new Set();
for(const s of STAYS){
  for(const k of need) if(s[k]===undefined) errors.push(`${s.id||"?"}: 필수 항목 없음 (${k})`);
  if(!/^[a-z0-9-]+$/.test(s.id||"")) errors.push(`${s.id}: id 는 영문 소문자, 숫자, 하이픈만 가능`);
  if(ids.has(s.id)) errors.push(`${s.id}: id 중복`); ids.add(s.id);
  if(!REGIONS.some(r=>r.key===s.regionKey)) errors.push(`${s.id}: 없는 지역 key (${s.regionKey})`);
  for(const t of s.themes||[]) if(!THEMES.some(x=>x.key===t)) errors.push(`${s.id}: 없는 테마 key (${t})`);
  if(!/^https:\/\/(link|trip)\.coupang\.com\//.test(s.link||"")) errors.push(`${s.id}: 쿠팡 주소가 아님 (${s.link})`);
  if(/trip\.coupang\.com/.test(s.link||"")) warns.push(`${s.id}: 일반 상품 주소입니다. 제휴 수익 추적이 되는 주소인지 확인하세요.`);
  if(!(s.photos||[]).length) warns.push(`${s.id}: 사진 항목 없음`);
  else if(s.photos.every(p=>!p.src)) warns.push(`${s.id}: 사진 파일 미연결 (자리표시 상태)`);
  for(const p of s.photos||[]) if(p.src&&!fs.existsSync(path.join(root,p.src))) errors.push(`${s.id}: 사진 파일 없음 (${p.src})`);
}
for(const f of FEATURED) if(!ids.has(f)) errors.push(`FEATURED: 없는 숙소 id (${f})`);
for(const id of Object.keys(lock)){
  const s=STAYS.find(x=>x.id===id);
  if(!s) errors.push(`${id}: 기존 숙소가 삭제됨`);
  else if(lock[id].fp!==fp(s)) errors.push(`${id}: 기존 숙소 정보가 수정됨`);
  else if(lock[id].link!==s.link) errors.push(`${id}: 제휴 링크가 바뀜`);
}
const ai=process.argv.indexOf('--accept');
if(ai>-1){const id=process.argv[ai+1];const s=STAYS.find(x=>x.id===id);
  if(!s){console.log('없는 숙소 id:',id);process.exit(1);}
  lock[id]={fp:fp(s),link:s.link};fs.writeFileSync(lockPath,JSON.stringify(lock,null,2)+'\n');console.log('잠금 갱신:',id);
  const k=errors.findIndex(e=>e.startsWith(id+':'));if(k>-1)errors.splice(k,1);}
const fresh=STAYS.filter(s=>!lock[s.id]);
if(process.argv.includes('--lock')){
  if(errors.length){console.log('오류가 있어 잠금 등록을 하지 않았습니다.');}
  else{for(const s of fresh) lock[s.id]={fp:fp(s),link:s.link}; fs.writeFileSync(lockPath,JSON.stringify(lock,null,2)+'\n'); console.log('잠금 등록:',fresh.map(s=>s.id).join(', ')||'(새 숙소 없음)');}
}
console.log(`숙소 ${STAYS.length}곳, 새로 추가된 숙소 ${fresh.length}곳`);
warns.forEach(w=>console.log('주의:',w));
errors.forEach(e=>console.log('오류:',e));
console.log(errors.length?`실패 (오류 ${errors.length}건)`:'통과');
process.exit(errors.length?1:0);
