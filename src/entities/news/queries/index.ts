import { useQuery } from "@tanstack/react-query";
import { getNews, getNewsById } from "../api";
import type { NewsType } from "../types";

export const useGetNews = () => {
  return useQuery<NewsType[]>({
    queryKey: ["news"],
    queryFn: getNews,
  });
};

export const useGetNewsById = (id: NewsType["id"]) => {
  return useQuery<NewsType>({
    queryKey: ["news", id],
    queryFn: () => getNewsById(id),
  });
};
