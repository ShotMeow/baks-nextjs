"use client";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

interface Props {
  message: string;
  onClose: Dispatch<SetStateAction<boolean>>;
}

const Error: FC<Props> = ({ message, onClose }) => {
  useEffect(() => {
    setTimeout(() => {
      onClose(false);
    }, 5000);
  }, [onClose]);

  return (
    <Transition appear show={Boolean(message)}>
      <TransitionChild
        enter="ease-out duration-300"
        enterFrom="opacity-0 transform-[scale(95%)]"
        enterTo="opacity-100 transform-[scale(100%)]"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 transform-[scale(100%)]"
        leaveTo="opacity-0 transform-[scale(95%)]"
      >
        <p className="fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-lg border-2 border-white/10 bg-black px-6 py-3 text-base/7 font-medium text-white">
          {message}
        </p>
      </TransitionChild>
    </Transition>
  );
};

export default Error;
