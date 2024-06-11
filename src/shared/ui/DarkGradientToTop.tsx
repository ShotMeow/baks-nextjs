import type { FC } from "react";

const DarkGradientToTop: FC = () => {
  return (
    <div className="absolute left-0 top-0 -z-10 size-full bg-gradient-to-t from-black/50 to-transparent" />
  );
};

export default DarkGradientToTop;
