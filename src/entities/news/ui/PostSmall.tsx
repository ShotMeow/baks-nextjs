import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { API_URL } from "@/src/shared/constants";
import type { NewsType } from "../types";
import { isNewPost } from "../utils/isNewPost";
import NewChip from "./NewChip";

interface Props {
  post: NewsType;
}

const PostSmall: FC<Props> = ({ post }) => {
  return (
    <Link href={`/news/${post.id}`}>
      <article
        className="relative flex h-full flex-col justify-between bg-zinc-900"
        key={post.id}
      >
        <div className="relative max-h-[200px] min-h-[200px] w-full">
          <Image
            className="size-full object-cover p-2"
            src={`${API_URL}/images/${post.artworkUrl}`}
            alt={post.title}
            width={1256}
            height={600}
          />
          {isNewPost(new Date(post.updatedAt)) && <NewChip />}
        </div>
        <div className="flex h-full flex-col justify-between p-4 font-semibold">
          <div>
            <p className="mb-2 text-green">
              {new Date(post.updatedAt).toLocaleDateString("ru", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            <h2 className="line-clamp-3 text-xl">{post.title}</h2>
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

export default PostSmall;
