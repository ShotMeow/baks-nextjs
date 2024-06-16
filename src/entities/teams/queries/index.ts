import { useQuery } from "@tanstack/react-query";

import { getTeamById, getTeams } from "../api";
import type { TeamsType, TeamType } from "../types";

export const useGetTeams = ({
  page,
  search,
  sort,
  take,
}: {
  page?: string;
  search?: string;
  sort?: string;
  take?: number;
}) => {
  return useQuery<TeamsType>({
    queryKey: ["teams", { page, search, sort, take }],
    queryFn: () => getTeams({ page, search, sort, take }),
  });
};

export const useGetTeamById = (id: TeamType["id"]) => {
  return useQuery<TeamType>({
    queryKey: ["teams", id],
    queryFn: () => getTeamById(id),
  });
};
