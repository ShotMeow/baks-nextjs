import { API_URL } from "@/src/shared/constants";
import { createFormData } from "@/src/shared/utils/createFormData";

import type { TeamFormType, TeamType } from "../types";

export const getTeams = async () => {
  const response = await fetch(`${API_URL}/teams`);
  return response.json();
};

export const getTeamById = async (id: TeamType["id"]) => {
  const response = await fetch(`${API_URL}/teams/${id}`);
  return response.json();
};

export const createTeam = async (data: TeamFormType) => {
  const formData = createFormData({
    ...data,
    players: data.players?.map((player) => player.id),
    tournaments: data.tournaments?.map((tournament) => tournament.id),
  });
  const response = await fetch(`${API_URL}/teams`, {
    method: "POST",
    body: formData,
  });
  return response.json();
};

export const updateTeam = async (id: number, data: TeamFormType) => {
  const formData = createFormData({
    ...data,
    players: data.players.map((player) => player.id),
    tournaments: data.tournaments.map((tournament) => tournament.id),
  });
  const response = await fetch(`${API_URL}/teams/${id}`, {
    method: "PATCH",
    body: formData,
  });
  return response.json();
};

export const deleteTeam = async (id: TeamType["id"]) => {
  const response = await fetch(`${API_URL}/teams/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
