import type { TeamType } from "@/src/entities/teams";

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

export interface UpdateUserType extends Partial<UserType> {}
