import type { FC } from "react";
import { useGetNews } from "@/src/entities/news";
import News from "../units/News";

const TagsList: FC = () => {
  const { data } = useGetNews({
    searchQuery: "",
  });

  return (
    <ul className="flex flex-col gap-6">
      {data?.map((news) => <News news={news} key={news.id} />)}
    </ul>
  );
};

export default TagsList;
