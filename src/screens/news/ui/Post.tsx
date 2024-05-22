"use client";
import type { FC } from "react";
import { useGetNewsById } from "@/src/entities/news";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface Props {
  slug: string;
}

const Post: FC<Props> = ({ slug }) => {
  const { data: post } = useGetNewsById(+slug);
  return (
    <main className="container my-20">
      {post && (
        <article>
          <div className="relative">
            <div className="absolute left-0 top-0 size-full bg-gradient-to-t from-black/50 to-transparent" />
            <Image
              className="h-[300px] w-full object-cover md:h-[600px]"
              src={post.artworkUrl}
              alt={post.title}
              width={1256}
              height={600}
            />
            <div className="absolute bottom-0 left-0 flex flex-col justify-between p-4 font-semibold md:p-12">
              <div className="mb-4 flex items-center gap-4">
                <p className="text-white">
                  {new Date(post.createdAt).toLocaleDateString("ru", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <div className="flex items-center gap-2 text-xs">
                  {post.tags.length > 0 &&
                    post.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="mr-2 rounded-full bg-white/5 px-4 py-2 uppercase text-zinc-400 backdrop-blur-lg"
                      >
                        {tag.name}
                      </span>
                    ))}
                </div>
              </div>
              <h2 className="line-clamp-3 text-xl md:text-3xl">{post.title}</h2>
            </div>
          </div>
          <div className="prose prose-zinc prose-invert my-6 max-w-none">
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </div>
        </article>
      )}
    </main>
  );
};

export default Post;
