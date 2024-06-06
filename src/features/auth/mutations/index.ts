import { useMutation, useQueryClient } from "@tanstack/react-query";

import { signIn, signUp } from "../api";
import type { SignInType, SignUpType, AuthResponseType } from "../types";

// Мутация для авторизации
export const useSignIn = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: SignInType) => signIn(data),
    onSuccess: (data: AuthResponseType) => {
      localStorage.setItem("jwtToken", data.jwtToken); // Записываем токен в хранилище
      window.dispatchEvent(new Event("storage")); // Вызываем ивент обновления хранилища
      queryClient.invalidateQueries({ queryKey: ["auth"] }); // Инвалидируем ключ 'auth'
    },
    onError: (error) => {
      console.error("Произошла ошибка при выполнении запроса:", error);
    },
  });
};

// Мутация для регистрации
export const useSignUp = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: SignUpType) => signUp(data),
    onSuccess: (data: AuthResponseType) => {
      localStorage.setItem("jwtToken", data.jwtToken);
      window.dispatchEvent(new Event("storage")); // Вызываем ивент обновления хранилища
      queryClient.invalidateQueries({ queryKey: ["auth"] }); // Инвалидируем ключ 'auth'
    },
    onError: (error) => {
      console.error("Произошла ошибка при выполнении запроса:", error);
    },
  });
};
