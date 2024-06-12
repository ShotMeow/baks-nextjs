import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import type { NewsType } from "../types";
import { API_URL } from "@/src/shared/constants";
import { isNewPost } from "../utils/isNewPost";
import NewChip from "./NewChip";
import ViewsChip from "./ViewsChip";

interface Props {
  post: NewsType;
}

const PostLarge: FC<Props> = ({ post }) => {
  return (
    <Link className="sm:col-span-2 lg:col-span-4" href={`/news/${post.id}`}>
      <article className="relative grid h-full grid-cols-1 justify-between bg-zinc-900 lg:grid-cols-2">
        <div className="max-h-[200px] min-h-[200px] md:max-h-[400px] md:min-h-[400px]">
          <Image
            className="size-full object-cover p-2"
            src={`${API_URL}/images/${post.artworkUrl}`}
            alt={post.title}
            width={1256}
            height={600}
          />
        </div>
        {isNewPost(new Date(post.createdAt)) && <NewChip />}
        <ViewsChip className="absolute bottom-6 left-6" views={post.views} />
        <div className="flex h-full flex-col justify-between px-4 py-10 font-semibold">
          <div>
            <p className="mb-2 text-green">
              {new Date(post.updatedAt).toLocaleDateString("ru", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            <h2 className="line-clamp-3 text-xl md:text-3xl">{post.title}</h2>
            <p className="mt-5 line-clamp-5 text-base font-medium text-zinc-500 md:text-lg">
              {post.description}
            </p>
          </div>
          <div className="mt-6 flex items-center gap-2 text-xs">
            {post.tags.map((tag) => (
              <span
                key={tag.id}
                className="mr-2 mt-2 rounded-full bg-white/5 px-4 py-2 uppercase text-zinc-400"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostLarge;
