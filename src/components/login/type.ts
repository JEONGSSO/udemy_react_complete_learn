export interface UserData {
  password: string;
  email: string;
}

export interface ValidLogin extends UserData {
  users: UserData[];
}
