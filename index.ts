interface CarType {
  model: string;
  tax: (price: number) => number;
}

class Car implements CarType {
  model; ///any 타입됨
  tax(a) {
    ///a 파라미터는 any 타입됨
    return a * 0.1;
  }
}
