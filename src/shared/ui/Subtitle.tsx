import type { FC, HTMLAttributes, PropsWithChildren } from "react";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLHeadingElement> {}

const Subtitle: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h2
      className={classNames("text-3xl font-semibold md:text-5xl", className)}
      {...props}
    >
      {children}
    </h2>
  );
};

export default Subtitle;
