type PositionxX = { x: number };
type PositionxX = number;

type PositionxX = { y: number };

type PositionxY = { y: number };

type NewType = PositionxX & PositionxY;

let position: NewType = { x: 10, y: 20 };
