import { type FC, type PropsWithChildren, useEffect, useRef } from "react";
import classNames from "classnames";

interface Props {
  isShow: boolean;
  onClose: () => void;
}

const Dropdown: FC<PropsWithChildren<Props>> = ({
  isShow,
  onClose,
  children,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.target &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isShow) {
      document.addEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isShow, onClose]);

  return (
    <div
      ref={dropdownRef}
      onClick={(event) => event.stopPropagation()}
      className={classNames(
        {
          "pointer-events-auto opacity-100": isShow,
        },
        "opacity-0 pointer-events-none transition-all absolute left-0 right-0 lg:left-auto lg:right-4 top-full z-20 space-y-6 border-2 border-white/10 bg-zinc-900/50 px-6 py-10 backdrop-blur-md",
      )}
    >
      {children}
    </div>
  );
};

export default Dropdown;
