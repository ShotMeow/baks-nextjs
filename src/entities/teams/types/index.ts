import type { UserType } from "@/src/entities/users";
import type { TournamentType } from "@/src/entities/tournaments";
import type { PaginationType } from "@/src/shared/types/global.types";

export interface TeamType {
  id: number;
  name: string;
  body?: string;
  winsPercent?: number;
  gamesCount?: number;
  logoUrl?: string;
  players: UserType[];
  tournaments: TournamentType[];
  lastMatch?: string;
  createdAt: Date;
}

export interface TeamFormType
  extends Omit<TeamType, "id" | "createdAt" | "logoUrl"> {
  imageFile: File;
}

export interface TeamsType {
  data: TeamType[];
  pagination: PaginationType;
}
