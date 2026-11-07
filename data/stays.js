/* =====================================================================
   숙소 데이터 파일 (여기에만 숙소를 추가합니다)
   규칙
   1. 새 숙소는 아래 STAYS 배열의 맨 끝에 객체 하나로 추가합니다.
   2. 기존 숙소 항목은 삭제하거나 수정하지 않습니다.
   3. link 는 전달받은 제휴 주소를 한 글자도 바꾸지 않고 넣습니다.
   4. photos 의 src 는 images/<id>/01.jpg 형식으로 넣습니다. 사진이 없으면 "" 로 둡니다.
   5. regionKey 는 data/config.js 의 REGIONS key, themes 는 THEMES key 를 씁니다.
   6. 숙소를 추가한 뒤 data/config.js 의 FEATURED 에 id 를 넣으면 메인 추천에 노출됩니다.
   추가용 서식은 MANAGE.md 를 참고하세요.
   ===================================================================== */
const STAYS=[
{
  id:"gapyeong-hanoktake",
  hook:"숲 한가운데서 영화를 틀었더니",
  name:"가평 하녹타케",
  regionKey:"gyeonggi",
  place:"경기 가평군 가평읍",
  themes:["outdoor-bath","couple"],
  hue:150,
  tagline:"전 객실 독채, 미국식 화덕 자쿠지와 핀란드 사우나가 있는 숲속 스테이",
  features:[
    "전 객실 독채이고 객실 간 거리가 50m 이상이라 조용하게 지낼 수 있어요",
    "미국식 화덕 자쿠지와 야외 온수 자쿠지, 핀란드 사우나를 선택해 이용합니다",
    "불멍과 바비큐 화로를 즐기고, 밤에는 야외 스크린으로 영화를 볼 수 있어요"
  ],
  target:"조용한 자연 속에서 둘만 쉬고 싶은 부부·커플",
  rooms:"독채 캐빈 · 우드 · 스톤 · 타케(하녹타케) · 롯지 (기준 2인, 최대 4인)",
  price:null, priceNote:"객실 타입과 날짜에 따라 달라요", priceDate:"2026-10-31",
  checkin:"15:00", checkout:"11:00",
  address:"경기도 가평군 가평읍 가화로 440-57",
  extras:[
    ["바비큐 숯불 화로","무료 (숯·석쇠는 지참)"],
    ["안방그릴·숯불 서비스","30,000원"],
    ["불멍(장작·착화제·토치)","20,000원"],
    ["화덕 자쿠지·야외 온수 자쿠지","20,000~50,000원대 (타입별)"],
    ["핀란드 사우나","2인 30,000원 (1인 추가 10,000원)"]
  ],
  rules:["전 객실 반려동물 동반 및 입실 불가","체험 시설 요금은 현장 결제","조은마트 이용 시 가평역 픽업 가능 (사전 예약 및 문의 필수)"],
  photos:[
    {src:"images/gapyeong-hanoktake/01.jpg",cap:"메탈 욕조 자쿠지와 우드 데크",kind:"부대시설"},
    {src:"images/gapyeong-hanoktake/02.jpg",cap:"야외 스크린과 자쿠지",kind:"부대시설"},
    {src:"images/gapyeong-hanoktake/03.jpg",cap:"불멍 화로와 텐트",kind:"부대시설"},
    {src:"images/gapyeong-hanoktake/04.jpg",cap:"등이 걸린 나무 아래 테라스",kind:"외관"},
    {src:"images/gapyeong-hanoktake/05.jpg",cap:"밤의 나무 아래 테라스",kind:"외관"},
    {src:"images/gapyeong-hanoktake/06.jpg",cap:"낮의 야외 테이블",kind:"외관"},
    {src:"images/gapyeong-hanoktake/07.jpg",cap:"벚꽃 아래 야외 스파",kind:"부대시설"},
    {src:"images/gapyeong-hanoktake/08.jpg",cap:"창밖 벚꽃이 보이는 객실",kind:"객실"},
    {src:"images/gapyeong-hanoktake/09.jpg",cap:"객실에서 본 산 풍경",kind:"객실"},
    {src:"images/gapyeong-hanoktake/10.jpg",cap:"객실 현관문",kind:"외관"},
    {src:"images/gapyeong-hanoktake/11.jpg",cap:"정원과 건물 지붕",kind:"외관"},
    {src:"images/gapyeong-hanoktake/12.jpg",cap:"가림막이 있는 밤 데크",kind:"외관"}
  ],
  link:"https://link.coupang.com/a/ihMqUCMMJE"
},
{
  id:"gurye-dohwa-poolvilla",
  hook:"수영장 물이 온천수라고요?",
  name:"구례 도화풀빌라",
  regionKey:"jeonnam",
  place:"전남 구례군 산동면",
  themes:["onsen","outdoor-bath","warm-pool","pool-villa","family","couple"],
  hue:20,
  tagline:"게르마늄 온천수 개별 수영장과 프라이빗 노천탕이 있는 온천 풀빌라",
  features:[
    "게르마늄 온천수를 쓰는 개별 수영장과 시그니처 프라이빗 노천탕을 갖췄어요",
    "참나무 장작으로 구워 객실로 가져다주는 석식 BBQ 세트를 선택할 수 있어요",
    "노천탕 불멍 장작화로 서비스와 천연야생화 꿀 더덕구이 옵션이 있어요"
  ],
  target:"부모님과 함께하는 온천 여행, 아이 동반 가족, 프라이빗 온천을 찾는 커플",
  rooms:"1관~4관 기준 2인(최대 5인), 5관 기준 2인(최대 6인)",
  price:null, priceNote:"체크인 날짜와 객실에 따라 달라요", priceDate:"2026-10-31",
  checkin:"16:00", checkout:"11:00",
  address:"전남 구례군 산동면 관산구산길 14-28",
  extras:[
    ["프라이빗 노천탕 (1회 약 2시간)","50,000원"],
    ["노천탕 불멍 장작화로","50,000원"],
    ["석식 BBQ 2인 세트 (참나무 장작 구이 400g 등)","70,000원"],
    ["BBQ 숯+그릴","30,000원"],
    ["천연야생화 꿀 더덕구이","40,000원"],
    ["추가 인원 성인(14세~)","50,000원"],
    ["추가 인원 소인(초등학생 이하)","30,000~40,000원 (24개월 미만 무료)"]
  ],
  rules:["옵션 요금은 현장 결제","미온수 수영장 요금은 선택 옵션별로 달라 예약 페이지에서 확인이 필요해요","리뷰 작성 시 야생화 꿀 300ml 증정 이벤트 (숙소 안내 기준)"],
  photos:[
    {src:"images/gurye-dohwa-poolvilla/02_dohwa-poolvilla_main.jpg",cap:"노을 지는 하늘 아래 'DO HWA' 간판과 개별 수영장",kind:"수영장"},
    {src:"images/gurye-dohwa-poolvilla/01.jpg",cap:"대나무 담으로 둘러싸인 개별 수영장",kind:"수영장"},
    {src:"images/gurye-dohwa-poolvilla/02.jpg",cap:"조명이 켜진 저녁의 개별 수영장",kind:"수영장"},
    {src:"images/gurye-dohwa-poolvilla/03.jpg",cap:"별빛 아래 불 켜진 단지 길",kind:"외관"},
    {src:"images/gurye-dohwa-poolvilla/04.jpg",cap:"들판 너머로 보이는 숙소 단지",kind:"외관"},
    {src:"images/gurye-dohwa-poolvilla/05.jpg",cap:"타일 바닥이 있는 객실 현관",kind:"객실"},
    {src:"images/gurye-dohwa-poolvilla/06.jpg",cap:"다이닝 테이블이 있는 거실",kind:"객실"},
    {src:"images/gurye-dohwa-poolvilla/07.jpg",cap:"통창이 있는 거실",kind:"객실"},
    {src:"images/gurye-dohwa-poolvilla/08.jpg",cap:"BBQ 한 상",kind:"부대시설"},
    {src:"images/gurye-dohwa-poolvilla/09.jpg",cap:"밤의 개별 수영장",kind:"수영장"},
    {src:"images/gurye-dohwa-poolvilla/10.jpg",cap:"꽃밭과 하늘이 보이는 숙소 단지",kind:"외관"}
  ],
  link:"https://link.coupang.com/a/ih9OrWQaXs"
},
{
  id:"yangyang-yeonhwamun-hotel",
  hook:"한옥인데 객실에 히노끼탕이?",
  name:"연화문호텔 양양",
  regionKey:"gangwon",
  place:"강원 양양군 손양면",
  themes:["ryokan","couple","family"],
  hue:350,
  tagline:"한옥의 고즈넉함과 객실 히노끼 스파, 전 객실 2인 조식이 어우러진 호텔",
  features:[
    "야외 연못과 분수 야경이 어우러진 한옥 감성의 라운지 공간이에요",
    "객실마다 히노끼탕 또는 대형 욕조가 있어 방 안에서 스파를 즐길 수 있어요",
    "전 객실 2인 무료 조식 프로모션을 진행 중이에요 (샌드위치, 요거트, 커피·주스 등)"
  ],
  target:"조용한 휴식을 원하는 부부·커플, 부모님과 함께하는 힐링 여행",
  rooms:"스위트 트윈 · 로얄 스위트 · 프리미엄 스위트",
  price:"306,000", priceNote:"스위트 트윈 기준, 와우회원 10% 할인가", priceDate:"2026-10-31",
  checkin:"15:00", checkout:"11:00",
  address:"강원특별자치도 양양군 손양면 서양길 12",
  extras:[
    ["로얄 스위트","495,000원~"],
    ["프리미엄 스위트","576,000원~"]
  ],
  rules:["전 객실 취사 불가","반려동물 입실 불가","욕조 이용 시 입욕제 사용 불가","프런트 운영 07:00~22:00 (셀프 체크인·체크아웃)"],
  photos:[
    {src:"images/yangyang-yeonhwamun-hotel/01.jpg",cap:"벚꽃이 핀 연못과 정원",kind:"외관"},
    {src:"images/yangyang-yeonhwamun-hotel/02.jpg",cap:"연못 너머로 보이는 한옥 건물",kind:"외관"},
    {src:"images/yangyang-yeonhwamun-hotel/03.jpg",cap:"벚꽃과 호텔 외관",kind:"외관"},
    {src:"images/yangyang-yeonhwamun-hotel/04.jpg",cap:"기와지붕이 있는 호텔 입구",kind:"외관"},
    {src:"images/yangyang-yeonhwamun-hotel/05.jpg",cap:"소나무가 있는 호텔 외관",kind:"외관"},
    {src:"images/yangyang-yeonhwamun-hotel/06.jpg",cap:"분재가 있는 실내 정원",kind:"부대시설"},
    {src:"images/yangyang-yeonhwamun-hotel/07.jpg",cap:"히노끼 욕조가 있는 욕실",kind:"욕실"},
    {src:"images/yangyang-yeonhwamun-hotel/08.jpg",cap:"창이 있는 욕조 욕실",kind:"욕실"},
    {src:"images/yangyang-yeonhwamun-hotel/09.jpg",cap:"창가의 좌식 다도 공간",kind:"객실"},
    {src:"images/yangyang-yeonhwamun-hotel/10.jpg",cap:"통창 앞 좌식 공간",kind:"객실"},
    {src:"images/yangyang-yeonhwamun-hotel/11.jpg",cap:"달 모양 창이 있는 객실",kind:"객실"},
    {src:"images/yangyang-yeonhwamun-hotel/12.jpg",cap:"달 모양 창과 좌식 공간",kind:"객실"},
    {src:"images/yangyang-yeonhwamun-hotel/13.jpg",cap:"객실 입구에서 본 좌식 공간",kind:"객실"},
    {src:"images/yangyang-yeonhwamun-hotel/14.jpg",cap:"TV와 벽화가 있는 객실",kind:"객실"}
  ],
  link:"https://link.coupang.com/a/ihKkbbdfJA"
},
{
  id:"namhae-yeogi-namhae",
  hook:"겨울에 바다 풀빌라를 가는 이유",
  name:"남해 여기남해 펜션&풀빌라",
  regionKey:"gyeongnam",
  place:"경남 남해군 창선면",
  themes:["pool-villa","warm-pool","outdoor-bath","couple","family"],
  hue:205,
  tagline:"겨울 바다를 바라보며 즐기는 온수풀·자쿠지·히노끼 사우나 풀빌라",
  features:[
    "인피니티 공용풀과 객실별 개별 풀이 있고, 동절기에는 미온수로 운영해요",
    "일부 객실에는 프라이빗 자쿠지와 히노끼 사우나가 있어요",
    "전 객실 테라스에서 전기그릴 바비큐를 이용할 수 있고 통창으로 오션뷰가 펼쳐져요"
  ],
  target:"따뜻한 스파와 바다 풍경을 함께 즐기고 싶은 커플·가족",
  rooms:"기준 2인, 최대 4~5인 (객실별 상이)",
  price:"189,000", priceNote:"날짜와 객실 타입에 따라 달라요", priceDate:"2026-11-03",
  checkin:"15:00", checkout:"11:00",
  address:"경상남도 남해군 창선면 흥선로 903-18",
  extras:[
    ["인원 추가 (성인·아동·유아 1인)","30,000원 (24개월 미만 1명 무료)"],
    ["개별 풀 미온수 (10월~5월)","100,000원 (냉수 50,000원)"],
    ["자쿠지+히노끼 사우나 101호·201호","30,000원"],
    ["자쿠지+히노끼 사우나 301호","20,000원"],
    ["바비큐 전기그릴 (15:00~20:00)","10,000원"]
  ],
  rules:["자쿠지·사우나·미온수 풀은 사전 예약 후 현장 결제","추가 요금은 현장 결제"],
  photos:[
    {src:"images/namhae-yeogi-namhae/01.jpg",cap:"단지 외관과 개별 풀",kind:"외관"},
    {src:"images/namhae-yeogi-namhae/02.jpg",cap:"바다가 보이는 수영장",kind:"수영장"},
    {src:"images/namhae-yeogi-namhae/03.jpg",cap:"타일이 깔린 개별 수영장",kind:"수영장"},
    {src:"images/namhae-yeogi-namhae/04.jpg",cap:"긴 개별 풀과 텐트",kind:"수영장"},
    {src:"images/namhae-yeogi-namhae/05.jpg",cap:"밤의 외관과 테라스",kind:"외관"},
    {src:"images/namhae-yeogi-namhae/06.jpg",cap:"바다가 보이는 욕조",kind:"욕실"},
    {src:"images/namhae-yeogi-namhae/07.jpg",cap:"욕조가 보이는 침실",kind:"객실"},
    {src:"images/namhae-yeogi-namhae/08.jpg",cap:"통창이 있는 거실",kind:"객실"},
    {src:"images/namhae-yeogi-namhae/09.jpg",cap:"TV가 있는 거실과 주방",kind:"객실"},
    {src:"images/namhae-yeogi-namhae/10.jpg",cap:"바다가 보이는 다이닝 공간",kind:"객실"},
    {src:"images/namhae-yeogi-namhae/11.jpg",cap:"주방과 거실",kind:"객실"}
  ],
  link:"https://link.coupang.com/a/iuQBLV71uC"
},
{
  id:"gijang-dongbusan-spa-hotel",
  hook:"수도꼭지를 틀면 온천수가 나옵니다",
  name:"동부산 온천 호텔",
  regionKey:"busan",
  place:"부산 기장군 장안읍",
  themes:["onsen","family","couple"],
  hue:185,
  tagline:"객실 수도꼭지에서 온천수가 나오는 부산 기장의 가성비 온천 호텔",
  features:[
    "객실 수도꼭지에서 바로 온천수가 나오고 온천 스파와 사우나를 갖췄어요",
    "리모델링한 객실과 아침 조식이 있어요",
    "임랑해수욕장과 부산 프리미엄 아울렛이 가까워요"
  ],
  target:"합리적인 가격으로 온천 호캉스를 즐기고 싶은 여행객",
  rooms:"스탠다드 미니룸 외 (미니룸 기준 최대 2인)",
  price:"63,960", priceNote:"스탠다드 미니룸 기준", priceDate:"2026-11-03",
  checkin:"16:00", checkout:"11:00",
  address:"부산광역시 기장군 장안읍 장안로 38",
  extras:[["아동 0~3세","추가 비용 없음"]],
  rules:["환경부 권고에 따라 일회용 어메니티(칫솔·치약·면도기 등)는 제공되지 않아요","객실에 샴푸·린스·바디워시는 비치되어 있어요"],
  photos:[
    {src:"images/gijang-dongbusan-spa-hotel/01.jpg",cap:"실내 수영·스파 공간",kind:"수영장"},
    {src:"images/gijang-dongbusan-spa-hotel/02.jpg",cap:"호텔 입구",kind:"외관"},
    {src:"images/gijang-dongbusan-spa-hotel/03.jpg",cap:"로비",kind:"부대시설"},
    {src:"images/gijang-dongbusan-spa-hotel/04.jpg",cap:"높은 천장의 로비",kind:"부대시설"},
    {src:"images/gijang-dongbusan-spa-hotel/05.jpg",cap:"나무 사우나",kind:"부대시설"},
    {src:"images/gijang-dongbusan-spa-hotel/06.jpg",cap:"라운지",kind:"부대시설"},
    {src:"images/gijang-dongbusan-spa-hotel/07.jpg",cap:"레스토랑",kind:"부대시설"},
    {src:"images/gijang-dongbusan-spa-hotel/08.jpg",cap:"침대가 있는 객실",kind:"객실"},
    {src:"images/gijang-dongbusan-spa-hotel/09.jpg",cap:"더블 객실",kind:"객실"},
    {src:"images/gijang-dongbusan-spa-hotel/10.jpg",cap:"침대와 욕실 가운이 있는 객실",kind:"객실"},
    {src:"images/gijang-dongbusan-spa-hotel/11.jpg",cap:"붉은 헤드보드가 있는 객실",kind:"객실"},
    {src:"images/gijang-dongbusan-spa-hotel/12.jpg",cap:"트윈 객실",kind:"객실"}
  ],
  link:"https://link.coupang.com/a/iuQyCjfmma"
},
{
  id:"gijang-hoshikage-ryokan",
  hook:"비행기 없이 가는 일본 료칸",
  name:"호시카게 료칸호텔",
  regionKey:"busan",
  place:"부산 기장군 대변로 (오랑대 부근)",
  themes:["ryokan","couple"],
  hue:30,
  tagline:"부산 기장에서 만나는 정통 료칸 무드, 전 객실 히노끼 욕조",
  features:[
    "다다미 객실 옆에 프라이빗한 히노끼 온수 욕조가 있어요",
    "정갈한 일식 조식과 1일 2식 패키지를 선택할 수 있어요",
    "스카이라인 루지 부산, 롯데월드 어드벤처 부산, 해동용궁사와 가까워요"
  ],
  target:"일본 여행 같은 분위기와 따뜻한 온천 힐링을 함께 원하는 커플",
  rooms:"Sorano Hana 외 (기준 최대 2인, 객실별 상이)",
  price:"324,550", priceNote:"Sorano Hana 기준", priceDate:"2026-11-03",
  checkin:"15:00", checkout:"11:00",
  address:"부산광역시 기장군 대변로 133 (오랑대 부근)",
  extras:[
    ["일식 조식 (성인·어린이 1인)","약 40,000원"],
    ["공항 셔틀 (편도, 차량 1대, 정원 5명)","110,000원 (사전 예약 필수)"]
  ],
  rules:["체크인 15:00~24:00","일식 조식과 셔틀은 사전 확인이 필요해요"],
  photos:[
    {src:"images/gijang-hoshikage-ryokan/01.jpg",cap:"밤의 호텔 외관",kind:"외관"},
    {src:"images/gijang-hoshikage-ryokan/02.jpg",cap:"낮의 호텔 외관",kind:"외관"},
    {src:"images/gijang-hoshikage-ryokan/03.jpg",cap:"정원과 호텔 건물",kind:"외관"},
    {src:"images/gijang-hoshikage-ryokan/04.jpg",cap:"정원 산책로와 호텔 건물",kind:"외관"},
    {src:"images/gijang-hoshikage-ryokan/05.jpg",cap:"로비 라운지",kind:"부대시설"},
    {src:"images/gijang-hoshikage-ryokan/06.jpg",cap:"침대가 있는 객실",kind:"객실"},
    {src:"images/gijang-hoshikage-ryokan/07.jpg",cap:"객실의 좌식 다이닝 공간",kind:"객실"},
    {src:"images/gijang-hoshikage-ryokan/08.jpg",cap:"창가의 좌식 다이닝 공간",kind:"객실"},
    {src:"images/gijang-hoshikage-ryokan/09.jpg",cap:"노을 지는 야외탕이 보이는 식사 공간",kind:"객실"}
  ],
  /* 짧은 제휴 링크 사용. 원본 상품 URL은 https://trip.coupang.com/tp/products/30000011248547 */
  link:"https://link.coupang.com/a/imM3xTYD3A"
},
{
  id:"private-ryokan-warm-pool",
  hook:"밤 10시까지 즐기는 히노끼 스파",
  name:"강릉 휴식료칸풀빌라",
  regionKey:"gangwon",
  place:"강원 강릉시 주문진읍",
  themes:["ryokan","outdoor-bath","warm-pool","family","couple"],
  hue:270,
  tagline:"2023년 7월 신축, 독채 히노끼 스파와 실내 수영장을 갖춘 료칸풀빌라",
  features:[
    "2023년 7월에 새로 문을 열었고 주문진 해변과 5분 거리에 있어요",
    "독채 히노끼 스파 객실은 개별 히노끼 스파를 입실 후 오후 10시까지 무료로 이용해요",
    "독채 풀빌라 객실에서는 실내 개별 수영장(2.2×5.2m, 수심 1.1m)을 미온수로 이용할 수 있어요",
    "전 객실 웰컴키트와 일본식 유카타 복장 안내가 있어요 (숙소 소개 기준)"
  ],
  target:"프라이빗 휴식을 원하는 커플, 아이 동반 가족, 부모님 동반 여행",
  rooms:"신축글램핑 B1·B3·B4·B6 (기준 2인, 최대 4인) · 독채 히노끼스파 A2·A3·A4 (기준 2인, 최대 4인, 215,100원~) · 독채 풀빌라 A1·C1 (기준 4인, 최대 6인, 350,100원~)",
  price:"99,000", priceNote:"신축글램핑 반짝특가 기준 (환불 불가 요금)", priceDate:"2026-10-29",
  checkin:"15:00", checkout:"11:00",
  address:"강원특별자치도 강릉시 주문진읍 거문동길 193",
  extras:[
    ["개별 수영장 미온수 (풀빌라 객실)","70,000원 (현장 결제)"],
    ["안방그릴 자이글 (1회)","20,000원 (현장 결제)"],
    ["개별 히노끼 스파 (입실 후~22:00)","무료 (입욕제·꽃잎 사용 불가)"]
  ],
  rules:[
    "전 객실 가족 외 인원 추가와 혼숙이 불가하고, 커플 일행 두 팀 이상은 함께 이용할 수 없어요",
    "투숙객 외 방문객은 입실할 수 없어요",
    "객실 금연이며 빠른 입실과 늦은 퇴실은 불가해요 (단지 내 관리실에서 체크인)",
    "대게·홍게·조개·청국장·생선구이 등은 객실 반입과 취식이 금지되고, 개인 그릴과 버너, 프라이팬은 사용할 수 없어요",
    "주차는 무료이며 차량 방문 시 주차 가능 여부를 확인해 주세요",
    "예약·취소 문의 1644-1346 (PDF 기준)"
  ],
  photos:[
    {src:"images/private-ryokan-warm-pool/01.jpg",cap:"밤의 히노끼 욕조와 포도밭",kind:"욕실"},
    {src:"images/private-ryokan-warm-pool/02.jpg",cap:"포도밭이 보이는 히노끼 욕조",kind:"욕실"},
    {src:"images/private-ryokan-warm-pool/03.jpg",cap:"통창 옆 히노끼 욕조",kind:"욕실"},
    {src:"images/private-ryokan-warm-pool/04.jpg",cap:"데크 위 히노끼 욕조",kind:"욕실"},
    {src:"images/private-ryokan-warm-pool/05.jpg",cap:"독채 외관과 잔디",kind:"외관"},
    {src:"images/private-ryokan-warm-pool/06.jpg",cap:"격자 외벽과 둥근 창이 있는 건물",kind:"외관"},
    {src:"images/private-ryokan-warm-pool/07.jpg",cap:"불 켜진 아치형 독채",kind:"외관"},
    {src:"images/private-ryokan-warm-pool/08.jpg",cap:"저녁의 아치형 독채",kind:"외관"},
    {src:"images/private-ryokan-warm-pool/09.jpg",cap:"노을 아래 숙소 단지 전경",kind:"외관"},
    {src:"images/private-ryokan-warm-pool/10.jpg",cap:"계단이 있는 실내 수영장",kind:"수영장"},
    {src:"images/private-ryokan-warm-pool/11.jpg",cap:"대리석 벽의 실내 수영장",kind:"수영장"},
    {src:"images/private-ryokan-warm-pool/12.jpg",cap:"넓은 벽면의 실내 수영장",kind:"수영장"}
  ],
  /* 숙소명과 위치는 강릉 휴식료칸풀빌라 PDF 기준 (사용자 확인). 제휴 링크는 처음 전달받은 그대로 */
  link:"https://link.coupang.com/a/igdtvNpjEa"
},
{
  id:"uljin-deokgu-onsen-hotel",
  hook:"하루 2천 톤이 솟아나는 온천",
  name:"덕구온천호텔 & 콘도리조트",
  regionKey:"gyeongbuk",
  place:"경북 울진군 북면",
  themes:["onsen","outdoor-bath","family","couple"],
  hue:195,
  tagline:"국내 유일 자연용출 온천수를 쓰는 대온천장과 스파월드가 있는 온천 호텔·콘도",
  features:[
    "하루 2,000톤 넘게 자연에서 솟는 42.4℃ 약알칼리 온천수를 사용해요",
    "대온천장과 스파월드(수영복·수영모 필수)를 갖췄고 투숙객 할인권을 제공해요",
    "호텔 객실과 콘도 객실 중에서 고를 수 있고 한식당이 있어요",
    "응봉산 중턱에 있어 덕구계곡 산책과 원탕 트레킹을 함께 즐길 수 있어요"
  ],
  target:"부모님 동반 가족 여행, 온천을 즐기려는 커플",
  rooms:"호텔(스탠다드·스위트·테라스), 콘도(스탠다드·스위트·패밀리) · 상세 객실과 요금은 예약 페이지에서 확인",
  price:null, priceNote:"요금은 날짜별로 달라 쿠팡트래블에서 확인해 주세요", priceDate:"2026-11-06",
  checkin:"15:00", checkout:"11:00",
  address:"경상북도 울진군 북면 덕구온천로 924",
  extras:[
    ["스파월드 이용 시간","주중 10:00~19:00 / 주말 10:00~20:00 (유료, 시즌별 변동)"],
    ["객실 내 취사","불가"]
  ],
  rules:[
    "스파월드는 음식물 반입이 안 되고 수영복과 수영모를 꼭 착용해야 해요",
    "시즌별로 운영 시간과 요금이 바뀔 수 있어요",
    "운영 정보는 공개된 숙소 소개 자료 기준이니 예약 전 다시 확인해 주세요"
  ],
  photos:[
    {src:"images/uljin-deokgu-onsen-hotel/01.jpg",cap:"분수가 있는 실내 스파 풀",kind:"수영장"}
  ],
  draft:true,
  /* 사진: 사용자가 직접 지정한 이미지 1장 사용 (실제 숙소 사진 원본을 받으면 교체) */
  link:"https://link.coupang.com/a/iq6dkJrtVQ"
},
{
  id:"sancheong-solchaewoon",
  hook:"숲속 통나무 통 안에서 땀 빼는 밤",
  name:"솔채운 펜션",
  regionKey:"gyeongnam",
  place:"경남 산청군 시천면",
  themes:["outdoor-bath","family","couple"],
  hue:150,
  tagline:"지리산둘레길 가까이, 배럴 사우나와 정원 테라스가 있는 숲속 펜션",
  features:[
    "지리산둘레길 동강-수철 구간 인근 숲속에 있어요",
    "핀란드식 배럴 사우나와 야외 라운지 테라스가 있어요",
    "방갈로부터 6인 스위트까지 객실이 다양하고 가족·커플 모두 고르기 좋아요",
    "무료 Wi-Fi, 주차, 커피와 차, 생수를 제공해요"
  ],
  target:"조용한 숲속에서 쉬고 싶은 커플, 아이 동반 가족",
  rooms:"방갈로 가든뷰 (최대 2인, 69,536원~) · 디럭스 방갈로 (최대 2인, 79,474원) · 디럭스 스위트 (89,402원~) · 스튜디오·전용 정원 스위트 등 (객실별 상이)",
  price:"69,536", priceNote:"방갈로 가든뷰 1박 기준 (환불 불가, 11/5~11/6)", priceDate:"2026-11-05",
  checkin:"15:00", checkout:"11:00",
  address:"경남 산청군 시천면 화계오봉로 550",
  extras:[
    ["체크인 시간","15:00~23:00"],
    ["아동 추가 요금","0~12세 아동은 추가 비용 발생"]
  ],
  rules:[
    "아동은 0세부터 12세까지 추가 비용이 발생해요",
    "일부 객실은 환불 불가 요금이라 예약 전 취소 규정을 확인해 주세요",
    "요금은 2026-11-05 확인 기준이며 날짜에 따라 달라요"
  ],
  photos:[
    {src:"images/sancheong-solchaewoon/01.jpg",cap:"펜션 본채와 정원 연못",kind:"외관"},
    {src:"images/sancheong-solchaewoon/02.jpg",cap:"통나무 배럴 사우나와 야외 라운지",kind:"부대시설"},
    {src:"images/sancheong-solchaewoon/03.jpg",cap:"통창 선룸이 있는 하얀 독채",kind:"외관"},
    {src:"images/sancheong-solchaewoon/04.jpg",cap:"마당 산책로와 독채",kind:"외관"},
    {src:"images/sancheong-solchaewoon/05.jpg",cap:"붉은 파라솔이 있는 전망 테라스",kind:"부대시설"},
    {src:"images/sancheong-solchaewoon/06.jpg",cap:"안개 낀 지리산 자락 정원",kind:"외관"},
    {src:"images/sancheong-solchaewoon/07.jpg",cap:"나무 지붕 카페 라운지",kind:"부대시설"},
    {src:"images/sancheong-solchaewoon/08.jpg",cap:"카페 라운지 내부",kind:"부대시설"},
    {src:"images/sancheong-solchaewoon/09.jpg",cap:"장작 난로가 있는 사우나 공간",kind:"사우나"},
    {src:"images/sancheong-solchaewoon/10.jpg",cap:"통창 앞 배럴 사우나",kind:"사우나"},
    {src:"images/sancheong-solchaewoon/11.jpg",cap:"2층 침대가 있는 객실",kind:"객실"},
    {src:"images/sancheong-solchaewoon/12.jpg",cap:"TV와 창이 있는 객실",kind:"객실"},
    {src:"images/sancheong-solchaewoon/13.jpg",cap:"주방이 있는 객실",kind:"객실"},
    {src:"images/sancheong-solchaewoon/14.jpg",cap:"2층 침대와 TV",kind:"객실"},
    {src:"images/sancheong-solchaewoon/15.jpg",cap:"옷장과 침대",kind:"객실"}
  ],
  link:"https://link.coupang.com/a/iqxGW059LE"
},
{
  id:"sancheong-hwangtohue-pension",
  hook:"황토방에서 하루 종일 누워만 있기",
  name:"산청 지리산황토휴펜션",
  regionKey:"gyeongnam",
  place:"경남 산청군 산청읍",
  themes:["family"],
  hue:35,
  tagline:"황토벽돌과 황토대리석으로 지은 어천계곡 인근 가족 펜션",
  features:[
    "황토벽돌과 황토대리석으로 지은 펜션이에요",
    "동절기와 우천 시에도 쓸 수 있는 야외 공동 바비큐장이 있어요",
    "족구장과 넓은 잔디 마당이 있어 아이와 뛰어놀기 좋아요",
    "원지·산청 시외버스주차장 자체 픽업이 가능해요 (사전 문의 필수)"
  ],
  target:"부모님·아이와 함께하는 가족, 단체 여행",
  rooms:"사랑채·별채 (기준 4인, 최대 5인, 150,000원) · 윗채 (기준 8인, 최대 10인, 300,000원) · 독채 전체 (윗채+별채+사랑채, 기준 16인, 최대 20인, 600,000원)",
  price:"150,000", priceNote:"사랑채 1박 기준 (환불 불가 요금, 11/5~11/6)", priceDate:"2026-11-05",
  checkin:"14:00", checkout:"11:00",
  address:"경상남도 산청군 산청읍 호암로1253번길 36-3",
  extras:[
    ["바비큐 (숯+그릴, 18:00~21:00)","4인 30,000원 / 8인 40,000원 (현장 결제)"],
    ["수건","1인 1장 제공, 추가는 개인 지참"]
  ],
  rules:[
    "칫솔·면도기 등 개인 위생용품은 직접 챙겨 오세요",
    "반려동물은 동반 입실이 안 돼요",
    "객실 요금은 환불 불가 조건이라 예약 전 취소 규정을 확인해 주세요"
  ],
  photos:[
    {src:"images/sancheong-hwangtohue/01.jpg",cap:"황토벽돌 객실의 침대와 주방",kind:"객실"},
    {src:"images/sancheong-hwangtohue/02.jpg",cap:"우드 패널 객실과 창밖 단풍",kind:"객실"},
    {src:"images/sancheong-hwangtohue/03.jpg",cap:"지붕이 있는 공동 바비큐 정자",kind:"부대시설"},
    {src:"images/sancheong-hwangtohue/04.jpg",cap:"잔디 마당과 펜션 건물",kind:"외관"},
    {src:"images/sancheong-hwangtohue/05.jpg",cap:"단풍 아래 펜션 건물과 잔디 정원",kind:"외관"},
    {src:"images/sancheong-hwangtohue/06.jpg",cap:"바비큐 그릴이 있는 정자",kind:"부대시설"},
    {src:"images/sancheong-hwangtohue/07.jpg",cap:"조명이 있는 바비큐 정자와 야외 테이블",kind:"부대시설"},
    {src:"images/sancheong-hwangtohue/08.jpg",cap:"펜션 앞 넓은 잔디 마당",kind:"외관"}
  ],
  /* 사진: 사용자가 직접 지정한 이미지 8장 (AI 생성으로 보이는 이미지 포함). 실제 숙소 사진 원본을 받으면 교체 */
  link:"https://link.coupang.com/a/iqrsbeDzj2"
},
{
  id:"hongcheon-byeolcam-kids-poolvilla",
  hook:"아이보다 강아지가 더 신난 풀빌라",
  name:"홍천 별캠 애견 키즈 풀빌라",
  regionKey:"gangwon",
  place:"강원 홍천군 서면",
  themes:["pool-villa","warm-pool","family"],
  hue:200,
  tagline:"개별 수영장과 실내 키즈룸, 반려견 동반까지 갖춘 홍천 가족 풀빌라",
  features:[
    "전 객실 개별 수영장이 있고 12~3월에는 온수로 이용할 수 있어요 (하루 전 사전 예약)",
    "객실 옆 실내 키즈룸에서 아이들이 날씨와 상관없이 놀 수 있어요",
    "15kg 이하 반려견을 최대 3마리까지 함께 갈 수 있어요 (수영장 입수는 불가)",
    "마당에서 토끼 먹이 주기 체험, 개별 바비큐장, 노래방을 이용할 수 있어요"
  ],
  target:"아이와 반려견을 함께 데려가는 가족 여행",
  rooms:"샛별4 개별바비큐 (기준 2인, 최대 10인, 106,020원~) · 샛별2 키즈룸·실내온수수영장·애견운동장 (기준 4인, 최대 10인, 159,570원~) · 샛별3 키즈룸·실내온수수영장·대형룸 (기준 4인, 최대 15인, 213,120원~)",
  price:"106,020", priceNote:"샛별4 기준, 와우 회원 10% 할인가 (11/5 확인)", priceDate:"2026-11-05",
  checkin:"15:00", checkout:"11:00",
  address:"강원 홍천군 서면 개야로 250-19",
  extras:[
    ["개별 수영장 (하루 전 예약 필수)","4~11월 미온수 50,000원 / 12~3월 온수 70,000원"],
    ["반려견 동반","1마리 20,000원 (15kg 이하, 최대 3마리)"],
    ["개별 바비큐","2인 기준 20,000원 (1인 추가 5,000원)"],
    ["노래방","1시간 20,000원 (입실 후~23:00)"],
    ["기준 인원 초과","성인·아동 1인 30,000원 (유아 무료)"]
  ],
  rules:[
    "빠른 입실은 1시간에 20,000원이 추가돼요",
    "수영장에는 반려견이 들어갈 수 없어요",
    "반려견 용품은 직접 챙겨 오세요",
    "요금은 와우 회원 할인가 기준이라 일반 요금은 더 높을 수 있어요"
  ],
  photos:[
    {src:"images/hongcheon-byeolcam-kids-poolvilla/01.jpg",cap:"반려견과 함께하는 실내 수영장",kind:"수영장"},
    {src:"images/hongcheon-byeolcam-kids-poolvilla/02.jpg",cap:"별빛 아래 불멍 휴식",kind:"부대시설"},
    {src:"images/hongcheon-byeolcam-kids-poolvilla/03.jpg",cap:"미끄럼틀과 트램펄린이 있는 실내 키즈룸",kind:"부대시설"},
    {src:"images/hongcheon-byeolcam-kids-poolvilla/04.jpg",cap:"조명이 켜진 야외 파라솔 쉼터",kind:"부대시설"},
    {src:"images/hongcheon-byeolcam-kids-poolvilla/05.jpg",cap:"아이들의 토끼 먹이 주기 체험",kind:"부대시설"}
  ],
  /* 사진: 사용자가 직접 지정한 이미지 5장 (AI 생성으로 보이는 이미지 포함). 실제 숙소 사진 원본을 받으면 교체 */
  link:"https://link.coupang.com/a/irHinJ6z3k"
},
{
  id:"taean-mulgyeol-caravan",
  hook:"카라반 문 열면 바로 바다",
  name:"태안 물결카라반캠핑장",
  regionKey:"chungnam",
  place:"충남 태안군 원북면",
  themes:["outdoor-bath","couple","family"],
  hue:205,
  tagline:"2025년 전면 리뉴얼, 학암포 바다 앞 노천탕과 불멍이 있는 감성 카라반",
  features:[
    "2025년에 전면 리뉴얼한 학암포 해변 카라반 캠핑장이에요",
    "오션뷰 노천탕(자쿠지) 독채 카라반을 운영해요 (사전 예약 필수)",
    "개별 테라스에서 바비큐와 불멍을 즐길 수 있어요",
    "학암포해수욕장까지 걸어서 3분이에요"
  ],
  target:"노천탕과 불멍 감성을 즐기고 싶은 커플, 감성 여행자",
  rooms:"(오션뷰) 노천탕 독채 카라반 등 객실 타입 운영 · 평일/주말 요금이 달라 예약 페이지에서 확인",
  price:null, priceNote:"객실 타입과 요일별로 달라 쿠팡트래블에서 확인해 주세요", priceDate:"2026-11-06",
  checkin:"15:00", checkout:"11:00",
  address:"충청남도 태안군 원북면 학암포길 21-22",
  extras:[
    ["노천탕 (자쿠지)","냉수 20,000원 / 온수 50,000원 (사전 예약 필수, 영하 기온에는 이용 불가)"],
    ["바비큐 (숯+그릴+토치+장갑)","4인 30,000원 (1인 추가 5,000원, 21시까지 신청)"],
    ["불멍","20,000원"],
    ["퇴실 연장","시간당 10,000원 (성수기·공휴일은 불가)"]
  ],
  rules:[
    "반려동물은 동반 입실이 안 돼요",
    "카라반 안에서는 흡연과 고기·생선 굽기가 금지이고, 지정된 바비큐장을 이용해요",
    "키를 잃어버리면 30,000원이 청구되고, 외출할 때는 관리실에 맡겨 주세요",
    "추가 요금은 모두 현장 결제예요"
  ],
  photos:[
    {src:"images/taean-mulgyeol-caravan/01.jpg",cap:"노을 속 카라반과 A자형 텐트, 불멍 자리",kind:"외관"},
    {src:"images/taean-mulgyeol-caravan/02.jpg",cap:"대나무 조명이 있는 야외 노천탕",kind:"욕실"},
    {src:"images/taean-mulgyeol-caravan/03.jpg",cap:"바다 앞에 늘어선 카라반 단지 야경",kind:"외관"}
  ],
  /* 사진: 사용자가 직접 지정한 이미지 (AI 생성으로 보이는 이미지 포함). 거의 같은 노천탕 사진 2장 중 1장만 등록. 실제 사진 원본을 받으면 교체 */
  link:"https://link.coupang.com/a/irabucs09A"
},
{
  id:"gurye-jirisan-forest-caravan",
  hook:"텐트 없이 캠핑 가능할까요?",
  name:"지리산 포레스트 카라반",
  regionKey:"jeonnam",
  place:"전남 구례군 토지면",
  themes:["family"],
  hue:120,
  tagline:"맑은 계곡 앞에 자리한 카라반과 키즈 놀이터가 있는 지리산 캠핑 숙소",
  features:[
    "지리산 자락, 맑은 계곡 바로 앞에 카라반이 늘어서 있어요",
    "시소와 암벽 등반 시설 등 아이들이 놀 수 있는 키즈 놀이터가 있어요",
    "개별 바비큐와 불멍을 이용할 수 있어요",
    "텐트를 치지 않고 몸만 가서 지낼 수 있는 카라반 숙소예요"
  ],
  target:"아이와 함께 자연 속에서 쉬고 싶은 가족",
  rooms:"카라반 객실 (타입과 기준 인원은 예약 페이지에서 확인)",
  price:null, priceNote:"객실 타입과 날짜별로 달라 쿠팡트래블에서 확인해 주세요", priceDate:"2026-11-04",
  checkin:"15:00", checkout:"11:00",
  address:"전남 구례군 토지면 피아골로 567-12 (공개된 숙소 정보 기준, 예약 전 확인 필요)",
  extras:[
    ["바비큐 (숯+그릴)","30,000원 (공개된 숙소 정보 기준)"],
    ["불멍 (화롯대+장작)","20,000원 (공개된 숙소 정보 기준)"]
  ],
  rules:[
    "주차는 카라반 1대당 1대만 가능해요",
    "폭죽은 사용할 수 없고, 3팀 이상 단체는 예약 전에 숙소로 먼저 연락해야 해요",
    "숙소 이름, 위치, 요금은 확인이 끝나지 않았어요. 예약 전에 쿠팡트래블 페이지에서 다시 확인해 주세요"
  ],
  photos:[
    {src:"images/gurye-jirisan-forest-caravan/01.jpg",cap:"노을 지는 카라반 데크의 그네 의자와 잔디 놀이터",kind:"외관"},
    {src:"images/gurye-jirisan-forest-caravan/02.jpg",cap:"가족이 식사하는 카라반 내부",kind:"객실"},
    {src:"images/gurye-jirisan-forest-caravan/03.jpg",cap:"계곡 옆 산책로를 따라 늘어선 카라반",kind:"외관"},
    {src:"images/gurye-jirisan-forest-caravan/04.jpg",cap:"저녁 조명이 켜진 키즈 놀이터의 시소",kind:"부대시설"},
    {src:"images/gurye-jirisan-forest-caravan/05.jpg",cap:"암벽 등반 놀이 시설",kind:"부대시설"}
  ],
  draft:true,
  /* 메모에는 "포천 마루 글램핑 카라반"으로 적혔으나 사용자가 "지리산 포레스트"로 알려줌. 사진 5장은 사용자가 지정(AI 생성으로 보이는 이미지 포함). PDF 없음, 위치·요금은 공개 정보 참고 */
  link:"https://link.coupang.com/a/ioRz8pUmmO"
}
];
