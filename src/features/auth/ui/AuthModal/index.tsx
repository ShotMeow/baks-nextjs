import { type Dispatch, type FC, type SetStateAction, useState } from "react";
import { Modal } from "@gravity-ui/uikit";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

interface Props {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

const AuthModal: FC<Props> = ({ open, onClose }) => {
  const [modalType, setModalType] = useState<"sign-in" | "sign-up">("sign-in");

  return (
    <Modal open={open} onClose={() => onClose}>
      <div className="rounded-xl bg-black p-6">
        {modalType === "sign-in" && <SignIn onClose={onClose} />}
        {modalType === "sign-up" && <SignUp onClose={onClose} />}
        <p className="mt-4">
          {modalType === "sign-in" && (
            <span>
              Нет аккаунта?{" "}
              <button
                className="text-yellow"
                onClick={() => setModalType("sign-up")}
              >
                Зарегистрироваться
              </button>
            </span>
          )}
          {modalType === "sign-up" && (
            <span>
              У вас уже есть аккаунт?{" "}
              <button
                className="text-yellow"
                onClick={() => setModalType("sign-in")}
              >
                Войти
              </button>
            </span>
          )}
        </p>
      </div>
    </Modal>
  );
};

export default AuthModal;
