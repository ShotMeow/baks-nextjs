import type { PaginationType } from "@/src/shared/types/global.types";

export interface ProductType {
  id: number;
  name: string;
  description?: string;
  pictureUrl?: string;
  price?: number;
  createdAt: Date;
}

export interface ProductFormType
  extends Omit<ProductType, "id" | "createdAt" | "pictureUrl"> {
  imageFile: File;
}

export interface ProductsType {
  data: ProductType[];
  pagination: PaginationType;
}
