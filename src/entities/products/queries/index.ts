import { useQuery } from "@tanstack/react-query";

import type { ProductType } from "../types";
import { getProductById, getProducts } from "../api";

export const useGetProducts = ({ take }: { take?: number }) => {
  return useQuery<ProductType[]>({
    queryKey: ["products", { take }],
    queryFn: () => getProducts({ take }),
  });
};

export const useGetProductById = (id: ProductType["id"]) => {
  return useQuery<ProductType>({
    queryKey: ["products", id],
    queryFn: () => getProductById(id),
  });
};
