export interface TagType {
  id: number;
  name: string;
  created_at: Date;
}

export interface CreateTagType {
  name: string;
}

export interface UpdateTagType extends CreateTagType {
  id: number;
}
