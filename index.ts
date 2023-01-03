type MyType = {
  color?: string;
  size: number;
  readonly position: number[];
};

let test: MyType = {
  size: 123,
  position: [1, 2, 3],
};
