import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTournament, deleteTournament, updateTournament } from "../api";
import type { CreateTournamentType, UpdateTournamentType } from "../types";

export const useCreateTournament = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (tournament: CreateTournamentType) =>
      createTournament(tournament),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tournaments"] });
    },
  });
};

export const useUpdateTournament = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (tournament: UpdateTournamentType) =>
      updateTournament(tournament),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tournaments"] });
    },
  });
};

export const useDeleteTournament = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTournament,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tournaments"] });
    },
  });
};
