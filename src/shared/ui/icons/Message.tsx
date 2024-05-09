import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Message: FC<Props> = ({ width = 34, height = 35, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 39 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="4.0791"
        y1="35.3937"
        x2="14.8784"
        y2="24.5943"
        stroke="#01E676"
        strokeWidth="7.38994"
        strokeLinecap="round"
      />
      <g filter="url(#filter0_bii_4065_30904)">
        <circle
          cx="19.9675"
          cy="19.541"
          r="18.9675"
          fill="currentColor"
          fillOpacity="0.59"
        />
      </g>
      <g filter="url(#filter1_i_4065_30904)">
        <circle
          cx="19.9677"
          cy="19.541"
          r="1.97065"
          fill="white"
          fillOpacity="0.38"
        />
      </g>
      <g filter="url(#filter2_i_4065_30904)">
        <circle
          cx="27.3574"
          cy="19.541"
          r="1.97065"
          fill="white"
          fillOpacity="0.38"
        />
      </g>
      <g filter="url(#filter3_i_4065_30904)">
        <circle
          cx="12.5771"
          cy="19.541"
          r="1.97065"
          fill="white"
          fillOpacity="0.38"
        />
      </g>
      <defs>
        <filter
          id="filter0_bii_4065_30904"
          x="-85"
          y="-85.4265"
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
            result="effect1_backgroundBlur_4065_30904"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4065_30904"
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
            result="effect2_innerShadow_4065_30904"
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
            in2="effect2_innerShadow_4065_30904"
            result="effect3_innerShadow_4065_30904"
          />
        </filter>
        <filter
          id="filter1_i_4065_30904"
          x="17.9971"
          y="17.5703"
          width="3.94141"
          height="4.18774"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.246331" />
          <feGaussianBlur stdDeviation="0.123166" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4065_30904"
          />
        </filter>
        <filter
          id="filter2_i_4065_30904"
          x="25.3867"
          y="17.5703"
          width="3.94141"
          height="4.18774"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.246331" />
          <feGaussianBlur stdDeviation="0.123166" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4065_30904"
          />
        </filter>
        <filter
          id="filter3_i_4065_30904"
          x="10.6064"
          y="17.5703"
          width="3.94141"
          height="4.18774"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.246331" />
          <feGaussianBlur stdDeviation="0.123166" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4065_30904"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Message;
