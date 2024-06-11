import { API_URL } from "@/src/shared/constants";
import { createFormData } from "@/src/shared/utils/createFormData";

import type { NewsFormType, NewsType } from "../types";

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
  return response.json();
};

export const updateNews = async (id: number, data: NewsFormType) => {
  const formData = createFormData({
    ...data,
    tags: data.tags?.map((tag) => tag.id),
  });

  const response = await fetch(`${API_URL}/news/${id}/update`, {
    method: "PATCH",
    body: formData,
  });
  return response.json();
};

export const deleteNews = async (id: NewsType["id"]) => {
  const response = await fetch(`${API_URL}/news/${id}/delete`, {
    method: "DELETE",
  });
  return response.json();
};
