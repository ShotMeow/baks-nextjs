import { type Dispatch, type FC, type SetStateAction, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

interface Props {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

const AuthModal: FC<Props> = ({ open, onClose }) => {
  const [modalType, setModalType] = useState<"sign-in" | "sign-up">("sign-in");

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
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AuthModal;
