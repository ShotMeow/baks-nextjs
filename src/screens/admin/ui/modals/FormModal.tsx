import type { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { getCurrentForm } from "@/src/screens/admin/utils/getCurrentForm";

interface Props {
  open: boolean;
  activeTab: string;
  onClose: Dispatch<SetStateAction<boolean>>;
}

const FormModal: FC<PropsWithChildren<Props>> = ({
  open,
  children,
  activeTab,
  onClose,
}) => {
  return (
    <Transition appear show={open}>
      <Dialog
        open={open}
        onClose={onClose}
        className="relative z-50 focus:outline-none"
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              <DialogPanel className="w-full max-w-md rounded-xl bg-black p-6">
                {children ?? getCurrentForm(activeTab, onClose)}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default FormModal;
