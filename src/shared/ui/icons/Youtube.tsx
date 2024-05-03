import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Youtube: FC<Props> = ({ width = 36, height = 28, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_bii_4017_31729)">
        <path
          d="M0.125 9.79706C0.125 4.51493 4.40702 0.23291 9.68915 0.23291H25.9066C31.1888 0.23291 35.4708 4.51493 35.4708 9.79706V17.6979C35.4708 22.98 31.1888 27.262 25.9066 27.262H9.68914C4.40701 27.262 0.125 22.98 0.125 17.6979V9.79706Z"
          fill="white"
          fillOpacity="0.08"
        />
      </g>
      <circle cx="22.8913" cy="13.7475" r="4.05437" fill="#FF011D" />
      <g filter="url(#filter1_bi_4017_31729)">
        <path
          d="M23.7053 12.1952C24.966 12.7983 24.966 14.593 23.7053 15.1961L12.3817 20.6133C11.2777 21.1415 10.0006 20.3367 10.0006 19.1128V8.27851C10.0006 7.05466 11.2777 6.24989 12.3817 6.77804L23.7053 12.1952Z"
          fill="white"
          fillOpacity="0.27"
        />
      </g>
      <defs>
        <filter
          id="filter0_bii_4017_31729"
          x="-57.9387"
          y="-57.8308"
          width="151.473"
          height="143.156"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="29.0318" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_4017_31729"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4017_31729"
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
            result="effect2_innerShadow_4017_31729"
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
            in2="effect2_innerShadow_4017_31729"
            result="effect3_innerShadow_4017_31729"
          />
        </filter>
        <filter
          id="filter1_bi_4017_31729"
          x="-49.413"
          y="-52.801"
          width="133.477"
          height="132.993"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="29.707" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_4017_31729"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4017_31729"
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
            result="effect2_innerShadow_4017_31729"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Youtube;
