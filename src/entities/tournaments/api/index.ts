import { API_URL } from "@/src/shared/constants";
import { createFormData } from "@/src/shared/utils/createFormData";

import type { TournamentFormType, TournamentType } from "../types";

export const getTournaments = async () => {
  const response = await fetch(`${API_URL}/tournaments`);
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
