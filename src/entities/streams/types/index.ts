import type { PaginationType } from "@/src/shared/types/global.types";

export interface StreamType {
  id: number;
  title: string;
  description?: string;
  channel: string;
  posterUrl?: string;
  createdAt: Date;
}

export interface StreamFormType
  extends Omit<StreamType, "id" | "createdAt" | "posterUrl"> {
  imageFile: File;
}

export interface StreamsType {
  data: StreamType[];
  pagination: PaginationType;
}
