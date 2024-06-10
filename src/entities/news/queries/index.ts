import { useQuery } from "@tanstack/react-query";

import { getNews, getNewsById } from "../api";
import type { NewsType } from "../types";

export const useGetNews = ({
  searchQuery,
  tagQuery,
  sortQuery,
}: {
  searchQuery: string;
  tagQuery: string;
  sortQuery: string;
}) => {
  return useQuery<NewsType[]>({
    queryKey: ["news", { searchQuery, tagQuery, sortQuery }],
    queryFn: () => getNews({ searchQuery, tagQuery, sortQuery }),
  });
};

export const useGetNewsById = (id: NewsType["id"]) => {
  return useQuery<NewsType>({
    queryKey: ["news", id],
    queryFn: () => getNewsById(id),
  });
};
