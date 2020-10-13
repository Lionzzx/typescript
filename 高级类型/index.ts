// 交叉类型（Intersection Types）
function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (let id in first) {
    (<any>result)[id] = (<any>first)[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id];
    }
  }
  return result;
}

// 联合类型（Union Types）
// 联合类型表示一个值可以是几种类型之一。 我们用竖线（ |）分隔每个类型，所以 number | string | boolean表示一个值可以是 number， string，或 boolean。
function padLeft(value: string, padding: string | number) {
  // ...
}

let indentedString = padLeft("Hello world", "");
interface Bird {
  fly();
  layEggs();
}

// 类型别名
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}
type Alias = { num: number };
interface Interface {
  num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;
