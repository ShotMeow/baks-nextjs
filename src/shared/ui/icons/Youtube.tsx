import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Youtube: FC<Props> = ({ width = 36, height = 28, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 43 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_bii_4065_30919)">
        <path
          d="M0.310547 11.9162C0.310547 5.65813 5.38372 0.584961 11.6418 0.584961H30.8556C37.1137 0.584961 42.1869 5.65813 42.1869 11.9162V21.2768C42.1869 27.5349 37.1137 32.608 30.8556 32.608H11.6418C5.38371 32.608 0.310547 27.5349 0.310547 21.2768V11.9162Z"
          fill="black"
          fillOpacity="0.59"
        />
      </g>
      <circle cx="27.2839" cy="16.5964" r="4.80346" fill="#FF011D" />
      <g filter="url(#filter1_bi_4065_30919)">
        <path
          d="M28.2479 14.7571C29.7415 15.4717 29.7415 17.598 28.2479 18.3125L14.8321 24.7306C13.5241 25.3563 12.011 24.4029 12.011 22.9529V10.1168C12.011 8.66682 13.5241 7.71336 14.8321 8.3391L28.2479 14.7571Z"
          fill="white"
          fillOpacity="0.38"
        />
      </g>
      <defs>
        <filter
          id="filter0_bii_4065_30919"
          x="-85.6895"
          y="-85.415"
          width="213.876"
          height="204.023"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="43" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_4065_30919"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4065_30919"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_4065_30919"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="34" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_4065_30919"
            result="effect3_innerShadow_4065_30919"
          />
        </filter>
        <filter
          id="filter1_bi_4065_30919"
          x="-75.9893"
          y="-79.8562"
          width="193.357"
          height="192.782"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="44" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_4065_30919"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4065_30919"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_4065_30919"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Youtube;
