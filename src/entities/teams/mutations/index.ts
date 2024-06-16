import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createTeam, deleteTeam, updateTeam } from "../api";
import type { TeamFormType, TeamType } from "../types";

export const useCreateTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TeamFormType) => createTeam(data),
    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries({ queryKey: ["teams"] }),
        queryClient.invalidateQueries({ queryKey: ["users"] }),
      ]);
    },
    onError: (error) => {
      console.error("Произошла ошибка при выполнении запроса:", error);
    },
  });
};

export const useUpdateTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: TeamType["id"]; data: TeamFormType }) =>
      updateTeam(id, data),
    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries({ queryKey: ["teams"] }),
        queryClient.invalidateQueries({ queryKey: ["users"] }),
      ]);
    },
    onError: (error) => {
      console.error("Произошла ошибка при выполнении запроса:", error);
    },
  });
};

export const useDeleteTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTeam,
    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries({ queryKey: ["teams"] }),
        queryClient.invalidateQueries({ queryKey: ["users"] }),
      ]);
    },
    onError: (error) => {
      console.error("Произошла ошибка при выполнении запроса:", error);
    },
  });
};
