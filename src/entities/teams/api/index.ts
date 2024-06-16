import { API_URL } from "@/src/shared/constants";
import { createFormData } from "@/src/shared/utils/createFormData";

import type { TeamFormType, TeamType } from "../types";

export const getTeams = async ({
  search,
  sort,
  take,
}: {
  search?: string;
  sort?: string;
  take?: number;
}) => {
  const queryParams = new URLSearchParams();

  search && queryParams.append("search", search);
  sort && queryParams.append("sort", sort);
  take && queryParams.append("take", String(take));

  const response = await fetch(`${API_URL}/teams?${queryParams}`);

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const getTeamById = async (id: TeamType["id"]) => {
  const response = await fetch(`${API_URL}/teams/${id}`);

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const createTeam = async (data: TeamFormType) => {
  const formData = createFormData({
    ...data,
    players: data.players?.map((player) => player.id),
    tournaments: data.tournaments?.map((tournament) => tournament.id),
  });

  const response = await fetch(`${API_URL}/teams/create`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const updateTeam = async (id: TeamType["id"], data: TeamFormType) => {
  const formData = createFormData({
    ...data,
    players: data.players.map((player) => player.id),
    tournaments: data.tournaments.map((tournament) => tournament.id),
  });
  const response = await fetch(`${API_URL}/teams/${id}/edit`, {
    method: "PATCH",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const deleteTeam = async (id: TeamType["id"]) => {
  const response = await fetch(`${API_URL}/teams/${id}/delete`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};
