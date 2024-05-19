export interface StreamType {
  id: number;
  title: string;
  description: string;
  streamUrl: string;
  posterUrl: string;
  created_at: Date;
}

export interface CreateStreamType {
  title: string;
  description: string;
  streamUrl: string;
  posterUrl: string;
}

export interface UpdateStreamType extends CreateStreamType {
  id: number;
}
