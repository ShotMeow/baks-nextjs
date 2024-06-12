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
  tag?: string;
  setTag?: Dispatch<SetStateAction<string>>;
  sort?: string;
  setSort?: Dispatch<SetStateAction<string>>;
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
        className={classNames(
          {
            "!text-yellow": filterShown,
          },
          "!p-3 lg:hidden",
        )}
        variant="dropdown"
      >
        <FilterIcon />
      </Button>
      <div
        className={classNames(
          {
            "max-h-96 pb-4": filterShown,
            "max-h-0": !filterShown,
          },
          "absolute bg-zinc-900 flex px-4 flex-wrap overflow-hidden z-30 top-full left-0 right-0 transition-all items-center gap-2 lg:flex lg:static lg:p-0 lg:max-h-96",
        )}
      >
        {typeof tag !== "undefined" && setTag && (
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
        )}
        {typeof sort !== "undefined" && setSort && (
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
        )}
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
