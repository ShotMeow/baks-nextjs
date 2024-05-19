import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { NewsType } from "@/src/entities/news";

interface Props extends NewsType {}

const Slide: FC<Props> = ({ artworkUrl, title, tags, createdAt }) => {
  return (
    <Link className="flex h-full flex-col justify-between" href="#">
      <Image
        className="h-[200px] w-full object-cover p-2"
        src={artworkUrl}
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
          <h2 className="line-clamp-3 text-xl">{title}</h2>
        </div>
        <div className="mt-6 flex items-center gap-2 text-xs">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="mr-2 mt-2 rounded-full bg-white/5 px-4 py-2 uppercase text-zinc-400"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Slide;
