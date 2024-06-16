import { API_URL } from "@/src/shared/constants";
import { createFormData } from "@/src/shared/utils/createFormData";

import type { StreamFormType, StreamType } from "../types";

export const getStreams = async ({
  search,
  take,
}: {
  search?: string;
  take?: number;
}) => {
  const queryParams = new URLSearchParams();

  search && queryParams.append("search", String(search));
  take && queryParams.append("take", String(take));

  const response = await fetch(`${API_URL}/streams?${queryParams}`);

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const getStreamById = async (id: StreamType["id"]) => {
  const response = await fetch(`${API_URL}/streams/${id}`);

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const createStream = async (data: StreamFormType) => {
  const formData = createFormData(data);

  const response = await fetch(`${API_URL}/streams/create`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const updateStream = async (
  id: StreamType["id"],
  data: StreamFormType,
) => {
  const formData = createFormData(data);

  const response = await fetch(`${API_URL}/streams/${id}/edit`, {
    method: "PATCH",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const deleteStream = async (id: StreamType["id"]) => {
  const response = await fetch(`${API_URL}/streams/${id}/delete`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};
