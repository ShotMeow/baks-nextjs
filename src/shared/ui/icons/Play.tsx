import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Play: FC<Props> = ({ width = 25, height = 24, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.02081 2.12229C5.34189 1.947 5.73305 1.96101 6.04076 2.15882L20.0408 11.1588C20.327 11.3428 20.5 11.6597 20.5 12C20.5 12.3403 20.327 12.6572 20.0408 12.8412L6.04076 21.8412C5.73305 22.039 5.34189 22.053 5.02081 21.8777C4.69974 21.7024 4.5 21.3658 4.5 21V3C4.5 2.63419 4.69974 2.29758 5.02081 2.12229ZM6.5 4.83167V19.1683L17.6507 12L6.5 4.83167Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Play;
