function 함수<MyType>(x: MyType[]): MyType {
  return x[0];
}

let a = 함수<number>([4, 2]);
let b = 함수<string>(["kim", "park"]);
