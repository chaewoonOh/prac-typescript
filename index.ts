let 링크 = document.querySelectorAll("naver");

for (let i =; i <3; i++){
  let a = 링크[i];
  if (a instanceof HTMLAnchorElement) {
    a.href = 'https://kakao.com'
  }
}