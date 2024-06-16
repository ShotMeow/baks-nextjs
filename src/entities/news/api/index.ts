import { API_URL } from "@/src/shared/constants";
import { createFormData } from "@/src/shared/utils/createFormData";

import type { NewsFormType, NewsType } from "../types";

export const addViewToPost = async (id: number) => {
  const response = await fetch(`${API_URL}/news/${id}/view`);
  return response.json();
};

export const getNews = async ({
  search,
  tag,
  sort,
  take,
}: {
  search?: string;
  tag?: string;
  sort?: string;
  take?: number;
}) => {
  const queryParams = new URLSearchParams();

  search && queryParams.append("search", search);
  tag && queryParams.append("tag", tag);
  sort && queryParams.append("sort", sort);
  take && queryParams.append("take", String(take));

  const response = await fetch(`${API_URL}/news?${queryParams}`);
  return response.json();
};

export const getNewsById = async (id: NewsType["id"]) => {
  const response = await fetch(`${API_URL}/news/${id}`);

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const createNews = async (data: NewsFormType) => {
  const formData = createFormData({
    ...data,
    tags: data.tags?.map((tag) => tag.id),
  });

  const response = await fetch(`${API_URL}/news/create`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const updateNews = async (id: NewsType["id"], data: NewsFormType) => {
  const formData = createFormData({
    ...data,
    tags: data.tags?.map((tag) => tag.id),
  });

  const response = await fetch(`${API_URL}/news/${id}/edit`, {
    method: "PATCH",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const deleteNews = async (id: NewsType["id"]) => {
  const response = await fetch(`${API_URL}/news/${id}/delete`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};
