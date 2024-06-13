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
    <label
      className={classNames(
        {
          "text-white": isActive,
          "text-zinc-400": !isActive,
        },
        "flex items-center gap-2 transition-all",
      )}
    >
      <button
        className={classNames(
          {
            "bg-yellow": isActive,
          },
          "size-6 rounded-full border-2 border-white/50 flex items-center justify-center p-2 transition-all duration-500",
        )}
        {...props}
      >
        <span
          className={classNames(
            {
              "size-3": isActive,
              "size-0": !isActive,
            },
            "flex-shrink-0 bg-black rounded-full transition-all duration-500",
          )}
        />
      </button>
      {children}
    </label>
  );
};

export default Radio;
