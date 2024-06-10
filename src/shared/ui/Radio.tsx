import type { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import classNames from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

const Radio: FC<PropsWithChildren<Props>> = ({
  children,
  isActive,
  ...props
}) => {
  return (
    <label className="flex items-center gap-2">
      <button
        className={classNames(
          {
            "bg-yellow": isActive,
          },
          "size-6 rounded-full border-2 border-white/50 flex items-center justify-center p-2",
        )}
        {...props}
      >
        <span
          className={classNames({
            "size-3 bg-black rounded-full flex-shrink-0": isActive,
          })}
        />
      </button>
      {children}
    </label>
  );
};

export default Radio;
