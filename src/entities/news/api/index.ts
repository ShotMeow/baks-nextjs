import { API_URL } from "@/src/shared/constants";
import { createFormData } from "@/src/shared/utils/createFormData";

import type { NewsFormType, NewsType } from "../types";

export const getNews = async ({ searchQuery }: { searchQuery: string }) => {
  const queryParams =
    searchQuery && new URLSearchParams({ search: searchQuery });

  const response = await fetch(`${API_URL}/news?${queryParams}`);
  return response.json();
};

export const getNewsById = async (id: NewsType["id"]) => {
  const response = await fetch(`${API_URL}/news/${id}`);
  return response.json();
};

export const createNews = async (data: NewsFormType) => {
  const formData = createFormData({
    ...data,
    tags: data.tags?.map((tag) => tag.id),
  });

  const response = await fetch(`${API_URL}/news`, {
    method: "POST",
    body: formData,
  });
  return response.json();
};

export const updateNews = async (id: number, data: NewsFormType) => {
  const formData = createFormData({
    ...data,
    tags: data.tags?.map((tag) => tag.id),
  });

  const response = await fetch(`${API_URL}/news/${id}`, {
    method: "PATCH",
    body: formData,
  });
  return response.json();
};

export const deleteNews = async (id: NewsType["id"]) => {
  const response = await fetch(`${API_URL}/news/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
