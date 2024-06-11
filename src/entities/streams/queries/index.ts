import { useQuery } from "@tanstack/react-query";

import { getStreamById, getStreams } from "../api";
import type { StreamType } from "../types";

export const useGetStreams = ({ take }: { take?: number }) => {
  return useQuery<StreamType[]>({
    queryKey: ["streams", { take }],
    queryFn: () => getStreams({ take }),
  });
};

export const useGetStreamById = (id: StreamType["id"]) => {
  return useQuery({
    queryKey: ["streams", id],
    queryFn: () => getStreamById(id),
  });
};
