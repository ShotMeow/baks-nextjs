import type { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import classNames from "classnames";

import Button from "@/src/shared/ui/Button";
import Exit from "@/src/shared/ui/icons/Exit";
import { useQueryParams } from "@/src/shared/hooks/useQueryParams";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SortButton: FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
  const { query, remove } = useQueryParams();
  return (
    <div className="flex items-center gap-2">
      <Button
        className={classNames({
          "!text-white": query.sort,
        })}
        variant="dropdown"
        {...props}
      >
        {children}
      </Button>
      {query.sort && (
        <Button
          onClick={() => remove("sort")}
          className="!p-2 !text-red-600"
          variant="dropdown"
          aria-label="Очистить сортировку"
        >
          <Exit />
        </Button>
      )}
    </div>
  );
};

export default SortButton;
