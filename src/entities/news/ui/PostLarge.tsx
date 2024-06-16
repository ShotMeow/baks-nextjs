import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import type { PostType } from "../types";
import { API_URL } from "@/src/shared/constants";
import { isNewPost } from "../utils/isNewPost";
import NewChip from "./NewChip";
import ViewsChip from "./ViewsChip";
import { TagChip } from "@/src/entities/tags";

interface Props {
  post: PostType;
}

const PostLarge: FC<Props> = ({ post }) => {
  return (
    <Link
      className="group sm:col-span-2 lg:col-span-4"
      href={`/news/${post.id}`}
    >
      <article className="relative grid h-full grid-cols-1 justify-between bg-white transition-all duration-500 group-hover:dark:bg-zinc-800 lg:grid-cols-2 dark:bg-zinc-900">
        <div className="relative max-h-[200px] min-h-[200px] overflow-hidden md:max-h-[400px] md:min-h-[400px]">
          <Image
            className="size-full object-cover p-2 transition-transform duration-500 group-hover:scale-110"
            src={`${API_URL}/images/${post.artworkUrl}`}
            alt={post.title}
            width={1256}
            height={600}
          />
          {isNewPost(new Date(post.createdAt)) && <NewChip />}
          <ViewsChip className="absolute bottom-6 left-6" views={post.views} />
        </div>
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
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
            {post.tags.map((tag) => (
              <TagChip tag={tag} key={tag.id} />
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostLarge;
