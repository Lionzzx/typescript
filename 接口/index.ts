// 接口就好比一个名字，用来描述要求。
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// 可选属性
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });

// 只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}

// ReadonlyArray<T>类型
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// readonly vs const
// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。
let mySquare1 = createSquare({ colour: "red", width: 100 } as SquareConfig);

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

// 可索引的类型
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];

// 类类型
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}

// 继承接口
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}
let square = <Square>{};
square.color = "blue";
square.sideLength = 10;

// 混合类型
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = <Counter>function (start: number) {};
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

// 接口继承类
// 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 接口同样会继承到类的private和protected成员。 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）
