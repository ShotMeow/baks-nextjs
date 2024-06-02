export interface ProductType {
  id: number;
  name: string;
  pictureUrl: string;
  price: number;
  createdAt: Date;
}

export interface ProductFormType
  extends Omit<ProductType, "id" | "createdAt" | "pictureUrl"> {
  imageFile: File;
}
