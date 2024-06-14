import type { TagType } from "@/src/entities/tags";

export interface NewsType {
  id: number;
  title: string;
  description: string;
  body: string;
  artworkUrl?: string;
  views: number;
  tags: TagType[];
  updatedAt: Date;
  createdAt: Date;
}

export interface NewsFormType
  extends Omit<
    NewsType,
    "id" | "updatedAt" | "createdAt" | "views" | "artworkUrl"
  > {
  imageFile: File;
}
