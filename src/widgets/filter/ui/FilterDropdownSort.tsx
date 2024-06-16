import type { FC } from "react";
import Radio from "@/src/shared/ui/Radio";
import { useQueryParams } from "@/src/shared/hooks/useQueryParams";

const FilterDropdownSort: FC = () => {
  const { push, query } = useQueryParams();

  const handleSortChange = (sort: string) => {
    push("sort", sort);
  };

  return (
    <div className="max-h-96 space-y-4 overflow-y-auto">
      <Radio
        onClick={() => handleSortChange("asc")}
        isActive={query.sort === "asc"}
      >
        По возрастанию
      </Radio>
      <Radio
        onClick={() => handleSortChange("desc")}
        isActive={query.sort === "desc"}
      >
        По убыванию
      </Radio>
    </div>
  );
};

export default FilterDropdownSort;
