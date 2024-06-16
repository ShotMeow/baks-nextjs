import { API_URL } from "@/src/shared/constants";
import { createFormData } from "@/src/shared/utils/createFormData";

import type { PostFormType, PostType } from "../types";

export const addViewToPost = async (id: number) => {
  const response = await fetch(`${API_URL}/news/${id}/view`);

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const getNews = async ({
  page,
  search,
  tag,
  sort,
  take,
}: {
  page?: number;
  search?: string;
  tag?: string;
  sort?: string;
  take?: number;
}) => {
  const queryParams = new URLSearchParams();

  page && queryParams.append("page", String(page));
  search && queryParams.append("search", search);
  tag && queryParams.append("tag", tag);
  sort && queryParams.append("sort", sort);
  take && queryParams.append("take", String(take));

  const response = await fetch(`${API_URL}/news?${queryParams}`);

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const getNewsById = async (id: PostType["id"]) => {
  const response = await fetch(`${API_URL}/news/${id}`);

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const createNews = async (data: PostFormType) => {
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

export const updateNews = async (id: PostType["id"], data: PostFormType) => {
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

export const deleteNews = async (id: PostType["id"]) => {
  const response = await fetch(`${API_URL}/news/${id}/delete`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};
