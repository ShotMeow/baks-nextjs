import type { Dispatch, FC, SetStateAction } from "react";
import Dropdown from "@/src/shared/ui/Dropdown";
import { ArrowToggle } from "@gravity-ui/uikit";

import FilterDropdownTags from "./FilterDropdownTags";
import FilterDropdownSort from "./FilterDropdownSort";

interface Props {
  setFilterShown: Dispatch<SetStateAction<boolean>>;
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

const FilterDropdown: FC<Props> = ({
  dropdownState,
  setDropdownState,
  setFilterShown,
}) => {
  return (
    <Dropdown
      isShow={dropdownState.visible}
      onClose={() =>
        setDropdownState({
          visible: false,
          type: null,
        })
      }
    >
      <button
        onClick={() => {
          setFilterShown(true);
          setDropdownState({
            visible: false,
            type: null,
          });
        }}
        className="mb-4 text-zinc-400 lg:hidden"
      >
        <ArrowToggle direction="left" />{" "}
      </button>
      {dropdownState.type === "tags" && <FilterDropdownTags />}
      {dropdownState.type === "sort" && <FilterDropdownSort />}
    </Dropdown>
  );
};

export default FilterDropdown;
