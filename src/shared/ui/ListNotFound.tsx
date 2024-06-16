import type { FC, HTMLAttributes, PropsWithChildren } from "react";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLElement> {}

const ListNotFound: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={classNames("text-center text-2xl my-10", className)}
      {...props}
    >
      {children}
    </p>
  );
};

export default ListNotFound;
