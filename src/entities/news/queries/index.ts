import { useQuery } from "@tanstack/react-query";

import { getNews, getNewsById } from "../api";
import type { NewsType } from "../types";

export const useGetNews = ({ searchQuery }: { searchQuery: string }) => {
  return useQuery<NewsType[]>({
    queryKey: ["news", { searchQuery }],
    queryFn: () => getNews({ searchQuery }),
  });
};

export const useGetNewsById = (id: NewsType["id"]) => {
  return useQuery<NewsType>({
    queryKey: ["news", id],
    queryFn: () => getNewsById(id),
  });
};
