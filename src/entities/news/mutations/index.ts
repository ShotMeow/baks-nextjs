import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createNews, deleteNews, updateNews } from "../api";
import type { PostFormType, PostType } from "../types";

export const useCreateNews = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: PostFormType) => createNews(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
    onError: (error) => {
      console.error("Произошла ошибка при выполнении запроса:", error);
    },
  });
};

export const useUpdateNews = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: PostType["id"]; data: PostFormType }) =>
      updateNews(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
    onError: (error) => {
      console.error("Произошла ошибка при выполнении запроса:", error);
    },
  });
};

export const useDeleteNews = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: PostType["id"]) => deleteNews(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
    onError: (error) => {
      console.error("Произошла ошибка при выполнении запроса:", error);
    },
  });
};
