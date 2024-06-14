import type { UserType } from "@/src/entities/users";
import type { TournamentType } from "@/src/entities/tournaments";

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
