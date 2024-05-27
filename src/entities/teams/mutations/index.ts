import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTeam, deleteTeam, updateTeam } from "../api";
import type { CreateTeamType, UpdateTeamType } from "../types";

export const useCreateTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (team: CreateTeamType) => createTeam(team),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teams", "users"] });
    },
  });
};

export const useUpdateTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (team: UpdateTeamType) => updateTeam(team),
    onSuccess: () =>
      Promise.all([
        queryClient.invalidateQueries({ queryKey: ["teams"] }),
        queryClient.invalidateQueries({ queryKey: ["users"] }),
      ]),
  });
};

export const useDeleteTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTeam,
    onSuccess: () =>
      Promise.all([
        queryClient.invalidateQueries({ queryKey: ["teams"] }),
        queryClient.invalidateQueries({ queryKey: ["users"] }),
      ]),
  });
};
