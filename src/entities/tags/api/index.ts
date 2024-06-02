import { API_URL } from "@/src/shared/constants";
import { createFormData } from "@/src/shared/utils/createFormData";

import type { TagsFormType } from "../types";

export const getTags = async () => {
  const response = await fetch(`${API_URL}/tags`);
  return response.json();
};

export const getTagById = async (id: number) => {
  const response = await fetch(`${API_URL}/tags/${id}`);
  return response.json();
};

export const createTag = async (data: TagsFormType) => {
  const formData = createFormData(data);
  const response = await fetch(`${API_URL}/tags`, {
    method: "POST",
    body: formData,
  });
  return response.json();
};

export const updateTag = async (id: number, data: TagsFormType) => {
  const formData = createFormData(data);
  const response = await fetch(`${API_URL}/tags/${id}`, {
    method: "PATCH",
    body: formData,
  });
  return response.json();
};

export const deleteTag = async (id: number) => {
  const response = await fetch(`${API_URL}/tags/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
