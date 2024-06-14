import { UserType } from "@/src/entities/users";

export interface SignInType {
  email: UserType["role"];
  password: string;
}

export interface SignUpType {
  email: UserType["email"];
  imageFile: File;
  password: string;
  repeatPassword: string;
  nickname: UserType["nickname"];
  name: UserType["name"];
  role: string;
}

export interface AuthResponseType {
  jwtToken: string;
}
