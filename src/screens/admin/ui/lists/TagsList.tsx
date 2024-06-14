import { FC, useState } from "react";
import { useGetTags } from "@/src/entities/tags";
import Tag from "../units/Tag";
import SearchInput from "@/src/shared/ui/SearchInput";
import { useDebounce } from "@/src/shared/hooks/useDebounce";

const TagsList: FC = () => {
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce(search, 500);

  const { data: tags } = useGetTags({
    search: debounceSearch,
  });

  return (
    <ul className="flex flex-col gap-6">
      <SearchInput
        value={search}
        setValue={setSearch}
        placeholder="Найти теги"
      />
      {tags?.map((tag) => <Tag tag={tag} key={tag.id} />)}
    </ul>
  );
};

export default TagsList;
