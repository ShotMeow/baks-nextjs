import { API_URL } from "@/src/shared/constants";
import { createFormData } from "@/src/shared/utils/createFormData";

import type { TagsFormType } from "../types";

export const getTags = async ({ searchQuery }: { searchQuery: string }) => {
  const queryParams =
    searchQuery && new URLSearchParams({ search: searchQuery });
  console.log(searchQuery);
  const response = await fetch(`${API_URL}/tags?${queryParams}`);
  return response.json();
};

export const getTagById = async (id: number) => {
  const response = await fetch(`${API_URL}/tags/${id}`);
  return response.json();
};

export const createTag = async (data: TagsFormType) => {
  const formData = createFormData(data);
  const response = await fetch(`${API_URL}/tags/create`, {
    method: "POST",
    body: formData,
  });
  return response.json();
};

export const updateTag = async (id: number, data: TagsFormType) => {
  const formData = createFormData(data);
  const response = await fetch(`${API_URL}/tags/${id}/update`, {
    method: "PATCH",
    body: formData,
  });
  return response.json();
};

export const deleteTag = async (id: number) => {
  const response = await fetch(`${API_URL}/tags/${id}/delete`, {
    method: "DELETE",
  });
  return response.json();
};
