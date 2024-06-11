import type { FC } from "react";

const DarkGradientToTop: FC = () => {
  return (
    <div className="absolute -z-10 left-0 top-0 size-full bg-gradient-to-t from-black/50 to-transparent" />
  );
};

export default DarkGradientToTop;
