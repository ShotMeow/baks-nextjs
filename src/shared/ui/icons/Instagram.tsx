import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Instagram: FC<Props> = ({ width = 33, height = 36, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="12.0768"
        y1="32.1459"
        x2="21.6409"
        y2="32.1459"
        stroke="#FF5383"
        strokeWidth="6.23749"
        strokeLinecap="round"
      />
      <g filter="url(#filter0_bii_4017_31720)">
        <rect
          x="0.849609"
          y="0.230713"
          width="32.0191"
          height="32.0191"
          rx="9.56415"
          fill="white"
          fillOpacity="0.08"
        />
      </g>
      <g filter="url(#filter1_bi_4017_31720)">
        <circle
          cx="25.7991"
          cy="7.2998"
          r="1.66333"
          fill="white"
          fillOpacity="0.27"
        />
      </g>
      <g filter="url(#filter2_bi_4017_31720)">
        <circle
          cx="16.8587"
          cy="16.2403"
          r="6.75728"
          stroke="white"
          strokeOpacity="0.27"
          strokeWidth="2.70291"
        />
      </g>
      <defs>
        <filter
          id="filter0_bii_4017_31720"
          x="-57.2141"
          y="-57.833"
          width="148.147"
          height="148.146"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="29.0318" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_4017_31720"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4017_31720"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.70064" />
          <feGaussianBlur stdDeviation="1.35032" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_4017_31720"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="22.9554" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_4017_31720"
            result="effect3_innerShadow_4017_31720"
          />
        </filter>
        <filter
          id="filter1_bi_4017_31720"
          x="-35.2783"
          y="-53.7775"
          width="122.155"
          height="122.155"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="29.707" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_4017_31720"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4017_31720"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.35032" />
          <feGaussianBlur stdDeviation="0.675159" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_4017_31720"
          />
        </filter>
        <filter
          id="filter2_bi_4017_31720"
          x="-50.664"
          y="-51.2824"
          width="135.046"
          height="135.046"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="29.707" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_4017_31720"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4017_31720"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.35032" />
          <feGaussianBlur stdDeviation="0.675159" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_4017_31720"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Instagram;
