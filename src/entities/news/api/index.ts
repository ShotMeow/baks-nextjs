import { API_URL } from "@/src/shared/constants";
import type { CreateNewsType, NewsType, UpdateNewsType } from "../types";

export const getNews = async () => {
  const response = await fetch(`${API_URL}/news`);
  return response.json();
};

export const getNewsById = async (id: NewsType["id"]) => {
  const response = await fetch(`${API_URL}/news/${id}`);
  return response.json();
};

export const createNews = async (news: CreateNewsType) => {
  const response = await fetch(`${API_URL}/news`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(news),
  });
  return response.json();
};

export const updateNews = async (news: UpdateNewsType) => {
  const response = await fetch(`${API_URL}/news/${news.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(news),
  });
  return response.json();
};

export const deleteNews = async (id: NewsType["id"]) => {
  const response = await fetch(`${API_URL}/news/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
