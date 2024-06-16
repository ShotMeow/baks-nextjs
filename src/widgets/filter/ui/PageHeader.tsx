import { type Dispatch, type FC, type SetStateAction, useState } from "react";

import SearchInput from "@/src/shared/ui/SearchInput";
import Filter from "./Filter";

interface Props {
  title: string;
  withSort?: boolean;
  withTags?: boolean;
  searchPlaceholder: string;
  search?: string;
  setSearch?: Dispatch<SetStateAction<string>>;
}

const PageHeader: FC<Props> = ({
  title,
  searchPlaceholder,
  search,
  setSearch,
  withTags,
  withSort,
}) => {
  const [dropdownState, setDropdownState] = useState<{
    visible: boolean;
    type: string | null;
  }>({
    visible: false,
    type: null,
  });

  return (
    <header className="container relative mb-4 flex flex-wrap items-center justify-between gap-6 bg-white p-4 md:px-8 md:py-4 dark:bg-zinc-900">
      <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-center">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <div className="flex w-full items-center justify-between gap-4">
          {typeof search !== "undefined" && setSearch && (
            <SearchInput
              value={search}
              setValue={setSearch}
              placeholder={searchPlaceholder}
            />
          )}
          <Filter
            withTags={withTags}
            withSort={withSort}
            setDropdownState={setDropdownState}
            dropdownState={dropdownState}
          />
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
