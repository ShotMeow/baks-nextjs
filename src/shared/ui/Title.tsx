import type { FC, PropsWithChildren } from "react";

const Title: FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="text-2xl font-bold lg:text-3xl">{children}</h1>;
};

export default Title;
