import { FC } from "react";
import classNames from "classnames";

import { getStreams } from "@/src/entities/streams";

interface Props {
  activeIndex: number;
}

const Pagination: FC<Props> = ({ activeIndex }) => {
  return (
    <div className="mt-10 flex items-end justify-center gap-2">
      {getStreams().map((stream, index) => (
        <div
          className={classNames(
            {
              "bg-yellow h-4": index === activeIndex,
              "bg-zinc-700/50 h-2": index !== activeIndex,
            },
            "w-2 transition-all",
          )}
          key={stream.id}
        />
      ))}
    </div>
  );
};

export default Pagination;
