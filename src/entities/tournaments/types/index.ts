export interface TournamentType {
  id: number;
  title: string;
  description: string;
  prize: number;
  mode: string;
  artwork_url: string;
  price?: number;
  created_at: Date;
}
