import { useQuery } from "@tanstack/react-query";

import { getTournamentById, getTournaments } from "../api";
import type { TournamentsType, TournamentType } from "../types";

export const useGetTournaments = ({
  page,
  search,
  tag,
  sort,
  take,
}: {
  page?: string;
  search?: string;
  tag?: string;
  sort?: string;
  take?: number;
}) => {
  return useQuery<TournamentsType>({
    queryKey: ["tournaments", { page, search, tag, sort, take }],
    queryFn: () => getTournaments({ page, search, tag, sort, take }),
  });
};

export const useGetTournamentById = (id: TournamentType["id"]) => {
  return useQuery<TournamentType>({
    queryKey: ["tournaments", id],
    queryFn: () => getTournamentById(id),
  });
};
