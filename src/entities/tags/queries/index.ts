import { useQuery } from "@tanstack/react-query";

import { getTagById, getTags } from "../api";
import type { TagsType, TagType } from "../types";

export const useGetTags = ({
  page,
  take,
  search,
}: {
  page?: number;
  take?: number;
  search?: string;
}) => {
  return useQuery<TagsType>({
    queryKey: ["tags", { page, take, search }],
    queryFn: () => getTags({ page, take, search }),
  });
};

export const useGetTagById = (id: TagType["id"]) => {
  return useQuery({
    queryKey: ["tags", id],
    queryFn: () => getTagById(id),
  });
};
