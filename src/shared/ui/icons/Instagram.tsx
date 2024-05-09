import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Instagram: FC<Props> = ({ width = 33, height = 36, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 39 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="14.2331"
        y1="38.6549"
        x2="25.5643"
        y2="38.6549"
        stroke="#FF5383"
        strokeWidth="7.38994"
        strokeLinecap="round"
      />
      <g filter="url(#filter0_bii_4065_30910)">
        <rect
          x="0.931641"
          y="0.843018"
          width="37.935"
          height="37.935"
          rx="11.3312"
          fill="black"
          fillOpacity="0.59"
        />
      </g>
      <g filter="url(#filter1_bi_4065_30910)">
        <circle
          cx="30.4912"
          cy="9.21821"
          r="1.97065"
          fill="white"
          fillOpacity="0.38"
        />
      </g>
      <g filter="url(#filter2_bi_4065_30910)">
        <circle
          cx="19.8989"
          cy="19.8105"
          r="8.00577"
          stroke="white"
          strokeOpacity="0.38"
          strokeWidth="3.20231"
        />
      </g>
      <defs>
        <filter
          id="filter0_bii_4065_30910"
          x="-85.0684"
          y="-85.157"
          width="209.935"
          height="209.935"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="43" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_4065_30910"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4065_30910"
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
            result="effect2_innerShadow_4065_30910"
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
            in2="effect2_innerShadow_4065_30910"
            result="effect3_innerShadow_4065_30910"
          />
        </filter>
        <filter
          id="filter1_bi_4065_30910"
          x="-59.4795"
          y="-80.7524"
          width="179.941"
          height="179.941"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="44" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_4065_30910"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4065_30910"
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
            result="effect2_innerShadow_4065_30910"
          />
        </filter>
        <filter
          id="filter2_bi_4065_30910"
          x="-77.708"
          y="-77.7964"
          width="195.214"
          height="195.214"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="44" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_4065_30910"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4065_30910"
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
            result="effect2_innerShadow_4065_30910"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Instagram;
