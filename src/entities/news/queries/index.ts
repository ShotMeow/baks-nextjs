import { useQuery } from "@tanstack/react-query";

import { getNews, getNewsById } from "../api";
import type { NewsType } from "../types";

export const useGetNews = ({
  search,
  tag,
  sort,
  take,
}: {
  search?: string;
  tag?: string;
  sort?: string;
  take?: number;
}) => {
  return useQuery<NewsType[]>({
    queryKey: ["news", { search, tag, sort, take }],
    queryFn: () => getNews({ search, tag, sort, take }),
  });
};

export const useGetNewsById = (id: NewsType["id"]) => {
  return useQuery<NewsType>({
    queryKey: ["news", id],
    queryFn: () => getNewsById(id),
  });
};
