const Nothing = Symbol('nothing');
type Nothing = typeof Nothing;
type Maybe<T> = T | Nothing;

// 튜플 고정된 타입
enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 'READ_ONLY',
  AUTHOR = 'AUTHOR',
}

// object 타입 추론
const person = {
  name: 'kim',
  phoneNumber: 322,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

// object 타입 선언
// const person2: {
//   name: string,
//   phoneNumber: number,
//   hobbies: string[],
//   role: Role.ADMIN
// } = {
//   name : 'kim',
//   phoneNumber: 322,
//   hobbies: ['Sports', 'Cooking'],
//   role: Role.ADMIN,
// }

type CombinableNumber = number;
const combine = (a: CombinableNumber, b: CombinableNumber): CombinableNumber =>
  a + b;

console.log(combine(1, 2));

// 제네릭
type Add<T> = {
  n1: T;
  n2: T;
};

let userInput: unknown;
let userName: string;

userInput = 5;

if (typeof userInput === 'string') {
  userName = userInput;
}

// const generateError = (message: string, code: number): never => {
//   throw { message: message, errorCode: code };
// };

// generateError('An error', 500);

if (globalThis.document) {
  const button = document.querySelector('button');

  const clickHanlder = ({ target }: MouseEvent) => {
    console.log(target);
  };

  button?.addEventListener('click', clickHanlder);
}

const add = (a: number, b: number): number => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

printOutput(add(5, 2));

// 타입 교차 & operator
// type Admin = {
//   name: string;
//   privileges: string[];
// }

// type Employee {
//   name: string;
//   startDate: Date
// }

// //다중 상속
// type ElevatedEmployee = Admin & Employee;

// const el: ElevatedEmployee = {
//   name: 'Kim',
//   privileges: ['created'],
//   startDate: new Date()
// }

interface Admin {
  name: string;
  privileges: string[];
}
interface Employee {
  name: string;
  startDate: Date;
}

// 인터페이스 다중상속
interface ElevatedEmployee extends Employee, Admin {}

const el: ElevatedEmployee = {
  name: 'Kim',
  privileges: ['created'],
  startDate: new Date(),
};

// 지식 공유자는 type을 더 선호 더 명시적이라는 이유

type Combinable = string | number;
type Numberic = number | boolean;

type Universal = Combinable & Numberic;

// 85. Type Guard

// 타입을 조건문으로 줄여나가는것
// typeof, instanceof 사용하여 줄여나갈 수 있음
// typeof : 원시타입 식별
// instanceof : 생성자 함수가 반환하는 class 객체 식별

const addd = (a: Combinable, b: Combinable) => {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
};

// 타입 오버라이딩
// function googggg(a:number, b:number): number;
// function googggg(a:number, b:number): number;
// function googggg(a:number, b:number): number;
// function googggg(a:number, b:number): number;
// 지금은 const 익명함수라서 안됨;
const result = addd('kim', 'j') as string;
result.split(' ');
console.log('resulttttttttttt', result);

type UnknownEmployee = Employee | Admin;

const printEmployeeInfomation = (emp: UnknownEmployee) => {
  console.log('name: ', emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ', emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ', emp.startDate);
  }
};

printEmployeeInfomation({ name: 'Kim', startDate: new Date() });

// 유니온 타입
class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('good');
  }
  loadCargo(amount: number) {
    console.log('loadCargo', amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    // instanceof 속성 확인 할 때 좋다
    vehicle.loadCargo(1000);
  }
};

useVehicle(v1);
useVehicle(v2);

// 85. Discriminated Unions - enum같은 유니크 스트링으로 분기 처리하기

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

// 사용자 정의 타입 가드
const moveAnimal = (animal: Animal) => {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log(speed);
};

// 사용자 정의 타입 가드 2
const isBird = (animal: Animal): animal is Bird =>
  !!(animal as Bird).flyingSpeed;

function doSomething(animal: Animal) {
  if (isBird(animal)) {
    animal.flyingSpeed; // animal은 Bird 타입이 확실함
  } else {
    animal.runningSpeed; // animal은 Bird 타입이 아니니깐 Horse 타입이 확실함
  }
}

moveAnimal({ type: 'bird', flyingSpeed: 300 });

// 86 Type Casting - 타입중에 undefined, null을 제거해주는 문법들 소개

// 확실한 값을 적용해야 할때 특히 유용하게 사용가능하다.
// const inputElem = <HTMLInputElement>document.querySelector('input')!; // 느낌표는 undefined, null를 지워준다.
if (globalThis.document) {
  const inputElem = document.querySelector('input')! as HTMLInputElement; // 위의 <HTMLInputElement>과 같은 내용
  inputElem.value = 'Hi there';

  if (inputElem) {
    (inputElem as HTMLInputElement).value = 'Hi there'; // 프로퍼티 앞에 사용할 때
  }
}

// 87
// 제네릭이랑 비슷하게 객체에서 [prop] (이름은 상관없음)의 타입을 지정해줄 수 있음.
interface ErrorContainer {
  [propssssss: string]: string;
  // [zzz: string]: string // Duplicate string index signature
}

const errorBag: ErrorContainer = {
  email: 'good',
  1: 'good', // key를 숫자로해도 string으로 들어감
};

//89 optional chaining

type Fetchhhh = {
  id: string;
  title?: string | undefined;
};

const fetchedUserData: Fetchhhh = {
  id: 'asd213',
  // title: 'good',
};

console.log(fetchedUserData?.title);

// 90 nullish
const userrrInput = '';
// const storedDate = userInput || 'DEFAULT' // DEFAULT
const storedDate = userInput ?? 'DEFAULT'; // ''

// const good1 = (input: string | number) => {
//   if (<string>input) {
//     return input.length;
//   }
//   return input;
// };

// 93 제네릭
const names = ['kim', 'lee'];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('123');
  }, 2000);
});

promise.then((data) => {
  // return data.split(' ');
});

// 95. Creating a Generic Function
// 제네릭 함수로 타입선언 유연하게 하기

const merge = <T, U>(objA: T, objB: U) => Object.assign(objA, objB);
const mergeObj = merge({ name: 'kim', hobbies: ['sports', 1] }, { age: 29 });

// 96. Working with Constraints
// 제네릭에서 특정 값만 허용하고 싶을때 extends를 사용하여 선언해주면 된다!
const merge1 = <T extends object, U extends string>(objA: T, objB: U) =>
  Object.assign(objA, objB);
const mergeObj1 = merge1({ name: 'kim', hobbies: ['sports', 1] }, 'good');

interface Lengthy {
  length: number;
}

// 제네릭에서 동적타입을 받는데 length가 있는 string | Array를 적지 않고도 간단하게 작성 가능하다.
const countAndPrint = <T extends Lengthy>(elem: T): [T, string] => {
  let descriptionText = 'Got no Value.';
  if (elem.length > 0) descriptionText = `${elem.length}`;
  return [elem, descriptionText];
};

// const zz = countAndPrint(123); // length가 없어서 에러
const zz = countAndPrint(['good', 'zzz']);
