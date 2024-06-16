import { useQuery } from "@tanstack/react-query";

import { getStreamById, getStreams } from "../api";
import type { StreamsType, StreamType } from "../types";

export const useGetStreams = ({
  page,
  search,
  take,
}: {
  page?: string;
  search?: string;
  take?: number;
}) => {
  return useQuery<StreamsType>({
    queryKey: ["streams", { page, search, take }],
    queryFn: () => getStreams({ page, search, take }),
  });
};

export const useGetStreamById = (id: StreamType["id"]) => {
  return useQuery({
    queryKey: ["streams", id],
    queryFn: () => getStreamById(id),
  });
};
