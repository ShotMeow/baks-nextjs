import { API_URL } from "@/src/shared/constants";

import type { SignInType, SignUpType } from "../types";

export const signIn = async (data: SignInType) => {
  const response = await fetch(`${API_URL}/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const signUp = async (data: SignUpType) => {
  const response = await fetch(`${API_URL}/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
