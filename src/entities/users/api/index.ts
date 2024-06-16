import { API_URL } from "@/src/shared/constants";

import type { UserFormType, UserType } from "../types";
import { createFormData } from "@/src/shared/utils/createFormData";

export const getUsers = async ({
  page,
  take,
  search,
}: {
  page?: string;
  take?: number;
  search?: string;
}) => {
  const queryParams = new URLSearchParams();

  page && queryParams.append("page", String(page));
  take && queryParams.append("take", String(take));
  search && queryParams.append("search", String(search));

  const response = await fetch(`${API_URL}/users?${queryParams}`);

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const getUserById = async (id: UserType["id"]) => {
  const response = await fetch(`${API_URL}/users/${id}`);

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const updateUser = async (id: UserType["id"], data: UserFormType) => {
  const formData = createFormData(data);

  const response = await fetch(`${API_URL}/users/${id}/edit`, {
    method: "PATCH",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const deleteUser = async (id: UserType["id"]) => {
  const response = await fetch(`${API_URL}/users/${id}/delete`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const getAuthUser = async (jwtToken: string | null) => {
  if (!jwtToken) {
    throw new Error("JWT token is missing");
  }

  const response = await fetch(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};
