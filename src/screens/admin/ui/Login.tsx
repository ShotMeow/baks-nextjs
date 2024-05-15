import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import Field from "@/src/shared/ui/Field";
import Button from "@/src/shared/ui/Button";

interface Props {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const Login: FC<Props> = ({ setIsLogin }) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const currentLogin = process.env.NEXT_PUBLIC_ADMIN_LOGIN as string;
    const currentPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD as string;

    const formData = new FormData(event.currentTarget);
    if (
      formData.get("login") === currentLogin &&
      formData.get("password") === currentPassword
    ) {
      setIsLogin(true);
    } else {
      setErrorMessage("Неверный логин или пароль");
    }
  };
  return (
    <form onSubmit={handleLogin} className="my-10 flex flex-col gap-4">
      <Field name="login" placeholder="Логин" />
      <Field name="password" placeholder="Пароль" type="password" />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <Button variant="primary">Войти</Button>
    </form>
  );
};

export default Login;
