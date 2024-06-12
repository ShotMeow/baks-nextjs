import type { FC, HTMLAttributes } from "react";
import Eye from "@/src/shared/ui/icons/Eye";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {
  views: number;
}

const ViewsChip: FC<Props> = ({ views, className, ...props }) => {
  return (
    <div
      className={classNames(
        "flex items-center gap-1 rounded-full bg-black/40 px-3 py-2 text-sm font-semibold uppercase text-white/60 backdrop-blur-md",
        className,
      )}
      {...props}
    >
      <Eye width={20} height={20} />
      <span>{views}</span>
    </div>
  );
};

export default ViewsChip;
