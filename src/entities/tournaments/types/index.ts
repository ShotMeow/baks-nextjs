import type { TeamType } from "@/src/entities/teams";

export interface TournamentType {
  id: number;
  name: string;
  description: string;
  body: string;
  prize: number;
  mode: string;
  type: string;
  artworkUrl: string;
  teams: TeamType[];
  address: string;
  eventDate: Date;
  createdAt: Date;
}

export interface CreateTournamentType {
  name: string;
  description: string;
  prize: number;
  mode: string;
  type: string;
  teams: number[];
  artworkUrl: string;
  address: string;
  eventDate: Date;
}

export interface UpdateTournamentType extends CreateTournamentType {
  id: number;
}
