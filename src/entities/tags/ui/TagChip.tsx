import type { FC } from "react";
import type { TagType } from "../types";

interface Props {
  tag: TagType;
}

const TagChip: FC<Props> = ({ tag }) => {
  return (
    <span className="mr-2 mt-2 rounded-full bg-white/5 px-4 py-2 uppercase text-zinc-400">
      {tag.name}
    </span>
  );
};

export default TagChip;
