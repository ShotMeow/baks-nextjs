import { useQuery } from "@tanstack/react-query";

import { getTournamentById, getTournaments } from "../api";
import { TournamentType } from "../types";

export const useGetTournaments = ({
  search,
  tag,
  sort,
  take,
}: {
  search?: string;
  tag?: string;
  sort?: string;
  take?: number;
}) => {
  return useQuery<TournamentType[]>({
    queryKey: ["tournaments", { search, tag, sort, take }],
    queryFn: () => getTournaments({ search, tag, sort, take }),
  });
};

export const useGetTournamentById = (id: TournamentType["id"]) => {
  return useQuery<TournamentType>({
    queryKey: ["tournaments", id],
    queryFn: () => getTournamentById(id),
  });
};
