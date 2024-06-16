import { useQuery } from "@tanstack/react-query";

import type { ProductsType, ProductType } from "../types";
import { getProductById, getProducts } from "../api";

export const useGetProducts = ({
  page,
  search,
  take,
}: {
  page?: string;
  search?: string;
  take?: number;
}) => {
  return useQuery<ProductsType>({
    queryKey: ["products", { page, search, take }],
    queryFn: () => getProducts({ page, search, take }),
  });
};

export const useGetProductById = (id: ProductType["id"]) => {
  return useQuery<ProductType>({
    queryKey: ["products", id],
    queryFn: () => getProductById(id),
  });
};
