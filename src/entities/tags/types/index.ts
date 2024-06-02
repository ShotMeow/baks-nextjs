export interface TagType {
  id: number;
  name: string;
  createdAt: Date;
}

export interface TagsFormType extends Omit<TagType, "id" | "createdAt"> {}
