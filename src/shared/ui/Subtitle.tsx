import type { FC, PropsWithChildren } from "react";

const Subtitle: FC<PropsWithChildren> = ({ children }) => {
  return <h2 className="text-3xl font-semibold md:text-5xl">{children}</h2>;
};

export default Subtitle;
