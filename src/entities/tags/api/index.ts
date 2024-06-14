import { API_URL } from "@/src/shared/constants";
import { createFormData } from "@/src/shared/utils/createFormData";

import type { TagsFormType, TagType } from "../types";

export const getTags = async ({ search }: { search?: string }) => {
  const queryParams = new URLSearchParams();

  search && queryParams.append("search", search);

  const response = await fetch(`${API_URL}/tags?${queryParams}`);
  return response.json();
};

export const getTagById = async (id: TagType["id"]) => {
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

export const updateTag = async (id: TagType["id"], data: TagsFormType) => {
  const formData = createFormData(data);
  const response = await fetch(`${API_URL}/tags/${id}/edit`, {
    method: "PATCH",
    body: formData,
  });
  return response.json();
};

export const deleteTag = async (id: TagType["id"]) => {
  const response = await fetch(`${API_URL}/tags/${id}/delete`, {
    method: "DELETE",
  });
  return response.json();
};
