import { API_URL } from "@/src/shared/constants";
import { createFormData } from "@/src/shared/utils/createFormData";

import type { ProductFormType, ProductType } from "../types";

export const getProducts = async ({
  search,
  take,
}: {
  search?: string;
  take?: number;
}) => {
  const queryParams = new URLSearchParams();

  search && queryParams.append("search", String(search));
  take && queryParams.append("take", String(take));

  const response = await fetch(`${API_URL}/products?${queryParams}`);
  return response.json();
};

export const getProductById = async (id: ProductType["id"]) => {
  const response = await fetch(`${API_URL}/products/${id}`);
  return response.json();
};

export const createProduct = async (data: ProductFormType) => {
  const formData = createFormData(data);
  const response = await fetch(`${API_URL}/products/create`, {
    method: "POST",
    body: formData,
  });
  return response.json();
};

export const updateProduct = async (
  id: ProductType["id"],
  data: ProductFormType,
) => {
  const formData = createFormData(data);
  const response = await fetch(`${API_URL}/products/${id}/edit`, {
    method: "PATCH",
    body: formData,
  });
  return response.json();
};

export const deleteProduct = async (id: ProductType["id"]) => {
  const response = await fetch(`${API_URL}/products/${id}/delete`, {
    method: "DELETE",
  });
  return response.json();
};
