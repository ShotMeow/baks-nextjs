import { Dispatch, FC, SetStateAction, useState } from "react";

import SearchInput from "@/src/shared/ui/SearchInput";
import { Filter } from "@/src/widgets/filter";

interface Props {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  tag: string;
  setTag: Dispatch<SetStateAction<string>>;
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
}

const NewsHeader: FC<Props> = ({
  search,
  setSearch,
  tag,
  setTag,
  sort,
  setSort,
}) => {
  const [dropdownState, setDropdownState] = useState<{
    visible: boolean;
    type: string | null;
  }>({
    visible: false,
    type: null,
  });

  return (
    <header className="container relative mb-4 flex flex-wrap items-center justify-between gap-6 bg-zinc-900 p-4 md:px-8 md:py-4">
      <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-center">
        <h3 className="text-2xl font-semibold">Новости</h3>
        <div className="flex w-full items-center justify-between gap-4">
          <SearchInput
            placeholder="Поиск новостей"
            value={search}
            setValue={setSearch}
          />
          <Filter
            setTag={setTag}
            sort={sort}
            setSort={setSort}
            tag={tag}
            setDropdownState={setDropdownState}
            dropdownState={dropdownState}
          />
        </div>
      </div>
    </header>
  );
};

export default NewsHeader;
