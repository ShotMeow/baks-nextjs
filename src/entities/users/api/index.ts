import { API_URL } from "@/src/shared/constants";
import type { UpdateUserType, UserType } from "../types";

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
};

export const getUserById = async (id: UserType["id"]) => {
  const response = await fetch(`${API_URL}/users/${id}`);
  return response.json();
};

export const updateUser = async (user: UpdateUserType) => {
  const response = await fetch(`${API_URL}/users/${user.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
};

export const deleteUser = async (id: UserType["id"]) => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
