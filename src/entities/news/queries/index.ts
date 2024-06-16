import { useQuery } from "@tanstack/react-query";

import { addViewToPost, getNews, getNewsById } from "../api";
import type { NewsType, PostType } from "../types";

export const useGetNews = ({
  page,
  search,
  tag,
  sort,
  take,
}: {
  page?: number;
  search?: string;
  tag?: string;
  sort?: string;
  take?: number;
}) => {
  return useQuery<NewsType>({
    queryKey: ["news", { page, search, tag, sort, take }],
    queryFn: () => getNews({ page, search, tag, sort, take }),
  });
};

export const useGetNewsById = (id: PostType["id"]) => {
  return useQuery<PostType>({
    queryKey: ["news", id],
    queryFn: () => getNewsById(id),
  });
};

export const useAddViewToPost = (id: PostType["id"]) => {
  return useQuery<PostType>({
    queryKey: ["news", id],
    queryFn: () => addViewToPost(id),
  });
};
