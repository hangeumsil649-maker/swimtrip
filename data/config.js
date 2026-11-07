/* 지역, 테마, 메인 추천 목록. 새 지역이나 새 테마가 필요할 때만 한 줄 추가합니다. 기존 항목은 수정하지 않습니다. */
const REGIONS=[
  {key:"gyeonggi",name:"경기",sub:"가평"},
  {key:"gangwon",name:"강원",sub:"양양·강릉·홍천"},
  {key:"jeonnam",name:"전남",sub:"구례"},
  {key:"gyeongnam",name:"경남",sub:"남해·산청"},
  {key:"gyeongbuk",name:"경북",sub:"울진"},
  {key:"chungnam",name:"충남",sub:"태안"},
  {key:"busan",name:"부산",sub:"기장"},
  {key:"tbd",name:"지역 확인 중",hidden:true}
];
const THEMES=[
  {key:"onsen",name:"온천",desc:"뜨끈한 온천수로 풀어내는 하루",hue:195},
  {key:"outdoor-bath",name:"노천탕",desc:"바깥 공기 속에서 즐기는 야외 탕",hue:160},
  {key:"warm-pool",name:"온수풀",desc:"계절과 상관없이 즐기는 따뜻한 물놀이",hue:200},
  {key:"pool-villa",name:"풀빌라",desc:"우리끼리 쓰는 독립 수영장",hue:215},
  {key:"ryokan",name:"료칸",desc:"일본식 무드의 다다미와 히노끼탕",hue:25},
  {key:"family",name:"가족 여행",desc:"아이와 부모님과 함께 가기 좋은 곳",hue:95},
  {key:"couple",name:"커플 여행",desc:"둘만의 시간이 길어지는 숙소",hue:335}
];

/* 메인 상단 "이달의 추천" 에 노출할 숙소 id (순서대로) */
const FEATURED=["gapyeong-hanoktake","gurye-dohwa-poolvilla","yangyang-yeonhwamun-hotel","gijang-hoshikage-ryokan","namhae-yeogi-namhae","gijang-dongbusan-spa-hotel"];

/* 메인 배너 (옆으로 넘겨 보는 타일). 숙소가 늘면 한 줄씩 추가합니다. */
const BANNERS=[
  {title:"겨울 온천 숙소",sub:"뜨끈한 온천수가 있는 곳",href:"#theme-onsen",hue:195,img:"images/taean-mulgyeol-caravan/02.jpg"},
  {title:"프라이빗 풀빌라",sub:"우리끼리 쓰는 온수풀",href:"#theme-pool-villa",hue:215,img:"images/namhae-yeogi-namhae/01.jpg"},
  {title:"료칸 감성 숙소",sub:"다다미와 히노끼탕",href:"#theme-ryokan",hue:25,img:"images/private-ryokan-warm-pool/01.jpg"}
];
