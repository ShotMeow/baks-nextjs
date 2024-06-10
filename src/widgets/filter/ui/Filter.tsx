import { type Dispatch, type FC, type SetStateAction, useState } from "react";
import { ArrowToggle } from "@gravity-ui/uikit";
import classNames from "classnames";

import CategoryButton from "@/src/widgets/filter/ui/CategoryButton";
import SortButton from "@/src/widgets/filter/ui/SortButton";
import { getSortValue } from "@/src/widgets/filter/utils/getSortValue";
import FilterDropdown from "@/src/widgets/filter/ui/FilterDropdown";
import FilterIcon from "@/src/shared/ui/icons/Filter";
import Button from "@/src/shared/ui/Button";

interface Props {
  tag: string;
  setTag: Dispatch<SetStateAction<string>>;
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
  dropdownState: {
    visible: boolean;
    type: string | null;
  };
  setDropdownState: Dispatch<
    SetStateAction<{
      visible: boolean;
      type: string | null;
    }>
  >;
}

const Filter: FC<Props> = ({
  tag,
  setTag,
  sort,
  setSort,
  setDropdownState,
  dropdownState,
}) => {
  const [filterShown, setFilterShown] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button
        onClick={() => setFilterShown(!filterShown)}
        className="!p-3 lg:hidden"
        variant="dropdown"
      >
        <FilterIcon />
      </Button>
      <div
        className={classNames(
          {
            "flex absolute max-h-96 top-full left-0 right-0 z-40 bg-zinc-900 p-4":
              filterShown,
            "hidden max-h-0": !filterShown,
          },
          "items-center gap-2 lg:static lg:flex lg:p-0",
        )}
      >
        <CategoryButton
          tag={tag}
          setTag={setTag}
          onClick={() => {
            setFilterShown(false);
            setDropdownState({
              visible: true,
              type: "tags",
            });
          }}
        >
          {tag || "Категория"}
          <ArrowToggle
            direction={dropdownState.type === "tags" ? "top" : "bottom"}
          />
        </CategoryButton>
        <SortButton
          sort={sort}
          setSort={setSort}
          onClick={() => {
            setFilterShown(false);
            setDropdownState({
              visible: true,
              type: "sort",
            });
          }}
        >
          {getSortValue(sort)}
          <ArrowToggle
            direction={dropdownState.type === "sort" ? "top" : "bottom"}
          />
        </SortButton>
      </div>
      <FilterDropdown
        sort={sort}
        setSort={setSort}
        tag={tag}
        setTag={setTag}
        setFilterShown={setFilterShown}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
      />
    </div>
  );
};

export default Filter;
