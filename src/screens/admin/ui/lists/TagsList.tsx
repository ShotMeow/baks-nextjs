import { type FC, type PropsWithChildren, useState } from "react";
import { useGetTags } from "@/src/entities/tags";
import Tag from "../units/Tag";
import SearchInput from "@/src/shared/ui/SearchInput";
import { useDebounce } from "@/src/shared/hooks/useDebounce";
import { useQueryParams } from "@/src/shared/hooks/useQueryParams";
import { Pagination } from "@/src/widgets/pagination";

const TagsList: FC<PropsWithChildren> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const { query } = useQueryParams();
  const debounceSearch = useDebounce(search, 500);

  const { data: tags } = useGetTags({
    ...query,
    take: 10,
    search: debounceSearch,
  });

  return (
    <ul className="flex flex-col gap-6">
      <SearchInput
        value={search}
        setValue={setSearch}
        placeholder="Найти теги"
      />
      {children}
      {tags?.data?.map((tag) => <Tag tag={tag} key={tag.id} />)}
      {tags && <Pagination pagination={tags.pagination} />}
    </ul>
  );
};

export default TagsList;
