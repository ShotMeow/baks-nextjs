import { FC, PropsWithChildren, useState } from "react";
import { useGetStreams } from "@/src/entities/streams";
import Stream from "../units/Stream";
import SearchInput from "@/src/shared/ui/SearchInput";
import { useDebounce } from "@/src/shared/hooks/useDebounce";

const TagsList: FC<PropsWithChildren> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce(search, 500);

  const { data: streams } = useGetStreams({
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
      {streams?.map((stream) => <Stream stream={stream} key={stream.id} />)}
    </ul>
  );
};

export default TagsList;
