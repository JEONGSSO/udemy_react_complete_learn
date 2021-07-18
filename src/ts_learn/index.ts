const Nothing = Symbol('nothing');
type Nothing = typeof Nothing;
type Maybe<T> = T | Nothing;

// 튜플 고정된 타입
enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 'READ_ONLY',
  AUTHOR = 'AUTHOR',
}

type Combinable = number;

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

const combine = (a: Combinable, b: Combinable): Combinable => a + b;

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
