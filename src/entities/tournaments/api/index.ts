import { API_URL } from "@/src/shared/constants";
import { createFormData } from "@/src/shared/utils/createFormData";

import type { TournamentFormType, TournamentType } from "../types";

export const getTournaments = async ({
  searchQuery,
  tagQuery,
  sortQuery,
}: {
  searchQuery: string;
  tagQuery: string;
  sortQuery: string;
}) => {
  const queryParams = new URLSearchParams();

  searchQuery && queryParams.append("search", searchQuery);
  tagQuery && queryParams.append("tag", tagQuery);
  sortQuery && queryParams.append("sort", sortQuery);

  const response = await fetch(`${API_URL}/tournaments?${queryParams}`);
  return response.json();
};

export const getTournamentById = async (id: TournamentType["id"]) => {
  const response = await fetch(`${API_URL}/tournaments/${id}`);
  return response.json();
};

export const createTournament = async (data: TournamentFormType) => {
  const formData = createFormData({
    ...data,
    teams: data.teams?.map((team) => team.id),
    tags: data.tags?.map((tag) => tag.id),
  });
  const response = await fetch(`${API_URL}/tournaments`, {
    method: "POST",
    body: formData,
  });
  return response.json();
};

export const updateTournament = async (
  id: number,
  data: TournamentFormType,
) => {
  const formData = createFormData({
    ...data,
    teams: data.teams?.map((team) => team.id),
    tags: data.tags?.map((tag) => tag.id),
  });
  const response = await fetch(`${API_URL}/tournaments/${id}`, {
    method: "PATCH",
    body: formData,
  });
  return response.json();
};

export const deleteTournament = async (id: TournamentType["id"]) => {
  const response = await fetch(`${API_URL}/tournaments/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
