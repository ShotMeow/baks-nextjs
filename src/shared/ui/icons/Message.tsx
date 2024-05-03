import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Message: FC<Props> = ({ width = 34, height = 35, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="3.8916"
        y1="30.2371"
        x2="13.0068"
        y2="21.122"
        stroke="#01E676"
        strokeWidth="6.23749"
        strokeLinecap="round"
      />
      <g filter="url(#filter0_bii_4016_31712)">
        <circle
          cx="17.3025"
          cy="16.8567"
          r="16.0096"
          fill="white"
          fillOpacity="0.08"
        />
      </g>
      <g filter="url(#filter1_i_4016_31712)">
        <circle
          cx="17.303"
          cy="16.8567"
          r="1.66333"
          fill="white"
          fillOpacity="0.27"
        />
      </g>
      <g filter="url(#filter2_i_4016_31712)">
        <circle
          cx="23.5403"
          cy="16.8567"
          r="1.66333"
          fill="white"
          fillOpacity="0.27"
        />
      </g>
      <g filter="url(#filter3_i_4016_31712)">
        <circle
          cx="11.0647"
          cy="16.8567"
          r="1.66333"
          fill="white"
          fillOpacity="0.27"
        />
      </g>
      <defs>
        <filter
          id="filter0_bii_4016_31712"
          x="-56.7707"
          y="-57.2165"
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
            result="effect1_backgroundBlur_4016_31712"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4016_31712"
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
            result="effect2_innerShadow_4016_31712"
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
            in2="effect2_innerShadow_4016_31712"
            result="effect3_innerShadow_4016_31712"
          />
        </filter>
        <filter
          id="filter1_i_4016_31712"
          x="15.6396"
          y="15.1934"
          width="3.32715"
          height="3.53458"
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
          <feOffset dy="0.207916" />
          <feGaussianBlur stdDeviation="0.103958" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4016_31712"
          />
        </filter>
        <filter
          id="filter2_i_4016_31712"
          x="21.877"
          y="15.1934"
          width="3.32715"
          height="3.53458"
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
          <feOffset dy="0.207916" />
          <feGaussianBlur stdDeviation="0.103958" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4016_31712"
          />
        </filter>
        <filter
          id="filter3_i_4016_31712"
          x="9.40137"
          y="15.1934"
          width="3.32715"
          height="3.53458"
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
          <feOffset dy="0.207916" />
          <feGaussianBlur stdDeviation="0.103958" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4016_31712"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Message;
