import type { FC } from "react";
import type { TagType } from "../types";

interface Props {
  tag: TagType;
}

const TagChip: FC<Props> = ({ tag }) => {
  return (
    <span className="line-clamp-1 rounded-full bg-white/10 px-4 py-2 uppercase text-white/80 backdrop-blur-md">
      {tag.name}
    </span>
  );
};

export default TagChip;
