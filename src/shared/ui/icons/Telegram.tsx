import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Telegram: FC<Props> = ({ width = 32, height = 32, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4076_37978)">
        <line
          x1="17.6006"
          y1="44.8043"
          x2="34.9266"
          y2="27.4783"
          stroke="#04A8FF"
          strokeWidth="7.38994"
          strokeLinecap="round"
        />
        <g filter="url(#filter0_bii_4076_37978)">
          <path
            d="M57.2389 2.8092L20.6783 39.3698L3.46379 22.1553C1.86048 20.552 2.58484 17.815 4.77136 17.2146L57.2389 2.8092Z"
            fill="black"
            fillOpacity="0.59"
          />
        </g>
        <g filter="url(#filter1_bi_4076_37978)">
          <path
            d="M57.2387 2.80921L20.678 39.3698L37.8925 56.5843C39.4958 58.1876 42.2329 57.4633 42.8332 55.2767L57.2387 2.80921Z"
            fill="black"
            fillOpacity="0.64"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_bii_4076_37978"
          x="-7.99557"
          y="-7.78317"
          width="75.8271"
          height="57.7453"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.29612" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_4076_37978"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4076_37978"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.492663" />
          <feGaussianBlur stdDeviation="0.246331" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_4076_37978"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4.18763" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_4076_37978"
            result="effect3_innerShadow_4076_37978"
          />
        </filter>
        <filter
          id="filter1_bi_4076_37978"
          x="9.10016"
          y="-8.76825"
          width="59.7157"
          height="77.7977"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.78879" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_4076_37978"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4076_37978"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4.18763" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_4076_37978"
          />
        </filter>
        <clipPath id="clip0_4076_37978">
          <rect width="61" height="61" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Telegram;
