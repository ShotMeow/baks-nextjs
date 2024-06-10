import type { Dispatch, FC, SetStateAction } from "react";
import Radio from "@/src/shared/ui/Radio";

interface Props {
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
}

const FilterDropdownSort: FC<Props> = ({ sort, setSort }) => {
  return (
    <div className="max-h-96 space-y-4 overflow-y-auto">
      <Radio onClick={() => setSort("asc")} isActive={sort === "asc"}>
        По возрастанию
      </Radio>
      <Radio onClick={() => setSort("desc")} isActive={sort === "desc"}>
        По убыванию
      </Radio>
    </div>
  );
};

export default FilterDropdownSort;
