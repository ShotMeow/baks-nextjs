import { type Dispatch, type FC, type SetStateAction, useState } from "react";
import { Modal } from "@gravity-ui/uikit";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Actions from "@/src/features/auth/ui/Actions";

interface Props {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

const AuthModal: FC<Props> = ({ open, onClose }) => {
  const [modalType, setModalType] = useState<"sign-in" | "sign-up">("sign-in");

  return (
    <Modal
      className="bg-black/20 backdrop-blur-sm"
      open={open}
      onClose={() => onClose}
    >
      <div className="rounded-xl border-2 border-white/10 bg-black p-6">
        {modalType === "sign-in" && <SignIn onClose={onClose} />}
        {modalType === "sign-up" && <SignUp onClose={onClose} />}
        <Actions modalType={modalType} setModalType={setModalType} />
      </div>
    </Modal>
  );
};

export default AuthModal;
