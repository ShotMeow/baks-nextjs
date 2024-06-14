import { API_URL } from "@/src/shared/constants";

import type { UserFormType, UserType } from "../types";
import { createFormData } from "@/src/shared/utils/createFormData";

export const getUsers = async ({ search }: { search?: string }) => {
  const queryParams = new URLSearchParams();

  search && queryParams.append("search", String(search));

  const response = await fetch(`${API_URL}/users?${queryParams}`);
  return response.json();
};

export const getUserById = async (id: UserType["id"]) => {
  const response = await fetch(`${API_URL}/users/${id}`);
  return response.json();
};

export const updateUser = async (id: UserType["id"], data: UserFormType) => {
  const formData = createFormData(data);

  const response = await fetch(`${API_URL}/users/${id}/edit`, {
    method: "PATCH",
    body: formData,
  });
  return response.json();
};

export const deleteUser = async (id: UserType["id"]) => {
  const response = await fetch(`${API_URL}/users/${id}/delete`, {
    method: "DELETE",
  });
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
  return response.json();
};
