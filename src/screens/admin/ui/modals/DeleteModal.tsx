import type { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Button from "@/src/shared/ui/Button";

interface Props {
  open: boolean;
  action: () => void;
  onClose: Dispatch<SetStateAction<boolean>>;
}

const DeleteModal: FC<PropsWithChildren<Props>> = ({
  open,
  onClose,
  action,
  children,
}) => {
  return (
    <Transition appear show={open}>
      <Dialog
        open={open}
        onClose={onClose}
        className="relative z-10 focus:outline-none"
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
              <DialogPanel className="flex w-full max-w-md flex-col items-center rounded-xl bg-black p-6">
                <DialogTitle
                  as="h3"
                  className="text-base/7 font-medium text-white"
                >
                  {children}
                </DialogTitle>
                <div className="mt-4 flex items-center gap-4">
                  <Button variant="transparent" onClick={() => onClose(false)}>
                    Отмена
                  </Button>
                  <Button variant="primary" onClick={action}>
                    Удалить
                  </Button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DeleteModal;
