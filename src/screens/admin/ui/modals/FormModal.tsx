import type { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";

import { getCurrentForm } from "@/src/screens/admin/utils/getCurrentForm";
import { Modal } from "@gravity-ui/uikit";

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
    <Modal open={open} onClose={() => onClose}>
      <div className="rounded-xl bg-black p-6">
        {children ?? getCurrentForm(activeTab, onClose)}
      </div>
    </Modal>
  );
};

export default FormModal;
