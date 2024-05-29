import { FC } from "react";
import classNames from "classnames";

import { StreamType, useGetStreams } from "@/src/entities/streams";

interface Props {
  streams: StreamType[];
  activeIndex: number;
}

const Pagination: FC<Props> = ({ streams, activeIndex }) => {
  return (
    <div className="flex items-end justify-center gap-2">
      {streams.map((stream, index) => (
        <div
          className={classNames(
            {
              "bg-yellow h-4": index === activeIndex,
              "bg-zinc-700/50 h-2": index !== activeIndex,
            },
            "w-2 transition-all",
          )}
          style={{
            clipPath:
              index === activeIndex
                ? "polygon(0 30%, 100% 0, 100% 100%, 0% 100%)"
                : "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          key={stream.id}
        />
      ))}
    </div>
  );
};

export default Pagination;
