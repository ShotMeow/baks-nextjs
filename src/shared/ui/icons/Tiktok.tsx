import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Tiktok: FC<Props> = ({ width = 30, height = 34, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        cx="10.8716"
        cy="28.4947"
        rx="4.93801"
        ry="4.88603"
        fill="#FF004F"
      />
      <g filter="url(#filter0_bii_4017_31738)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.6381 8.01452V1.77759C15.6381 0.858955 16.3819 0.114258 17.3005 0.114258C18.1347 0.114258 19.1209 0.114258 19.8886 0.114258C20.6278 0.114258 21.2576 0.64781 21.3807 1.37666V1.37666C22.1129 4.74406 23.9665 6.70552 26.5493 7.54354C28.0505 8.03062 29.3241 9.2609 29.3241 10.8391V10.8391C29.3241 12.4308 28.0452 13.7757 26.4812 13.4802C24.6648 13.1369 22.9657 12.3975 21.3807 11.2728V22.8695C21.3807 28.6708 16.6388 33.3809 10.7982 33.3809C4.95766 33.3809 0.21582 28.6708 0.21582 22.8695C0.21582 17.0681 4.12599 12.3581 9.96652 12.3581V12.3581C11.2069 12.3581 12.2162 13.3573 12.2162 14.5977V15.7187C12.2162 16.9607 11.2086 17.9665 9.96652 17.9665V17.9665C7.29171 17.9665 5.95174 20.1236 5.95174 22.7805C5.95174 25.4373 8.12338 27.5945 10.7982 27.5945C13.4431 27.5945 15.596 25.4854 15.6438 22.8695H15.6456V8.01452H15.6381Z"
          fill="white"
          fillOpacity="0.08"
        />
      </g>
      <defs>
        <filter
          id="filter0_bii_4017_31738"
          x="-57.8479"
          y="-57.9494"
          width="145.236"
          height="149.394"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="29.0318" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_4017_31738"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4017_31738"
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
            result="effect2_innerShadow_4017_31738"
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
            in2="effect2_innerShadow_4017_31738"
            result="effect3_innerShadow_4017_31738"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Tiktok;
