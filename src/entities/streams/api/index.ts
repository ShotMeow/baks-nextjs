import { API_URL } from "@/src/shared/constants";
import { createFormData } from "@/src/shared/utils/createFormData";

import type { StreamFormType } from "../types";

export const getStreams = async () => {
  const response = await fetch(`${API_URL}/streams`);
  return response.json();
};

export const getStreamById = async (id: number) => {
  const response = await fetch(`${API_URL}/streams/${id}`);
  return response.json();
};

export const createStream = async (data: StreamFormType) => {
  const formData = createFormData(data);

  const response = await fetch(`${API_URL}/streams`, {
    method: "POST",
    body: formData,
  });
  return response.json();
};

export const updateStream = async (id: number, data: StreamFormType) => {
  const formData = createFormData(data);

  const response = await fetch(`${API_URL}/streams/${id}`, {
    method: "PATCH",
    body: formData,
  });
  return response.json();
};

export const deleteStream = async (id: number) => {
  const response = await fetch(`${API_URL}/streams/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
