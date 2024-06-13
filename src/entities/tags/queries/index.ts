import { useQuery } from "@tanstack/react-query";

import { getTagById, getTags } from "../api";
import type { TagType } from "../types";

export const useGetTags = ({ search }: { search?: string }) => {
  return useQuery<TagType[]>({
    queryKey: ["tags", { search }],
    queryFn: () => getTags({ search }),
  });
};

export const useGetTagById = (id: TagType["id"]) => {
  return useQuery({
    queryKey: ["tags", id],
    queryFn: () => getTagById(id),
  });
};
