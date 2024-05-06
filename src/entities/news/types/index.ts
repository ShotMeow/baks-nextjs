export interface NewsType {
  id: number;
  title: string;
  description: string;
  body: string;
  artwork_url: string;
  tags: string[];
  created_at: Date;
}
