export interface ProductType {
  id: number;
  name: string;
  pictureUrl: string;
  price: number;
  created_at: Date;
}

export interface CreateProductType {
  name: string;
  pictureUrl: string;
  price: number;
}

export interface UpdateProductType extends CreateProductType {
  id: number;
}
