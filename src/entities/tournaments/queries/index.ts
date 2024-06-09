import { useQuery } from "@tanstack/react-query";

import { getTournamentById, getTournaments } from "../api";
import { TournamentType } from "../types";

export const useGetTournaments = ({ searchQuery }: { searchQuery: string }) => {
  return useQuery<TournamentType[]>({
    queryKey: ["tournaments", searchQuery],
    queryFn: () => getTournaments({ searchQuery }),
  });
};

export const useGetTournamentById = (id: TournamentType["id"]) => {
  return useQuery<TournamentType>({
    queryKey: ["tournaments", id],
    queryFn: () => getTournamentById(id),
  });
};
