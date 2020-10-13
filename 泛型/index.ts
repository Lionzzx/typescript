// 我们使用了 类型变量，它是一种特殊的变量，只用于表示类型而不是值。
function identity<T>(arg: T): T {
  return arg;
}
let output = identity<number>(123);
// 类型推论帮助我们保持代码精简和高可读性。
let output1 = identity("123");

// 泛型约束

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}
