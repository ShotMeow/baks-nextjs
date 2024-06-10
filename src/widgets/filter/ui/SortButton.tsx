import type {
  ButtonHTMLAttributes,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
} from "react";
import classNames from "classnames";

import Button from "@/src/shared/ui/Button";
import Exit from "@/src/shared/ui/icons/Exit";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
}

const SortButton: FC<PropsWithChildren<Props>> = ({
  sort,
  setSort,
  children,
  ...props
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        className={classNames({
          "!text-white": sort,
        })}
        variant="dropdown"
        {...props}
      >
        {children}
      </Button>
      {sort && (
        <Button
          onClick={() => setSort("")}
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
