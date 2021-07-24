export interface UserData {
  email: string;
  password: string;
}

export interface ValidLogin extends UserData {
  users: UserData[];
}
