import { useQuery } from "@tanstack/react-query";

import { getTagById, getTags } from "../api";
import type { TagType } from "../types";

export const useGetTags = () => {
  return useQuery<TagType[]>({
    queryKey: ["tags"],
    queryFn: getTags,
  });
};

export const useGetTagById = (id: TagType["id"]) => {
  return useQuery({
    queryKey: ["tags", id],
    queryFn: () => getTagById(id),
  });
};
