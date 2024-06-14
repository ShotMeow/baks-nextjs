import type { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Field: FC<Props> = ({ type = "text", ...props }) => {
  return (
    <label>
      <input
        className="w-full border-b-2 border-black/5 bg-transparent py-2 focus:outline-none dark:border-white/5"
        type={type}
        {...props}
      />
    </label>
  );
};

export default Field;
