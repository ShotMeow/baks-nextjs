export interface TeamType {
  id: number;
  name: string;
  body: string;
  winsPercent: number;
  gamesCount: number;
  players: any;
  tournaments: any;
  lastMatch: Date;
  createdAt: Date;
}

export interface CreateTeamType {
  name: string;
  body: string;
  winsPercent: number;
  gamesCount: number;
  lastMatch: Date;
}

export interface UpdateTeamType extends CreateTeamType {
  id: number;
}
