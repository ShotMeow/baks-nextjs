import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createStream, deleteStream, updateStream } from "../api";
import type { StreamFormType, StreamType } from "../types";

export const useCreateStream = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: StreamFormType) => createStream(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["streams"] });
    },
    onError: (error) => {
      console.error("Произошла ошибка при выполнении запроса:", error);
    },
  });
};

export const useUpdateStream = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: StreamType["id"];
      data: StreamFormType;
    }) => updateStream(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["streams"] });
    },
    onError: (error) => {
      console.error("Произошла ошибка при выполнении запроса:", error);
    },
  });
};

export const useDeleteStream = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: StreamType["id"]) => deleteStream(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["streams"] });
    },
    onError: (error) => {
      console.error("Произошла ошибка при выполнении запроса:", error);
    },
  });
};
