import { API_URL } from "@/src/shared/constants";
import { createFormData } from "@/src/shared/utils/createFormData";

import type { TournamentFormType, TournamentType } from "../types";

export const getTournaments = async ({
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
  const queryParams = new URLSearchParams();

  search && queryParams.append("search", search);
  tag && queryParams.append("tag", tag);
  sort && queryParams.append("sort", sort);
  take && queryParams.append("take", String(take));

  const response = await fetch(`${API_URL}/tournaments?${queryParams}`);

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const getTournamentById = async (id: TournamentType["id"]) => {
  const response = await fetch(`${API_URL}/tournaments/${id}`);

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const createTournament = async (data: TournamentFormType) => {
  const formData = createFormData({
    ...data,
    teams: data.teams?.map((team) => team.id),
    tags: data.tags?.map((tag) => tag.id),
  });

  const response = await fetch(`${API_URL}/tournaments/create`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const updateTournament = async (
  id: TournamentType["id"],
  data: TournamentFormType,
) => {
  const formData = createFormData({
    ...data,
    teams: data.teams?.map((team) => team.id),
    tags: data.tags?.map((tag) => tag.id),
  });

  const response = await fetch(`${API_URL}/tournaments/${id}/edit`, {
    method: "PATCH",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const deleteTournament = async (id: TournamentType["id"]) => {
  const response = await fetch(`${API_URL}/tournaments/${id}/delete`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};
