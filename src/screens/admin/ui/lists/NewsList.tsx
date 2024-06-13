import { FC, useState } from "react";
import { useGetNews } from "@/src/entities/news";
import News from "../units/News";
import SearchInput from "@/src/shared/ui/SearchInput";
import { useDebounce } from "@/src/shared/hooks/useDebounce";

const TagsList: FC = () => {
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce(search, 500);

  const { data } = useGetNews({
    search: debounceSearch,
  });

  return (
    <ul className="flex flex-col gap-6">
      <SearchInput
        value={search}
        setValue={setSearch}
        placeholder="Найти новости"
      />
      {data?.map((news) => <News news={news} key={news.id} />)}
    </ul>
  );
};

export default TagsList;
