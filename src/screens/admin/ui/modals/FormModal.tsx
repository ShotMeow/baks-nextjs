import type { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";
import { Modal } from "@gravity-ui/uikit";

import { getCurrentForm } from "../../utils/getCurrentForm";

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
