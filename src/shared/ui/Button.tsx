import type { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import classNames from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant:
    | "primary"
    | "transparent"
    | "secondary"
    | "more"
    | "dropdown"
    | "pagination";
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
          "bg-gradient-to-r from-yellow to-lilac px-10 py-3 rounded-full font-semibold":
            variant === "primary",
          "bg-lilac rounded-full text-lg px-10 py-3 font-semibold":
            variant === "secondary",
          "text-green font-semibold dark:font-medium dark:text-yellow backdrop-blur-lg px-10 py-3 bg-yellow/20 rounded-full":
            variant === "transparent",
          "text-green dark:text-yellow bg-yellow dark:bg-zinc-800/50 px-6 py-3 rounded-r-full hover:dark:bg-zinc-800/70 hover:dark:text-lilac hover:text-yellow hover:bg-green":
            variant === "more",
          "dark:text-zinc-400 bg-zinc-200 dark:bg-zinc-800 rounded-full px-6 py-2":
            variant === "dropdown",
          "text-zinc-600 dark:text-zinc-400 size-12 border-2 border-zinc-400 dark:border-zinc-800 p-0 disabled:text-zinc-300 disabled:border-zinc-300 dark:disabled:border-zinc-900 dark:disabled:text-zinc-600":
            variant === "pagination",
        },
        "flex items-center text-center justify-center gap-2 text-black active:scale-95 transition-all",
        className,
      )}
      {...props}
    >
      {children}
      {variant === "more" && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.5 10C2.5 9.65482 2.77982 9.375 3.125 9.375L16.875 9.375C17.2202 9.375 17.5 9.65482 17.5 10C17.5 10.3452 17.2202 10.625 16.875 10.625L3.125 10.625C2.77982 10.625 2.5 10.3452 2.5 10Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.8081 16.0669C10.564 15.8229 10.564 15.4271 10.8081 15.1831L15.9911 10L10.8081 4.81694C10.564 4.57286 10.564 4.17714 10.8081 3.93306C11.0521 3.68898 11.4479 3.68898 11.6919 3.93306L17.3169 9.55806C17.561 9.80214 17.561 10.1979 17.3169 10.4419L11.6919 16.0669C11.4479 16.311 11.0521 16.311 10.8081 16.0669Z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
};

export default Button;
