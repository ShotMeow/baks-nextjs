import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Logo: FC<Props> = ({ width = 33, height = 48, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.8672 5.27125L19.232 0.5V35.0812H11.8672V5.27125Z"
        fill="currentColor"
      />
      <path
        d="M23.1445 35.0812V13.1699C28.2927 13.1699 32.4666 17.3524 32.4666 22.5112V25.7399C32.4666 30.8987 28.2927 35.0812 23.1445 35.0812Z"
        fill="currentColor"
      />
      <path
        d="M0.588867 13.1699H7.95371V47.5349L0.588867 41.4237V13.1699Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Logo;
