import type { TeamType } from "@/src/entities/teams";
import type { DateTime } from "@gravity-ui/date-utils";

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
  eventDate: DateTime;
  createdAt: Date;
}

export interface TournamentFormType
  extends Omit<TournamentType, "id" | "createdAt" | "artworkUrl"> {
  imageFile: File;
}
