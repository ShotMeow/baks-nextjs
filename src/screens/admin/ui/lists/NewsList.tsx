import { type FC, type PropsWithChildren, useState } from "react";
import { useGetNews } from "@/src/entities/news";
import News from "../units/News";
import SearchInput from "@/src/shared/ui/SearchInput";
import { useDebounce } from "@/src/shared/hooks/useDebounce";
import { Pagination } from "@/src/widgets/pagination";
import { useQueryParams } from "@/src/shared/hooks/useQueryParams";

const TagsList: FC<PropsWithChildren> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const { query } = useQueryParams();
  const debounceSearch = useDebounce(search, 500);

  const { data: news } = useGetNews({
    ...query,
    take: 10,
    search: debounceSearch,
  });

  return (
    <ul className="flex flex-col gap-6">
      <SearchInput
        value={search}
        setValue={setSearch}
        placeholder="Найти новости"
      />
      {children}
      {news?.data?.map((post) => <News news={post} key={post.id} />)}
      {news && <Pagination pagination={news.pagination} />}
    </ul>
  );
};

export default TagsList;
