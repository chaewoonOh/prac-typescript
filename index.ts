interface Student {
  name: string;
}
interface Teacher {
  age: number;
}

let 변수: Student & Teacher = { name: "kim", age: 90 };
