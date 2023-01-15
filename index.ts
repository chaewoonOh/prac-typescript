interface CarType {
  model: string;
  tax: (price: number) => number;
}

class Car implements CarType {
  model; ///any 타입됨
  tax(a) {
    return a * 0.1;
  }
}
