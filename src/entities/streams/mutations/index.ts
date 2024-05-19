import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createStream, deleteStream, updateStream } from "../api";
import type { CreateStreamType, StreamType, UpdateStreamType } from "../types";

export const useCreateStream = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (stream: CreateStreamType) => createStream(stream),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["streams"] });
    },
  });
};

export const useUpdateStream = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (stream: UpdateStreamType) => updateStream(stream),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["streams"] });
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
  });
};
