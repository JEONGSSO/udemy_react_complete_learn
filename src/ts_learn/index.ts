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

const generateError = (message: string, code: number): never => {
  throw { message: message, errorCode: code };
};

generateError('An error', 500);

const button = document.querySelector('button');

const clickHanlder = ({ target }: MouseEvent) => {
  console.log(target);
};

button?.addEventListener('click', clickHanlder);

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

const addd = (a: Combinable, b: Combinable) => {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
};

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
