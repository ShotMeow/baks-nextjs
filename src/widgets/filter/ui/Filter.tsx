import { type Dispatch, type FC, type SetStateAction, useState } from "react";
import { ArrowToggle } from "@gravity-ui/uikit";
import classNames from "classnames";

import CategoryButton from "@/src/widgets/filter/ui/CategoryButton";
import SortButton from "@/src/widgets/filter/ui/SortButton";
import { getSortValue } from "@/src/widgets/filter/utils/getSortValue";
import FilterDropdown from "@/src/widgets/filter/ui/FilterDropdown";
import FilterIcon from "@/src/shared/ui/icons/Filter";
import Button from "@/src/shared/ui/Button";
import { useQueryParams } from "@/src/shared/hooks/useQueryParams";

interface Props {
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
  withSort?: boolean;
  withTags?: boolean;
}

const Filter: FC<Props> = ({
  setDropdownState,
  dropdownState,
  withTags,
  withSort,
}) => {
  const [filterShown, setFilterShown] = useState(false);
  const { query } = useQueryParams();

  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button
        onClick={() => setFilterShown(!filterShown)}
        className="!p-3 lg:hidden"
        variant="dropdown"
      >
        <FilterIcon
          className={classNames({
            "text-green dark:text-yellow": filterShown,
          })}
        />
      </Button>
      <div
        className={classNames(
          {
            "max-h-96 pb-4": filterShown,
            "max-h-0": !filterShown,
          },
          "absolute flex px-4 bg-white dark:bg-zinc-900 lg:bg-transparent flex-wrap overflow-hidden z-30 top-full left-0 right-0 transition-all items-center gap-2 lg:flex lg:static lg:p-0 lg:max-h-96",
        )}
      >
        {withTags && (
          <CategoryButton
            onClick={() => {
              setFilterShown(false);
              setDropdownState({
                visible: true,
                type: "tags",
              });
            }}
          >
            {query.tag || "Категория"}
            <ArrowToggle
              direction={dropdownState.type === "tags" ? "top" : "bottom"}
            />
          </CategoryButton>
        )}
        {withSort && (
          <SortButton
            onClick={() => {
              setFilterShown(false);
              setDropdownState({
                visible: true,
                type: "sort",
              });
            }}
          >
            {getSortValue(query.sort as string)}
            <ArrowToggle
              direction={dropdownState.type === "sort" ? "top" : "bottom"}
            />
          </SortButton>
        )}
      </div>
      <FilterDropdown
        setFilterShown={setFilterShown}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
      />
    </div>
  );
};

export default Filter;
