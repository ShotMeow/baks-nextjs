"use client";
import { type FC, useState } from "react";
import { Spin } from "@gravity-ui/uikit";

import { useGetNews } from "@/src/entities/news";

import PostLarge from "@/src/entities/news/ui/PostLarge";
import PostSmall from "@/src/entities/news/ui/PostSmall";
import { useDebounce } from "@/src/shared/hooks/useDebounce";
import { PageHeader } from "@/src/widgets/filter";

const News: FC = () => {
  const [tag, setTag] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce(search, 500);
  const {
    data: news,
    isLoading,
    isSuccess,
  } = useGetNews({
    search: debounceSearch,
    tag,
    sort,
  });

  return (
    <main className="container">
      <PageHeader
        title="Новости"
        searchPlaceholder="Поиск новостей"
        search={search}
        setSearch={setSearch}
        tag={tag}
        setTag={setTag}
        sort={sort}
        setSort={setSort}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {isSuccess &&
          news.map((post, index) =>
            index === 0 && !debounceSearch ? (
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
