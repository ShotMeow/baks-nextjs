import type { FC } from "react";
import type { TagType } from "../types";

interface Props {
  tag: TagType;
}

const TagChip: FC<Props> = ({ tag }) => {
  return (
    <span className="line-clamp-1 rounded-full bg-black/40 px-4 py-2 uppercase text-white/80 backdrop-blur-md dark:bg-white/10">
      {tag.name}
    </span>
  );
};

export default TagChip;
