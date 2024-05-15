import type { Dispatch, FC, SetStateAction } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import Button from "@/src/shared/ui/Button";
import { getCurrentForm } from "@/src/screens/admin/utils/getCurrentForm";

interface Props {
  open: boolean;
  activeTab: string;
  onClose: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<Props> = ({ open, activeTab, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-xl space-y-4 rounded-lg bg-zinc-900 p-12">
          <form className="flex flex-col gap-4">
            {getCurrentForm(activeTab)}
            <div className="mt-4 flex gap-4">
              <Button variant="transparent" onClick={() => onClose(false)}>
                Отмена
              </Button>
              <Button variant="more">Подтвердить</Button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
