import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import type { NewsType } from "@/src/entities/news";
import { API_URL } from "@/src/shared/constants";
import { TagChip } from "@/src/entities/tags";

interface Props extends NewsType {}

const Slide: FC<Props> = ({ id, artworkUrl, title, tags, createdAt }) => {
  return (
    <Link className="flex h-full flex-col justify-between" href={`/news/${id}`}>
      <Image
        className="h-[200px] w-full object-cover p-2"
        src={`${API_URL}/images/${artworkUrl}`}
        alt={title}
        width={1256}
        height={600}
      />
      <div className="flex h-full flex-col justify-between p-4 font-semibold">
        <div>
          <p className="mb-2 text-green">
            {new Date(createdAt).toLocaleDateString("ru", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <h4 className="line-clamp-3 text-xl">{title}</h4>
        </div>
        <div className="mt-6 flex items-center gap-2 text-xs">
          {tags?.map((tag) => <TagChip tag={tag} key={tag.id} />)}
        </div>
      </div>
    </Link>
  );
};

export default Slide;
