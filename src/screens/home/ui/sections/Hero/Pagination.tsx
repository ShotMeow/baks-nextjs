import type { FC } from "react";
import type { NewsType } from "@/src/entities/news";
import classNames from "classnames";

interface Props {
  activeIndex: number;
  news: NewsType[];
}

const Pagination: FC<Props> = ({ activeIndex, news }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      {news.map((post, index) => (
        <div
          className={classNames(
            {
              "w-8 bg-yellow": index === activeIndex,
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
