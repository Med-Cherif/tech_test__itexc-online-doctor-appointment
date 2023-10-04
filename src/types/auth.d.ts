export interface TLoginData {
  email: string;
  password: string;
}

export interface TRegisterData extends TLoginData {
  name: string;
}
