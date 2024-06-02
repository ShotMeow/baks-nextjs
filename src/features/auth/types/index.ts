export interface SignInType {
  email: string;
  password: string;
}

export interface SignUpType {
  email: string;
  password: string;
  repeatPassword: string;
  nickname: string;
  name: string;
  role: string;
}

export interface AuthResponseType {
  jwtToken: string;
}
