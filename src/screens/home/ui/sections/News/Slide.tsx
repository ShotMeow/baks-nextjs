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
        <p className="text-green mb-2">
          {created_at.toLocaleDateString("ru", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <h2 className="line-clamp-3 text-xl">{title}</h2>
        <div className="flex items-center gap-2 mt-6 text-sm">
          {tags.map((tag) => (
            <span className="bg-white/5 rounded-full px-4 py-2 text-zinc-400 uppercase mr-2 mt-2">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slide;
