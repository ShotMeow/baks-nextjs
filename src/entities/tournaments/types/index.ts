import type { TeamType } from "@/src/entities/teams";
import type { TagType } from "@/src/entities/tags";
import type { PaginationType } from "@/src/shared/types/global.types";

export interface TournamentType {
  id: number;
  name: string;
  description: string;
  body?: string;
  prize?: number;
  mode?: string;
  type?: string;
  artworkUrl?: string;
  teams: TeamType[];
  address?: string;
  tags: TagType[];
  eventDate?: string;
  gridUrl?: string;
  createdAt: Date;
}

export interface TournamentFormType
  extends Omit<TournamentType, "id" | "createdAt" | "artworkUrl"> {
  imageFile: File;
}

export interface TournamentsType {
  data: TournamentType[];
  pagination: PaginationType;
}
