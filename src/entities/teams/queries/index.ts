import { useQuery } from "@tanstack/react-query";
import { getTeamById, getTeams } from "../api";
import { TeamType } from "../types";

export const useGetTeams = () => {
  return useQuery<TeamType[]>({
    queryKey: ["teams"],
    queryFn: getTeams,
  });
};

export const useGetTeamById = (id: TeamType["id"]) => {
  return useQuery<TeamType>({
    queryKey: ["teams", id],
    queryFn: () => getTeamById(id),
  });
};
