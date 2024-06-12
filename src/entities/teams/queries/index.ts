import { useQuery } from "@tanstack/react-query";

import { getTeamById, getTeams } from "../api";
import type { TeamType } from "../types";

export const useGetTeams = ({
  search,
  sort,
  take,
}: {
  search?: string;
  sort?: string;
  take?: number;
}) => {
  return useQuery<TeamType[]>({
    queryKey: ["teams", { search, sort, take }],
    queryFn: () => getTeams({ search, sort, take }),
  });
};

export const useGetTeamById = (id: TeamType["id"]) => {
  return useQuery<TeamType>({
    queryKey: ["teams", id],
    queryFn: () => getTeamById(id),
  });
};
