namespace one {
  let isDone: boolean = false;
  let decLiteral: number = 6;
  let tname: string = "bob";
  // 数组
  // 第一种可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
  // 第二种方式是使用数组泛型，Array<元素类型>：
  let list: number[] = [1, 2, 3];
  let list1: Array<number> = [1, 2, 3];

  // 元组 Tuple
  // Declare a tuple type
  let x: [string, number];
  // Initialize it
  x = ["hello", 10]; // OK

  // 枚举
  enum Color {
    Red,
    Green,
    Blue,
  }
  let c: Color = Color.Green;

  // 不希望类型检查器对这些值进行检查
  let notSure: any = 4;

  // 表示没有任何类型。 当一个函数没有返回值时
  function warnUser(): void {
    console.log("This is my warning message");
  }

  // 默认情况下null和undefined是所有类型的子类型 尽可能地使用--strictNullChecks
  let u: undefined = undefined;
  let n: null = null;

  // never类型表示的是那些永不存在的值的类型
  // 返回never的函数必须存在无法达到的终点
  function error(message: string): never {
    throw new Error(message);
  }

  // object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
  declare function create(o: object | null): void;
  create({ prop: 0 }); // OK
  create(null); // OK
  // 类型断言
  let someValue: any = "this is a string";
  let strLength: number = (<string>someValue).length;

  let someValue1: any = "this is a string";
  let strLength1: number = (someValue as string).length;
}
