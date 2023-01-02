function hello(x?: string) {
  if (x) {
    console.log("안녕하세요" + x);
  } else {
    console.log("이름이 없습니다");
  }
}

function 자릿수세기(x: number | string): number {
  return x.toString().length;
}
