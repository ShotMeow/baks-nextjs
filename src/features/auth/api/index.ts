import { API_URL } from "@/src/shared/constants";

import type { SignInType, SignUpType } from "../types";
import { createFormData } from "@/src/shared/utils/createFormData";

// Endpoint для авторизации
export const signIn = async (data: SignInType) => {
  const formData = createFormData({ ...data, repeatPassword: null });

  const response = await fetch(`${API_URL}/sign-in`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

// Endpoint для регистрации
export const signUp = async (data: SignUpType) => {
  const formData = createFormData({ ...data, repeatPassword: null });

  const response = await fetch(`${API_URL}/sign-up`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};
