import { type FC, type PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import Exit from "@/src/shared/ui/icons/Exit";
import { Check } from "@gravity-ui/icons";

interface Props {
  success?: boolean;
  error?: boolean;
  messageVisibleHandler: (state: any) => void;
}

const Message: FC<PropsWithChildren<Props>> = ({
  success,
  error,
  messageVisibleHandler,
  children,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      messageVisibleHandler(null);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [messageVisibleHandler]);

  return createPortal(
    <div className="fixed bottom-4 right-4 z-50 mx-4 flex items-center gap-2 rounded-md border-2 border-white/5 bg-black px-4 py-2 text-sm">
      {error && <Exit className="text-red-600" />}
      {success && <Check className="text-green" />}
      {children}
    </div>,
    document.getElementById("notifications") as HTMLElement,
  );
};

export default Message;
