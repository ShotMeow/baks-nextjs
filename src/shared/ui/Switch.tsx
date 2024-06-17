import type { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

import classNames from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

export const Switch: FC<PropsWithChildren<Props>> = ({
  children,
  isActive,
  className,
  ...props
}) => {
  return (
    <button
      aria-label="Switch"
      aria-checked={isActive}
      role="switch"
      className={classNames(
        {
          "[&>div]:left-9": isActive,
        },
        "relative bg-zinc-300 dark:bg-zinc-800 w-16 h-8 flex items-center rounded-full transition-all px-1 cursor-pointer shadow-base",
        className,
      )}
      {...props}
    >
      <div className="absolute left-1 flex size-6 items-center justify-center rounded-full bg-white transition-all dark:bg-black">
        {children}
      </div>
    </button>
  );
};
