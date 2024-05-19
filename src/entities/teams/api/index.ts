import { API_URL } from "@/src/shared/constants";
import type { CreateTeamType, TeamType, UpdateTeamType } from "../types";

export const getTeams = async () => {
  const response = await fetch(`${API_URL}/teams`);
  return response.json();
};

export const getTeamById = async (id: TeamType["id"]) => {
  const response = await fetch(`${API_URL}/teams/${id}`);
  return response.json();
};

export const createTeam = async (team: CreateTeamType) => {
  const response = await fetch(`${API_URL}/teams`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(team),
  });
  return response.json();
};

export const updateTeam = async (team: UpdateTeamType) => {
  const response = await fetch(`${API_URL}/teams/${team.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(team),
  });
  return response.json();
};

export const deleteTeam = async (id: TeamType["id"]) => {
  const response = await fetch(`${API_URL}/teams/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
