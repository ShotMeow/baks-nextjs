import type { FC } from "react";

const NewChip: FC = () => {
  return (
    <div className="absolute left-6 top-6 flex items-center gap-1 rounded-full bg-pink-200 px-3 py-2 text-sm font-semibold uppercase text-black">
      <svg
        width="14"
        height="15"
        viewBox="0 0 6 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.03125 4.5L4.09375 0.59375L3.9375 3.40625L5.96875 4.34375L2.84375 7.9375L1.59375 8.71875L2.21875 5.75L1.75 5.59375L0.03125 4.5Z"
          fill="currentColor"
        />
      </svg>
      <span>Новое</span>
    </div>
  );
};

export default NewChip;
