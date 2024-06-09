import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import type { NewsType } from "../types";
import { API_URL } from "@/src/shared/constants";

interface Props {
  post: NewsType;
}

const PostLarge: FC<Props> = ({ post }) => {
  return (
    <Link className="sm:col-span-2 lg:col-span-4" href={`/news/${post.id}`}>
      <article className="relative flex h-full flex-col justify-between bg-zinc-900 lg:flex-row">
        <Image
          className="h-[400px] w-full object-cover p-2"
          src={`${API_URL}/images/${post.artworkUrl}`}
          alt={post.title}
          width={1256}
          height={600}
        />
        <div className="absolute left-6 top-6 flex items-center gap-1 rounded-full bg-pink-200 px-3 py-2 text-sm font-semibold uppercase text-black">
          <svg
            width="14"
            height="15"
            viewBox="0 0 6 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.03125 4.5L4.09375 0.59375L3.9375 3.40625L5.96875 4.34375L2.84375 7.9375L1.59375 8.71875L2.21875 5.75L1.75 5.59375L0.03125 4.5Z"
              fill="currentColor"
            />
          </svg>
          <span>Новое</span>
        </div>
        <div className="flex h-full flex-col justify-between px-4 py-10 font-semibold">
          <div>
            <p className="mb-2 text-green">
              {new Date(post.createdAt).toLocaleDateString("ru", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            <h2 className="line-clamp-3 text-3xl">{post.title}</h2>
            <p className="mt-5 line-clamp-5 text-lg font-medium text-zinc-500">
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
