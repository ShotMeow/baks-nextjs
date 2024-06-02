import { useQuery } from "@tanstack/react-query";

import type { ProductType } from "../types";
import { getProductById, getProducts } from "../api";

export const useGetProducts = () => {
  return useQuery<ProductType[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

export const useGetProductById = (id: ProductType["id"]) => {
  return useQuery<ProductType>({
    queryKey: ["products", id],
    queryFn: () => getProductById(id),
  });
};
