import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn, signUp } from "../api";
import type { SignInType, SignUpType, AuthResponseType } from "../types";

export const useSignIn = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: SignInType) => signIn(data),
    onSuccess: (data: AuthResponseType) => {
      localStorage.setItem("jwtToken", data.jwtToken);
      window.dispatchEvent(new Event("storage"));
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
};

export const useSignUp = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: SignUpType) => signUp(data),
    onSuccess: (data: AuthResponseType) => {
      localStorage.setItem("jwtToken", data.jwtToken);
      window.dispatchEvent(new Event("storage"));
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
};
