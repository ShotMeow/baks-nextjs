import type { Dispatch, FC, SetStateAction } from "react";

interface Props {
  modalType: "sign-in" | "sign-up";
  setModalType: Dispatch<SetStateAction<"sign-in" | "sign-up">>;
}

const Actions: FC<Props> = ({ modalType, setModalType }) => {
  return (
    <p className="mt-4">
      {modalType === "sign-in" && (
        <span>
          Нет аккаунта?{" "}
          <button
            className="text-green dark:text-yellow"
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
            className="text-green dark:text-yellow"
            onClick={() => setModalType("sign-in")}
          >
            Войти
          </button>
        </span>
      )}
    </p>
  );
};

export default Actions;
