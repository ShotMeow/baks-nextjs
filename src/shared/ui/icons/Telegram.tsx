import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Telegram: FC<Props> = ({ width = 32, height = 32, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="8.42578"
        y1="23.7581"
        x2="17.3212"
        y2="14.8627"
        stroke="#04A8FF"
        strokeWidth="6.23749"
        strokeLinecap="round"
      />
      <g filter="url(#filter0_bii_4017_37978)">
        <path
          d="M31.8132 0.307086L10.2414 21.8789L0.997453 12.635C-0.355827 11.2817 0.255575 8.97152 2.1011 8.46481L31.8132 0.307086Z"
          fill="white"
          fillOpacity="0.08"
        />
      </g>
      <g filter="url(#filter1_bi_4017_37978)">
        <path
          d="M31.8128 0.307172L10.241 21.879L19.4849 31.1229C20.8382 32.4762 23.1484 31.8648 23.6551 30.0193L31.8128 0.307172Z"
          fill="white"
          fillOpacity="0.08"
        />
      </g>
      <defs>
        <filter
          id="filter0_bii_4017_37978"
          x="-8.67478"
          y="-8.63327"
          width="49.4287"
          height="39.4526"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.4702" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_4017_37978"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4017_37978"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.415833" />
          <feGaussianBlur stdDeviation="0.207916" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_4017_37978"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3.53458" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_4017_37978"
            result="effect3_innerShadow_4017_37978"
          />
        </filter>
        <filter
          id="filter1_bi_4017_37978"
          x="0.469146"
          y="-9.46494"
          width="41.1154"
          height="51.0922"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.88603" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_4017_37978"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4017_37978"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3.53458" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_4017_37978"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Telegram;
