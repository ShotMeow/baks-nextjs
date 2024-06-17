import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Moon: FC<Props> = ({ width = 22, height = 22, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2278_3867)">
        <path
          d="M11.0064 10.9966C9.81642 8.9355 10.0699 6.44125 11.4488 4.6829C11.8427 4.17839 11.3185 3.45718 10.7058 3.64927C9.9907 3.87737 9.29521 4.23273 8.64995 4.72844C6.2461 6.57818 5.39853 9.92348 6.63384 12.6898C8.27922 16.3663 12.677 17.7301 16.0718 15.7701C16.4933 15.5268 16.8708 15.2473 17.2191 14.9307C17.6976 14.4928 17.3442 13.6807 16.7013 13.7671C14.4122 14.0956 12.154 12.9976 11.0064 10.9966Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2278_3867">
          <rect
            width="16"
            height="16"
            fill="currentColor"
            transform="translate(0.0722656 8.07178) rotate(-30)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Moon;
