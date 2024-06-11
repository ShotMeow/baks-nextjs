import { type Dispatch, type FC, type SetStateAction, useState } from "react";

import SearchInput from "@/src/shared/ui/SearchInput";
import Radio from "@/src/shared/ui/Radio";
import { useGetTags } from "@/src/entities/tags";
import { useDebounce } from "@/src/shared/hooks/useDebounce";

interface Props {
  tag: string;
  setTag: Dispatch<SetStateAction<string>>;
}

const FilterDropdownTags: FC<Props> = ({ tag: activeTag, setTag }) => {
  const [tagSearch, setTagSearch] = useState<string>("");
  const debounceSearch = useDebounce(tagSearch, 500);

  const { data: tags } = useGetTags({
    searchQuery: debounceSearch,
  });

  return (
    <>
      <SearchInput
        placeholder="Я ищу"
        value={tagSearch}
        setValue={setTagSearch}
      />
      <div className="mt-6 max-h-48 space-y-4 overflow-y-auto md:max-h-96">
        {tags?.map((tag) => (
          <Radio
            onClick={() => setTag(tag.name)}
            isActive={activeTag === tag.name}
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
