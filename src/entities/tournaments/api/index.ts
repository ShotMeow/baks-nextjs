import { API_URL } from "@/src/shared/constants";
import type {
  CreateTournamentType,
  TournamentType,
  UpdateTournamentType,
} from "../types";

export const getTournaments = async () => {
  const response = await fetch(`${API_URL}/tournaments`);
  return response.json();
};

export const getTournamentById = async (id: TournamentType["id"]) => {
  const response = await fetch(`${API_URL}/tournaments/${id}`);
  return response.json();
};

export const createTournament = async (tournament: CreateTournamentType) => {
  const response = await fetch(`${API_URL}/tournaments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tournament),
  });
  return response.json();
};

export const updateTournament = async (tournament: UpdateTournamentType) => {
  const response = await fetch(`${API_URL}/tournaments/${tournament.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tournament),
  });
  return response.json();
};

export const deleteTournament = async (id: TournamentType["id"]) => {
  const response = await fetch(`${API_URL}/tournaments/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
