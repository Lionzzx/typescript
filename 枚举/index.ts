// 数字枚举
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

// 字符串枚举
enum Direction1 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// 异构枚举（Heterogeneous enums）

enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

// 反向映射
enum Enum {
  A,
}
let a1 = Enum.A;
let nameOfA = Enum[a1]; // "A"

// const枚举
const enum Directions {
  Up,
  Down,
  Left,
  Right,
}

let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right,
];

// 外部枚举
declare enum Enum1 {
  A = 1,
  B,
  C = 2,
}
