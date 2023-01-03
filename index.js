var 링크 = document.querySelectorAll("naver");
for (var i = ; i < 3; i++) {
    var a = 링크[i];
    if (a instanceof HTMLAnchorElement) {
        a.href = 'https://kakao.com';
    }
}
