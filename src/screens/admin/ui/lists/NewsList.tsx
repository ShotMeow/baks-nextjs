import { FC, PropsWithChildren, useState } from "react";
import { useGetNews } from "@/src/entities/news";
import News from "../units/News";
import SearchInput from "@/src/shared/ui/SearchInput";
import { useDebounce } from "@/src/shared/hooks/useDebounce";

const TagsList: FC<PropsWithChildren> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce(search, 500);

  const { data: news } = useGetNews({
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
      {news?.map((post) => <News news={post} key={post.id} />)}
    </ul>
  );
};

export default TagsList;
