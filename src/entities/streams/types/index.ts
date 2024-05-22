export interface StreamType {
  id: number;
  title: string;
  description: string;
  channel: string;
  posterUrl: string;
  created_at: Date;
}

export interface CreateStreamType {
  title: string;
  description: string;
  channel: string;
  posterUrl: string;
}

export interface UpdateStreamType extends CreateStreamType {
  id: number;
}
