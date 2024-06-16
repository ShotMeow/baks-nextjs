import type { PaginationType } from "@/src/shared/types/global.types";

export interface TagType {
  id: number;
  name: string;
  createdAt: Date;
}

export interface TagsFormType extends Omit<TagType, "id" | "createdAt"> {}

export interface TagsType {
  data: TagType[];
  pagination: PaginationType;
}
