export interface StreamType {
  id: number;
  title: string;
  description: string;
  channel: string;
  posterUrl: string;
  createdAt: Date;
}

export interface StreamFormType
  extends Omit<StreamType, "id" | "createdAt" | "posterUrl"> {
  imageFile: File;
}
