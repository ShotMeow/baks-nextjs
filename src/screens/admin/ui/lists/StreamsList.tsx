import { type FC, type PropsWithChildren, useState } from "react";
import { useGetStreams } from "@/src/entities/streams";
import Stream from "../units/Stream";
import SearchInput from "@/src/shared/ui/SearchInput";
import { useDebounce } from "@/src/shared/hooks/useDebounce";
import { useQueryParams } from "@/src/shared/hooks/useQueryParams";
import { Pagination } from "@/src/widgets/pagination";

const TagsList: FC<PropsWithChildren> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const { query } = useQueryParams();
  const debounceSearch = useDebounce(search, 500);

  const { data: streams } = useGetStreams({
    ...query,
    take: 10,
    search: debounceSearch,
  });

  return (
    <ul className="flex flex-col gap-6">
      <SearchInput
        value={search}
        setValue={setSearch}
        placeholder="Найти трансляции"
      />
      {children}
      {streams?.data?.map((stream) => (
        <Stream stream={stream} key={stream.id} />
      ))}
      {streams && <Pagination pagination={streams.pagination} />}
    </ul>
  );
};

export default TagsList;
