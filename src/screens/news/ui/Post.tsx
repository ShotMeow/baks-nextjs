"use client";
import { type FC, useEffect, useRef } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

import { useGetNewsById } from "@/src/entities/news";
import { API_URL } from "@/src/shared/constants";
import DarkGradientToTop from "@/src/shared/ui/DarkGradientToTop";
import { TagChip } from "@/src/entities/tags";
import { addViewToPost } from "@/src/entities/news/api";
import ViewsChip from "@/src/entities/news/ui/ViewsChip";

interface Props {
  slug: string;
}

const Post: FC<Props> = ({ slug }) => {
  const { data: post } = useGetNewsById(+slug);
  const dataFetch = useRef(false);

  useEffect(() => {
    if (dataFetch.current) return;
    dataFetch.current = true;

    addViewToPost(+slug);
  }, [slug]);

  return (
    <main className="container">
      {post && (
        <article>
          <div className="relative md:h-[600px]">
            <DarkGradientToTop />
            <Image
              className="absolute -z-20 size-full object-cover"
              src={`${API_URL}/images/${post.artworkUrl}`}
              alt={post.title}
              width={1256}
              height={600}
            />
            <div className="flex h-full flex-col justify-end p-4 font-semibold md:p-12">
              <div className="mb-4 flex flex-wrap items-center gap-4">
                <p className="text-white">
                  {new Date(post.updatedAt).toLocaleDateString("ru", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <ViewsChip views={post.views} />
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  {post.tags?.length > 0 &&
                    post.tags.map((tag) => <TagChip tag={tag} key={tag.id} />)}
                </div>
              </div>
              <h3 className="text-xl md:text-3xl">{post.title}</h3>
            </div>
          </div>
          <p className="mt-5 text-base font-medium md:text-lg">
            {post.description}
          </p>
          <div className="prose prose-zinc prose-invert my-6 max-w-none">
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </div>
        </article>
      )}
    </main>
  );
};

export default Post;
