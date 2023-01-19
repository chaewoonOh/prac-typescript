type Bus = {
  color: string;
  model: boolean;
  price: number;
};

type TypeChanger<MyType, T> = {
  [key in keyof MyType]: T;
};

type NewBus = TypeChanger<Bus, boolean>;
type NewBus2 = TypeChanger<Bus, string[]>;
