import type { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";
import { Modal } from "@gravity-ui/uikit";

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
    <Modal open={open} onClose={() => onClose}>
      <div className="flex flex-col items-center rounded-xl bg-black p-6">
        <h4 className="text-base/7 font-medium text-white">{children}</h4>
        <div className="mt-4 flex items-center gap-4">
          <Button variant="transparent" onClick={() => onClose(false)}>
            Отмена
          </Button>
          <Button variant="primary" onClick={action}>
            Удалить
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
