/* 화면 렌더링 코드. 숙소를 추가할 때는 이 파일을 수정하지 않습니다. 데이터는 data/ 폴더에서 관리합니다.
   숙소 번호는 STAYS 배열 순서(1부터)이며, 목록은 번호가 큰 최신 숙소부터 보여줍니다. */
const NOTICE_TEXT="이 포스팅은 제휴마케팅 활동의 일환으로, 예약 및 구매가 발생하면 일정액의 수수료를 제공받을 수 있습니다.";
const $app=document.getElementById("app");
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const regionOf=k=>REGIONS.find(r=>r.key===k);
const themeOf=k=>THEMES.find(t=>t.key===k);
const stayOf=id=>STAYS.find(s=>s.id===id);
const noOf=s=>STAYS.indexOf(s)+1;
const newest=()=>STAYS.map(s=>s).reverse();
const countRegion=k=>STAYS.filter(s=>s.regionKey===k).length;
const countTheme=k=>STAYS.filter(s=>s.themes.includes(k)).length;
let pendingFocus=false;

/* ---------- 상단 제휴 안내 (흐르는 문구) ---------- */
function setupNotice(){
  const track=document.getElementById("track"),box=document.getElementById("notice"),btn=document.getElementById("mq");
  const one=`<span>${esc(NOTICE_TEXT)}</span>`;
  const grp=`<div class="grp">${one.repeat(6)}</div>`;
  track.innerHTML=grp+grp;               // 같은 묶음을 두 번 붙여 -50% 이동 시 끊김 없이 반복
  const fit=()=>{const w=track.firstElementChild.getBoundingClientRect().width;if(w)track.style.setProperty("--dur",Math.max(20,w/55)+"s");};
  fit(); window.addEventListener("resize",fit);
  if(document.fonts&&document.fonts.ready) document.fonts.ready.then(fit);
  let still=false;
  try{still=localStorage.getItem("mq-still")==="1";}catch(e){}
  const apply=()=>{box.classList.toggle("still",still);btn.setAttribute("aria-pressed",String(still));btn.textContent=still?"움직임":"멈춤";btn.setAttribute("aria-label",still?"안내 문구 움직임 켜기":"안내 문구 움직임 멈추기");};
  apply();
  btn.addEventListener("click",()=>{still=!still;apply();try{localStorage.setItem("mq-still",still?"1":"0");}catch(e){}});
}

