"use client";
import { FC, useState } from "react";
import { Spin } from "@gravity-ui/uikit";

import { useGetNews } from "@/src/entities/news";

import NewsHeader from "./NewsHeader";
import PostLarge from "@/src/entities/news/ui/PostLarge";
import PostSmall from "@/src/entities/news/ui/PostSmall";
import { useDebounce } from "@/src/shared/hooks/useDebounce";

const News: FC = () => {
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce(search, 500);
  const {
    data: news,
    isLoading,
    isSuccess,
  } = useGetNews({ searchQuery: debounceSearch });

  return (
    <main className="container">
      <NewsHeader search={search} setSearch={setSearch} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {isSuccess &&
          news.map((post, index) =>
            index === 0 ? (
              <PostLarge post={post} key={post.id} />
            ) : (
              <PostSmall post={post} key={post.id} />
            ),
          )}
        {isLoading && (
          <div className="col-span-full row-span-full flex h-[10vh] items-center justify-center">
            <Spin size="xl" />
          </div>
        )}
      </div>
    </main>
  );
};

export default News;
