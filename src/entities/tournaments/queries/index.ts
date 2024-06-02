import { useQuery } from "@tanstack/react-query";

import { getTournamentById, getTournaments } from "../api";
import { TournamentType } from "../types";

export const useGetTournaments = () => {
  return useQuery<TournamentType[]>({
    queryKey: ["tournaments"],
    queryFn: getTournaments,
  });
};

export const useGetTournamentById = (id: TournamentType["id"]) => {
  return useQuery<TournamentType>({
    queryKey: ["tournaments", id],
    queryFn: () => getTournamentById(id),
  });
};
