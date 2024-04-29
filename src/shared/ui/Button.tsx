import type { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import classNames from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "transparent" | "secondary" | "more";
}

const Button: FC<PropsWithChildren<Props>> = ({
  className,
  children,
  variant,
  ...props
}) => {
  return (
    <button
      className={classNames(
        {
          "bg-gradient-to-r from-yellow to-lilac px-8 py-3 rounded-full font-semibold":
            variant === "primary",
        },
        "flex items-center gap-2 text-black",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
