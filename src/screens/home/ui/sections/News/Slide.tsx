import type { FC } from "react";
import Image from "next/image";

interface Props {
  artwork_url: string;
  title: string;
  tags: string[];
  created_at: Date;
}

const Slide: FC<Props> = ({ artwork_url, title, tags, created_at }) => {
  return (
    <>
      <Image
        className="w-full p-2"
        src={artwork_url}
        alt={title}
        width={1256}
        height={600}
      />
      <div className="p-4 font-semibold">
        <p className="mb-2 text-green">
          {created_at.toLocaleDateString("ru", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <h2 className="line-clamp-3 text-xl">{title}</h2>
        <div className="mt-6 flex items-center gap-2 text-sm">
          {tags.map((tag) => (
            <span
              key={tag}
              className="mr-2 mt-2 rounded-full bg-white/5 px-4 py-2 uppercase text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slide;
