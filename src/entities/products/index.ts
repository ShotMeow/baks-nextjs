export {
  useCreateProduct,
  useDeleteProduct,
  useUpdateProduct,
} from "./mutations";
export { useGetProductById, useGetProducts } from "./queries";
export { getProducts } from "./api";
export type {
  CreateProductType,
  UpdateProductType,
  ProductType,
} from "./types";
