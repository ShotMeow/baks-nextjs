import type { UserType } from "@/src/entities/users";
import type { TournamentType } from "@/src/entities/tournaments";

export interface TeamType {
  id: number;
  name: string;
  body: string;
  winsPercent?: number;
  gamesCount?: number;
  logoUrl?: string;
  players: UserType[];
  tournaments: TournamentType[];
  lastMatch?: Date;
  createdAt: Date;
}

export interface CreateTeamType {
  name: string;
  body: string;
  tournaments: number[];
  players: number[];
}

export interface UpdateTeamType extends CreateTeamType {
  id: number;
}
