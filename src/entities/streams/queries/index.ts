import { useQuery } from "@tanstack/react-query";

import { getStreamById, getStreams } from "../api";
import type { StreamType } from "../types";

export const useGetStreams = ({
  search,
  take,
}: {
  search?: string;
  take?: number;
}) => {
  return useQuery<StreamType[]>({
    queryKey: ["streams", { search, take }],
    queryFn: () => getStreams({ search, take }),
  });
};

export const useGetStreamById = (id: StreamType["id"]) => {
  return useQuery({
    queryKey: ["streams", id],
    queryFn: () => getStreamById(id),
  });
};
