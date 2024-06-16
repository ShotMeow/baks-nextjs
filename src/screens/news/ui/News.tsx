"use client";
import { type FC, useEffect, useState } from "react";
import { Spin } from "@gravity-ui/uikit";

import { useGetNews } from "@/src/entities/news";

import { Pagination } from "@/src/widgets/pagination";
import PostLarge from "@/src/entities/news/ui/PostLarge";
import PostSmall from "@/src/entities/news/ui/PostSmall";
import { useDebounce } from "@/src/shared/hooks/useDebounce";
import { PageHeader } from "@/src/widgets/filter";
import { useQueryParams } from "@/src/shared/hooks/useQueryParams";

const News: FC = () => {
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce(search, 500);
  const { query, push } = useQueryParams();
  const { data: news, isLoading, isSuccess } = useGetNews(query);

  useEffect(() => {
    push("search", debounceSearch);
  }, [debounceSearch, push]);

  return (
    <main className="container">
      <PageHeader
        title="Новости"
        searchPlaceholder="Поиск новостей"
        search={search}
        setSearch={setSearch}
        withSort
        withTags
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {isSuccess &&
          news.data.map((post, index) =>
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
      {news && <Pagination pagination={news.pagination} />}
    </main>
  );
};

export default News;
