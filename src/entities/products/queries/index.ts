import { useQuery } from "@tanstack/react-query";

import type { ProductType } from "../types";
import { getProductById, getProducts } from "../api";

export const useGetProducts = ({
  search,
  take,
}: {
  search?: string;
  take?: number;
}) => {
  return useQuery<ProductType[]>({
    queryKey: ["products", { search, take }],
    queryFn: () => getProducts({ search, take }),
  });
};

export const useGetProductById = (id: ProductType["id"]) => {
  return useQuery<ProductType>({
    queryKey: ["products", id],
    queryFn: () => getProductById(id),
  });
};
