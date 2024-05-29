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
  const formData = new FormData();
  formData.set("title", news.title);
  formData.set("description", news.description);
  formData.set("body", news.body);
  formData.set("tags", news.tags?.join(",") || "");
  formData.set("image", news.image);

  const response = await fetch(`${API_URL}/news`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: formData,
  });
  return response.json();
};

export const updateNews = async (news: UpdateNewsType) => {
  const formData = new FormData();
  formData.set("id", String(news.id));
  formData.set("title", news.title);
  formData.set("description", news.description);
  formData.set("body", news.body);
  formData.set("tags", news.tags?.join(",") || "");
  formData.set("image", news.image);
  console.log(formData);

  const response = await fetch(`${API_URL}/news/${news.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
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
