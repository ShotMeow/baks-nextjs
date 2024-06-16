import type { TagType } from "@/src/entities/tags";
import type { PaginationType } from "@/src/shared/types/global.types";

export interface PostType {
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

export interface PostFormType
  extends Omit<
    PostType,
    "id" | "updatedAt" | "createdAt" | "views" | "artworkUrl"
  > {
  imageFile: File;
}

export interface NewsType {
  data: PostType[];
  pagination: PaginationType;
}
