import type { FC } from "react";
import { useGetStreams } from "@/src/entities/streams";
import Stream from "../units/Stream";

const TagsList: FC = () => {
  const { data } = useGetStreams({});
  return (
    <ul className="flex flex-col gap-6">
      {data?.map((stream) => <Stream stream={stream} key={stream.id} />)}
    </ul>
  );
};

export default TagsList;
