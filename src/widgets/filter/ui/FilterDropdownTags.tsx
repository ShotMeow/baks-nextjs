import { type FC, useState } from "react";

import SearchInput from "@/src/shared/ui/SearchInput";
import Radio from "@/src/shared/ui/Radio";
import { useGetTags } from "@/src/entities/tags";
import { useDebounce } from "@/src/shared/hooks/useDebounce";
import { useQueryParams } from "@/src/shared/hooks/useQueryParams";

const FilterDropdownTags: FC = () => {
  const [tagSearch, setTagSearch] = useState<string>("");
  const debounceSearch = useDebounce(tagSearch, 500);
  const { push, query } = useQueryParams();

  const { data: tags } = useGetTags({
    search: debounceSearch,
  });

  const handleClick = (tag: string) => {
    push("tag", tag);
  };

  return (
    <>
      <SearchInput
        placeholder="Я ищу"
        value={tagSearch}
        setValue={setTagSearch}
      />
      <div className="mt-6 max-h-48 space-y-4 overflow-y-auto md:max-h-96">
        {tags?.data.map((tag) => (
          <Radio
            onClick={() => handleClick(tag.name)}
            isActive={query.tag === tag.name}
            key={tag.id}
          >
            {tag.name}
          </Radio>
        ))}
      </div>
    </>
  );
};

export default FilterDropdownTags;