/* ---------- 공통 조각 ---------- */
function photo(stay,i,opts={}){
  const p=stay.photos[i]||{src:"",cap:""};
  const img=p.src?`<img src="${esc(p.src)}" alt="${esc(stay.name+" "+p.cap)}" loading="lazy">`:"";
  const cap=opts.nocap?"":`<div class="cap">${p.src?"":"<b>PHOTO</b>"}${esc(p.cap)}</div>`;
  return `<div class="ph" style="--h:${stay.hue}">${img}${cap}</div>`;
}
function priceHtml(s){
  if(!s.price) return `<div class="price"><b style="font-size:20px">요금은 예약 페이지에서</b><small>${esc(s.priceNote)}</small></div>`;
  return `<div class="price"><b>${esc(s.price)}원~</b><small>${esc(s.priceNote)} · ${esc(s.priceDate)} 확인</small></div>`;
}
function cta(s,label,cls=""){
  return `<a class="btn lantern ${cls}" href="${esc(s.link)}" target="_blank" rel="nofollow sponsored noopener">${esc(label)}</a>`;
}
function row(s){
  const n=noOf(s);
  const pill=s.draft?`<span class="pill">확인 중</span>`:(FEATURED.includes(s.id)?`<span class="pill soft">추천</span>`:"");
  const title=s.hook||s.name;   // 카드에는 지명 없이 영상 섬네일 문구만 보여줌
  const direct=!!s.link; // 카드를 누르면 상세페이지 없이 쿠팡트래블 제휴 링크로 바로 이동
  const attrs=direct?`href="${esc(s.link)}" target="_blank" rel="nofollow sponsored noopener"`:`href="#stay-${s.id}"`;
  return `<li><a class="row" ${attrs} data-no="${n}" aria-label="${n}번 ${esc(title)}">
    <span class="thumb">${photo(s,0,{nocap:true})}</span>
    <span class="rt"><span class="ttl"><i>${n}.</i> ${esc(title)}${pill}</span></span>
  </a></li>`;
}
function rowsHtml(list){return list.length?`<ul class="rows">${list.map(row).join("")}</ul>`:"";}
function setNav(k){document.querySelectorAll("nav.main a").forEach(a=>{if(a.dataset.nav===k)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");});}

/* ---------- 검색: 숙소 번호, 숙소명, 지역, 테마, 소개 ---------- */
function haystack(s){
  return [s.name,s.hook||"",s.place,s.tagline,s.target,(regionOf(s.regionKey)||{}).name,...s.themes.map(k=>themeOf(k).name),...s.features].join(" ").toLowerCase();
}
function searchStays(q){
  q=q.trim().toLowerCase().replace(/^#/,"").replace(/번$/,"");
  if(!q) return newest();
  if(/^\d+$/.test(q)){const s=STAYS[Number(q)-1];return s?[s]:[];}   // 숫자만 입력하면 해당 번호의 숙소
  const words=q.split(/\s+/);
  return newest().filter(s=>{const h=haystack(s);return words.every(w=>h.includes(w));});
}

/* ---------- 화면 ---------- */
function viewHome(){
  setNav("home");
  const regionChips=REGIONS.filter(r=>!r.hidden&&countRegion(r.key)).map(r=>`<a class="chip" href="#region-${r.key}">${esc(r.name)} <em>${esc(r.sub)} ${countRegion(r.key)}</em></a>`).join("");
  const themeChips=THEMES.map(t=>`<a class="chip" href="#theme-${t.key}">${esc(t.name)} <em>${countTheme(t.key)}</em></a>`).join("");
  const banners=BANNERS.map(b=>`<a class="banner" href="${esc(b.href)}"><div class="ph" style="--h:${b.hue}">${b.img?`<img src="${esc(b.img)}" alt="" loading="lazy">`:""}</div><strong>${esc(b.title)}</strong><small>${esc(b.sub)}</small></a>`).join("");
  $app.innerHTML=`<div class="col">
    <section class="brand">
      <div class="logo-crop"><img src="images/brand/logo.png" alt="쉼_trip 로고"></div>
      <p class="oneline"><b>온천 · 노천탕 · 온수풀 · 료칸</b><span>가족과 가기 좋은 숙소</span></p>
    </section>

    <div class="search" id="searchbox" role="search">
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
      <label class="sr" for="q">숙소 검색</label>
      <input id="q" type="search" inputmode="search" autocomplete="off" placeholder="숙소명, 지역, 번호로 검색 (예: 3)">
      <button class="clear" id="qclear" type="button" aria-label="검색어 지우기">✕</button>
    </div>

    <div class="banners" aria-label="추천 모음">${banners}</div>

    <div class="sec" id="listhead" hidden><h2 id="listtitle"></h2><small id="listcount"></small></div>
    <div id="list"></div>

    <div class="sec"><h2>지역별 숙소</h2><small><a href="#region-all">전체 보기</a></small></div>
    <div class="chips">${regionChips}</div>
    <div class="sec"><h2>테마별 숙소</h2><small><a href="#theme-all">전체 보기</a></small></div>
    <div class="chips">${themeChips}</div>
  </div>`;
  const q=document.getElementById("q"),list=document.getElementById("list"),cnt=document.getElementById("listcount"),title=document.getElementById("listtitle"),box=document.getElementById("searchbox");
  const draw=()=>{
    const v=q.value; box.classList.toggle("has-q",!!v.trim());
    const res=searchStays(v);
    const head=document.getElementById("listhead");
    head.hidden=!v.trim();   // 숙소 목록 제목은 없애고, 검색할 때만 결과 수를 보여줌
    title.textContent=v.trim()?"검색 결과":"";
    cnt.textContent=v.trim()?`${res.length}곳`:"";
    list.innerHTML=res.length?rowsHtml(res):`<div class="empty">'${esc(v.trim())}'에 맞는 숙소가 없어요.<br>숙소명, 지역, 테마나 번호로 다시 찾아보세요.</div>`;
  };
  q.addEventListener("input",draw);
  document.getElementById("qclear").addEventListener("click",()=>{q.value="";draw();q.focus();});
  draw();
  if(pendingFocus){pendingFocus=false;q.focus();}
}

function viewList(kind,key){
  setNav(kind);
  const isRegion=kind==="region";
  const items=isRegion?REGIONS.filter(r=>!r.hidden):THEMES;
  const countFn=isRegion?countRegion:countTheme;
  let list=newest(),title,desc;
  if(key==="all"){
    title=isRegion?"지역별 숙소":"테마별 숙소";
    desc=isRegion?"지역을 눌러 해당 지역의 숙소만 모아볼 수 있어요.":"테마를 눌러 해당 테마의 숙소만 모아볼 수 있어요.";
  } else if(isRegion){
    const r=regionOf(key); list=newest().filter(s=>s.regionKey===key);
    title=r?`${r.name} ${r.sub||""} 숙소`:"지역별 숙소"; desc=r?`${r.name} ${r.sub||""} 지역의 숙소 ${list.length}곳`:"";
  } else {
    const t=themeOf(key); list=newest().filter(s=>s.themes.includes(key));
    title=t?`${t.name} 숙소`:"테마별 숙소"; desc=t?`${t.desc} · ${list.length}곳`:"";
  }
  const chips=items.map(i=>`<a class="chip" href="#${kind}-${i.key}" ${i.key===key?'aria-current="true"':''}>${esc(i.name)} <em>${countFn(i.key)}</em></a>`).join("");
  $app.innerHTML=`<div class="col">
    <div class="page-head"><h1>${esc(title)}</h1><p>${esc(desc)}</p></div>
    <div class="filters"><div class="chips"><a class="chip" href="#${kind}-all" ${key==="all"?'aria-current="true"':''}>전체 <em>${STAYS.length}</em></a>${chips}</div></div>
    ${list.length?rowsHtml(list):`<div class="empty">아직 등록된 숙소가 없어요. 곧 채워 넣을게요.</div>`}
  </div>`;
}

function viewStay(id){
  const s=stayOf(id); if(!s){viewHome();return;}
  setNav("");
  const r=regionOf(s.regionKey);
  const tags=s.themes.map(k=>`<a class="tag" href="#theme-${k}" style="text-decoration:none">${esc(themeOf(k).name)}</a>`).join("");
  const gallery=s.photos.map((p,i)=>p.src
    ?`<button type="button" class="g real" data-i="${i}" aria-label="${esc(p.cap)} 크게 보기"><img src="${esc(p.src)}" alt="${esc(s.name+" "+p.cap)}" loading="lazy"></button>`
    :`<div class="g">${photo(s,i)}</div>`).join("");
  const extras=s.extras.length?`<h2>현장 결제·추가 요금</h2><table class="info extras"><tbody>${s.extras.map(e=>`<tr><th style="width:auto;font-weight:400;color:var(--ink);background:none">${esc(e[0])}</th><td>${esc(e[1])}</td></tr>`).join("")}</tbody></table>`:"";
  const draftNote=s.draft?`<div class="note-box" style="margin-top:16px"><b>정보 확인 중인 숙소예요.</b> 숙소명, 위치, 요금이 확정되면 내용이 바뀔 수 있어요.</div>`:"";
  const more=newest().filter(x=>x.id!==s.id&&(x.regionKey===s.regionKey||x.themes.some(t=>s.themes.includes(t)))).slice(0,3);
  $app.innerHTML=`<div class="wrap">
    <div class="crumb"><a href="#home">홈</a> / ${r&&!r.hidden?`<a href="#region-${r.key}">${esc(r.name)}</a>`:`<a href="#region-all">지역별</a>`} / ${noOf(s)}. ${esc(s.name)}</div>
    <div class="gallery" aria-label="${esc(s.name)} 사진">${gallery}</div>
    <div class="d-grid">
      <div class="d-main">
        <div class="tags">${tags}</div>
        <h1>${esc(s.name)}</h1>
        <p class="tagline">${esc(s.tagline)}</p>
        <div style="color:var(--muted);font-size:14px">${esc(s.place)} · 숙소 번호 ${noOf(s)}</div>
        ${draftNote}
        <h2>이곳의 매력</h2>
        <ul class="checks">${s.features.map(f=>`<li>${esc(f)}</li>`).join("")}</ul>
        <h2>이런 분께 추천해요</h2>
        <p style="margin:0">${esc(s.target)}</p>
        <h2>숙소 정보</h2>
        <table class="info"><tbody>
          <tr><th>객실</th><td>${esc(s.rooms)}</td></tr>
          <tr><th>체크인</th><td>${esc(s.checkin)}</td></tr>
          <tr><th>체크아웃</th><td>${esc(s.checkout)}</td></tr>
          <tr><th>주소</th><td>${esc(s.address)}</td></tr>
        </tbody></table>
        ${extras}
        <h2>예약 전 확인해 주세요</h2>
        <ul class="checks">${s.rules.map(f=>`<li>${esc(f)}</li>`).join("")}</ul>
        <p class="disclose" style="margin-top:18px">요금과 운영 정보는 ${esc(s.priceDate)} 확인 기준이며, 날짜와 객실에 따라 바뀔 수 있어요.</p>
      </div>
      <aside class="side">
        ${priceHtml(s)}
        ${cta(s,"쿠팡트래블에서 예약하기","block")}
        <p class="disclose">${esc(NOTICE_TEXT)}</p>
      </aside>
    </div>
    <div class="sticky-cta">${priceHtml(s)}${cta(s,"예약하기")}</div>
    ${more.length?`<div class="col" style="margin-top:40px"><div class="sec"><h2>함께 보면 좋은 숙소</h2></div>${rowsHtml(more)}</div>`:""}
  </div>`;
  document.querySelectorAll(".gallery .g.real").forEach(b=>b.addEventListener("click",()=>openLightbox(s,Number(b.dataset.i),b)));
}

/* ---------- 사진 크게 보기 ---------- */
let lb=null;
function openLightbox(stay,start,opener){
  const list=stay.photos.map((p,i)=>({p,i})).filter(x=>x.p.src);
  let pos=Math.max(0,list.findIndex(x=>x.i===start));
  if(lb) lb.remove();
  lb=document.createElement("div");
  lb.className="lb";lb.setAttribute("role","dialog");lb.setAttribute("aria-modal","true");lb.setAttribute("aria-label",stay.name+" 사진 크게 보기");
  lb.innerHTML=`<button class="lb-x" type="button" aria-label="닫기">✕</button>
    <button class="lb-nav prev" type="button" aria-label="이전 사진">‹</button>
    <figure><img alt=""><figcaption></figcaption></figure>
    <button class="lb-nav next" type="button" aria-label="다음 사진">›</button>`;
  document.body.appendChild(lb);
  document.body.style.overflow="hidden";
  const img=lb.querySelector("img"),cap=lb.querySelector("figcaption");
  const show=()=>{
    const {p}=list[pos];
    img.onload=()=>{   // 화면에 맞게 키우되 작은 원본은 3배까지만
      const r=img.naturalWidth/img.naturalHeight;
      img.style.width=Math.round(Math.min(img.naturalWidth*3,window.innerWidth-24,(window.innerHeight-170)*r))+"px";
    };
    img.src=p.src;img.alt=stay.name+" "+p.cap;
    cap.textContent=`${p.kind?"["+p.kind+"] ":""}${p.cap}  (${pos+1}/${list.length})`;
  };
  const move=d=>{pos=(pos+d+list.length)%list.length;show();};
  const close=()=>{if(!lb)return;lb.remove();lb=null;document.body.style.overflow="";document.removeEventListener("keydown",key);if(opener)opener.focus();};
  const key=e=>{if(e.key==="Escape")close();else if(e.key==="ArrowLeft")move(-1);else if(e.key==="ArrowRight")move(1);};
  document.addEventListener("keydown",key);
  lb.querySelector(".lb-x").addEventListener("click",close);
  lb.querySelector(".prev").addEventListener("click",()=>move(-1));
  lb.querySelector(".next").addEventListener("click",()=>move(1));
  lb.addEventListener("click",e=>{if(e.target===lb)close();});
  let x0=null;
  lb.addEventListener("touchstart",e=>{x0=e.touches[0].clientX;},{passive:true});
  lb.addEventListener("touchend",e=>{if(x0===null)return;const dx=e.changedTouches[0].clientX-x0;x0=null;if(Math.abs(dx)>50)move(dx<0?1:-1);});
  if(list.length<2)lb.querySelectorAll(".lb-nav").forEach(b=>b.style.display="none");
  show();lb.querySelector(".lb-x").focus();
}
window.addEventListener("hashchange",()=>{if(lb){lb.remove();lb=null;document.body.style.overflow="";}});

function goDirect(key){
  // #go-6 또는 #go-<id> : 상세페이지를 거치지 않고 쿠팡트래블 제휴 링크로 바로 이동
  const list=STAYS;
  const s=/^\d+$/.test(key)?list[Number(key)-1]:list.find(x=>x.id===key);
  if(!s||!s.link){ viewHome(); return; }
  document.title=s.name+" | 쿠팡트래블로 이동";
  const root=document.getElementById("app")||document.body;
  root.innerHTML='<div style="padding:64px 24px;text-align:center;line-height:1.8;font-size:16px">'
    +'<p><strong>'+esc(s.name)+'</strong><br>쿠팡트래블 예약 페이지로 이동합니다.</p>'
    +'<p><a class="btn lantern" href="'+esc(s.link)+'" rel="nofollow sponsored noopener">바로 가기</a></p>'
    +'<p style="font-size:13px;color:#8a7a6a">이동하지 않으면 위 버튼을 눌러 주세요.</p></div>';
  setTimeout(()=>{location.replace(s.link);},300);
}
function route(){
  const h=(location.hash||"#home").slice(1);
  const g=h.match(/^go-(.+)$/);
  if(g){ goDirect(g[1]); return; }
  const m=h.match(/^(stay|region|theme)-(.+)$/);
  if(!m){ viewHome(); }
  else if(m[1]==="stay"){ viewStay(m[2]); }
  else { viewList(m[1],m[2]); }
  window.scrollTo(0,0);
}
window.addEventListener("hashchange",route);
setupNotice();
route();
