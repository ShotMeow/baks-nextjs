import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Tiktok: FC<Props> = ({ width = 30, height = 34, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        cx="13.1385"
        cy="34.5141"
        rx="5.85037"
        ry="5.78879"
        fill="#FF004F"
      />
      <g filter="url(#filter0_bii_4065_30928)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.7855 10.2498V2.86054C18.7855 1.77218 19.6666 0.889893 20.755 0.889893C21.7432 0.889893 22.9117 0.889893 23.8212 0.889893C24.697 0.889893 25.4432 1.52202 25.589 2.38553C26.4565 6.37511 28.6525 8.69897 31.7126 9.69183C33.4912 10.2689 35.0001 11.7265 35.0001 13.5963C35.0001 15.4821 33.4849 17.0755 31.6319 16.7253C29.4799 16.3186 27.4669 15.4426 25.589 14.1101V27.8495C25.589 34.7226 19.971 40.3029 13.0513 40.3029C6.13162 40.3029 0.513672 34.7226 0.513672 27.8495C0.513672 20.9762 5.1463 15.396 12.0659 15.396C13.5355 15.396 14.7312 16.5797 14.7312 18.0493V19.3774C14.7312 20.849 13.5375 22.0406 12.0659 22.0406C8.89692 22.0406 7.30937 24.5961 7.30937 27.744C7.30937 30.8917 9.88225 33.4474 13.0513 33.4474C16.1848 33.4474 18.7355 30.9486 18.7922 27.8495H18.7943V10.2498H18.7855Z"
          fill="black"
          fillOpacity="0.59"
        />
      </g>
      <defs>
        <filter
          id="filter0_bii_4065_30928"
          x="-85.4863"
          y="-85.1101"
          width="206.486"
          height="211.413"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="43" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_4065_30928"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4065_30928"
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
            result="effect2_innerShadow_4065_30928"
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
            in2="effect2_innerShadow_4065_30928"
            result="effect3_innerShadow_4065_30928"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Tiktok;
