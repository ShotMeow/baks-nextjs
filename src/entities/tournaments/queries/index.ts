import { useQuery } from "@tanstack/react-query";

import { getTournamentById, getTournaments } from "../api";
import { TournamentType } from "../types";

export const useGetTournaments = ({
  searchQuery,
  tagQuery,
  sortQuery,
}: {
  searchQuery: string;
  tagQuery: string;
  sortQuery: string;
}) => {
  return useQuery<TournamentType[]>({
    queryKey: ["tournaments", { searchQuery, tagQuery, sortQuery }],
    queryFn: () => getTournaments({ searchQuery, tagQuery, sortQuery }),
  });
};

export const useGetTournamentById = (id: TournamentType["id"]) => {
  return useQuery<TournamentType>({
    queryKey: ["tournaments", id],
    queryFn: () => getTournamentById(id),
  });
};
