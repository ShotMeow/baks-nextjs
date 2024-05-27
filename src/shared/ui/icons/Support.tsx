import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Support: FC<Props> = ({ width = 64, height = 49, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M43.0646 0C41.7984 0 40.772 1.01031 40.772 2.25658V7.89803H35.0404C33.7743 7.89803 32.7478 8.90833 32.7478 10.1546V11.2829C32.7478 12.5292 33.7743 13.5395 35.0404 13.5395H40.772V19.1809C40.772 20.4272 41.7984 21.4375 43.0646 21.4375H44.2109C45.477 21.4375 46.5035 20.4272 46.5035 19.1809V13.5395H52.235C53.5012 13.5395 54.5276 12.5292 54.5276 11.2829V10.1546C54.5276 8.90833 53.5012 7.89802 52.235 7.89802H46.5035V2.25658C46.5035 1.0103 45.477 0 44.2109 0H43.0646Z"
        fill="url(#paint0_linear_4154_32026)"
      />
      <path
        d="M14.0794 40.3604V27.4507C14.0794 25.8211 15.4216 24.5 17.0772 24.5C21.1954 24.5 25.2076 25.7842 28.5381 28.1683L29.8732 29.124C31.2359 30.0995 32.8776 30.625 34.5627 30.625H42.082C43.8004 30.625 45.1934 31.9961 45.1934 33.6875C45.1934 35.3789 43.8004 36.75 42.082 36.75H28.0807C27.2215 36.75 26.525 37.4356 26.525 38.2812C26.525 39.1269 27.2215 39.8125 28.0807 39.8125H40.386C43.3323 39.8125 45.9645 38.1168 47.7853 35.8369C49.8958 33.1944 52.859 30.625 56.0833 30.625C58.5569 30.625 60.4927 31.3811 61.9099 32.3297C63.8305 33.6153 63.22 36.1792 61.2623 37.4094C55.0748 41.2975 41.8633 49 34.3035 49C27.78 49 19.119 44.802 15.6316 42.9594C14.6614 42.4468 14.0794 41.4442 14.0794 40.3604Z"
        fill="url(#paint1_linear_4154_32026)"
      />
      <path
        d="M0.078125 24.5C0.078125 22.8086 1.47115 21.4375 3.18952 21.4375H7.85662C9.575 21.4375 10.968 22.8086 10.968 24.5V44.4062C10.968 46.0976 9.575 47.4688 7.85662 47.4688H3.18952C1.47115 47.4688 0.078125 46.0976 0.078125 44.4062V24.5Z"
        fill="url(#paint2_linear_4154_32026)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4154_32026"
          x1="63.0224"
          y1="-0.230384"
          x2="21.9588"
          y2="63.3235"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.0001" stopColor="#C1CAE0" />
          <stop offset="1" stopColor="#363F56" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4154_32026"
          x1="63.0224"
          y1="-0.230384"
          x2="21.9588"
          y2="63.3235"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.0001" stopColor="#C1CAE0" />
          <stop offset="1" stopColor="#363F56" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4154_32026"
          x1="63.0224"
          y1="-0.230384"
          x2="21.9588"
          y2="63.3235"
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

export default Support;
