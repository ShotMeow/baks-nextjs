import type { FC } from "react";
import { getNews } from "@/src/entities/news";
import classNames from "classnames";

interface Props {
  activeIndex: number;
}

const Pagination: FC<Props> = ({ activeIndex }) => {
  return (
    <div className="mt-6 flex items-center justify-center gap-4">
      {getNews().map((news, index) => (
        <div
          className={classNames(
            {
              "w-8 bg-yellow": index === activeIndex,
              "bg-zinc-800": index !== activeIndex,
            },
            "h-1 w-4 rounded-full transition-all duration-500",
          )}
          key={news.id}
        />
      ))}
    </div>
  );
};

export default Pagination;
