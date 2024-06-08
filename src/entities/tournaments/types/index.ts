import type { TeamType } from "@/src/entities/teams";
import type { TagType } from "@/src/entities/tags";

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
  tags: TagType[];
  eventDate?: string;
  createdAt: Date;
}

export interface TournamentFormType
  extends Omit<TournamentType, "id" | "createdAt" | "artworkUrl"> {
  imageFile: File;
}
