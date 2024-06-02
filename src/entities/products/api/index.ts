import { API_URL } from "@/src/shared/constants";
import { createFormData } from "@/src/shared/utils/createFormData";

import type { ProductFormType } from "../types";

export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  return response.json();
};

export const getProductById = async (id: number) => {
  const response = await fetch(`${API_URL}/products/${id}`);
  return response.json();
};

export const createProduct = async (data: ProductFormType) => {
  const formData = createFormData(data);
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    body: formData,
  });
  return response.json();
};

export const updateProduct = async (id: number, data: ProductFormType) => {
  const formData = createFormData(data);
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "PATCH",
    body: formData,
  });
  return response.json();
};

export const deleteProduct = async (id: number) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
