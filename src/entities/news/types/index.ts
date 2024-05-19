import { TagType } from "@/src/entities/tags";

export interface NewsType {
  id: number;
  title: string;
  description: string;
  body: string;
  artworkUrl: string;
  tags: TagType[];
  createdAt: Date;
}

export interface CreateNewsType {
  title: string;
  description: string;
  body: string;
  artworkUrl: string;
  tags?: number[];
}

export interface UpdateNewsType extends CreateNewsType {
  id: number;
}
