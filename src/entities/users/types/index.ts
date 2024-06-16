import type { TeamType } from "@/src/entities/teams";
import type { PaginationType } from "@/src/shared/types/global.types";

export interface UserType {
  id: number;
  email: string;
  nickname: string;
  name: string;
  pictureUrl?: string;
  role: "tank" | "attack" | "sniper" | "support";
  killDeaths?: number;
  deaths?: number;
  assists?: number;
  team?: TeamType;
  createdAt: Date;
}

export interface UserFormType
  extends Omit<UserType, "id" | "pictureUrl" | "role" | "createdAt"> {
  role: string;
}

export interface UsersType {
  data: UserType[];
  pagination: PaginationType;
}
