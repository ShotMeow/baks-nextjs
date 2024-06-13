import { FC, useState } from "react";
import { useGetStreams } from "@/src/entities/streams";
import Stream from "../units/Stream";
import SearchInput from "@/src/shared/ui/SearchInput";
import { useDebounce } from "@/src/shared/hooks/useDebounce";

const TagsList: FC = () => {
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce(search, 500);

  const { data } = useGetStreams({
    search: debounceSearch,
  });

  return (
    <ul className="flex flex-col gap-6">
      <SearchInput
        value={search}
        setValue={setSearch}
        placeholder="Найти трансляции"
      />
      {data?.map((stream) => <Stream stream={stream} key={stream.id} />)}
    </ul>
  );
};

export default TagsList;
