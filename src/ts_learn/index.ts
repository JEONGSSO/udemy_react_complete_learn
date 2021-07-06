// 튜플 고정된 타입
enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 'READ_ONLY',
  AUTHOR = 'AUTHOR',
}

const person = {
  name: 'kim',
  phoneNumber: 322,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

// const combine = (a: number, b: number): number => a + b;
const combine = (a: number | string, b: number | string): number | string =>
  a + b;

// const person: {
//   name: string,
//   phoneNumber: number,
//   hobbies: string[],
//   role: Role.ADMIN
// } = {
//   name : 'kim',
//   phoneNumber: 322,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// }
