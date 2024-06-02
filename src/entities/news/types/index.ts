import type { TagType } from "@/src/entities/tags";

export interface NewsType {
  id: number;
  title: string;
  description: string;
  body: string;
  artworkUrl: string;
  tags: TagType[];
  createdAt: Date;
}

export interface NewsFormType
  extends Omit<NewsType, "id" | "createdAt" | "artworkUrl"> {
  imageFile: File;
}
