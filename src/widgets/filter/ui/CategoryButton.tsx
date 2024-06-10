import type {
  ButtonHTMLAttributes,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
} from "react";

import Button from "@/src/shared/ui/Button";
import classNames from "classnames";
import Exit from "@/src/shared/ui/icons/Exit";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  tag: string;
  setTag: Dispatch<SetStateAction<string>>;
}

const CategoryButton: FC<PropsWithChildren<Props>> = ({
  tag,
  setTag,
  children,
  ...props
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        className={classNames({
          "!text-white": tag,
        })}
        variant="dropdown"
        {...props}
      >
        {children}
      </Button>
      {tag && (
        <Button
          onClick={() => setTag("")}
          className="!p-2 !text-red-600"
          variant="dropdown"
          aria-label="Очистить категории"
        >
          <Exit />
        </Button>
      )}
    </div>
  );
};

export default CategoryButton;
