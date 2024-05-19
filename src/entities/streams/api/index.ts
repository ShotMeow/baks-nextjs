import { API_URL } from "@/src/shared/constants";
import type { CreateStreamType, UpdateStreamType } from "../types";

export const getStreams = async () => {
  const response = await fetch(`${API_URL}/streams`);
  return response.json();
};

export const getStreamById = async (id: number) => {
  const response = await fetch(`${API_URL}/streams/${id}`);
  return response.json();
};

export const createStream = async (stream: CreateStreamType) => {
  const response = await fetch(`${API_URL}/streams`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(stream),
  });
  return response.json();
};

export const updateStream = async (stream: UpdateStreamType) => {
  const response = await fetch(`${API_URL}/streams/${stream.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(stream),
  });
  return response.json();
};

export const deleteStream = async (id: number) => {
  const response = await fetch(`${API_URL}/streams/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
