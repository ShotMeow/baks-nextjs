import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Tank: FC<Props> = ({ width = 57, height = 67, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 57 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.8536 3.63331C-4.22673 16.9554 -2.3785 53.7889 28.3743 66.7382C59.1271 53.7889 60.9753 16.9554 51.895 3.63331C43.13 10.5076 33.8637 3.89458 29.6632 0.896809C29.1566 0.535301 28.7237 0.226367 28.3743 0C28.0248 0.226367 27.5919 0.535301 27.0854 0.89681C22.8848 3.89459 13.6186 10.5076 4.8536 3.63331ZM25.4693 39.2578C26.0709 39.2578 26.5587 39.785 26.5587 40.4355V49.9719C26.5587 51.2147 28.1084 51.6102 28.6225 50.4986L38.4801 29.1849C38.8423 28.4018 38.3155 27.4804 37.5057 27.4804H31.2794C30.6778 27.4804 30.19 26.9531 30.19 26.3027V16.7663C30.19 15.5235 28.6403 15.128 28.1262 16.2396L18.2686 37.5533C17.9065 38.3364 18.4332 39.2578 19.243 39.2578H25.4693Z"
        fill="url(#paint0_linear_4154_32202)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4154_32202"
          x1="56.6184"
          y1="-0.313784"
          x2="-4.71739"
          y2="62.2911"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.0001" stopColor="#C1CAE0" />
          <stop offset="1" stopColor="#363F56" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Tank;
