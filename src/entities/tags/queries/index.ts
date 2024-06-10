import { useQuery } from "@tanstack/react-query";

import { getTagById, getTags } from "../api";
import type { TagType } from "../types";

export const useGetTags = ({ searchQuery }: { searchQuery: string }) => {
  return useQuery<TagType[]>({
    queryKey: ["tags", { searchQuery }],
    queryFn: () => getTags({ searchQuery }),
  });
};

export const useGetTagById = (id: TagType["id"]) => {
  return useQuery({
    queryKey: ["tags", id],
    queryFn: () => getTagById(id),
  });
};
