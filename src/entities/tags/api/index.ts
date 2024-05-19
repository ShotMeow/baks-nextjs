import { API_URL } from "@/src/shared/constants";
import type { CreateTagType, UpdateTagType } from "../types";

export const getTags = async () => {
  const response = await fetch(`${API_URL}/tags`);
  return response.json();
};

export const getTagById = async (id: number) => {
  const response = await fetch(`${API_URL}/tags/${id}`);
  return response.json();
};

export const createTag = async (tag: CreateTagType) => {
  const response = await fetch(`${API_URL}/tags`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: tag.name }),
  });
  return response.json();
};

export const updateTag = async (tag: UpdateTagType) => {
  const response = await fetch(`${API_URL}/tags/${tag.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tag),
  });
  return response.json();
};

export const deleteTag = async (id: number) => {
  const response = await fetch(`${API_URL}/tags/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
