type Age<T> = T extends [string, ...any] ? T[0] : unknown;
let age1: Age<[string, number]>;
let age2: Age<[boolean, number]>;
