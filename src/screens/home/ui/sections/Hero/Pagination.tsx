import type { FC } from "react";
import classNames from "classnames";

import type { PostType } from "@/src/entities/news";

interface Props {
  activeIndex: number;
  news: PostType[];
}

const Pagination: FC<Props> = ({ activeIndex, news }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      {news.map((post, index) => (
        <div
          className={classNames(
            {
              "w-8 bg-lilac dark:bg-yellow": index === activeIndex,
              "bg-zinc-800": index !== activeIndex,
            },
            "h-1 w-4 rounded-full transition-all duration-500",
          )}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default Pagination;
