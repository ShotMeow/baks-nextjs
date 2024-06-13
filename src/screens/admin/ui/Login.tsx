import type { Dispatch, FC, SetStateAction } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { TextInput } from "@gravity-ui/uikit";

import Button from "@/src/shared/ui/Button";
import { useNotificationContext } from "@/src/features/notification";
import Subtitle from "@/src/shared/ui/Subtitle";

interface Props {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

interface AdminFormType {
  login: string;
  password: string;
}

const Login: FC<Props> = ({ setIsLogin }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AdminFormType>();
  const { setError, setSuccess } = useNotificationContext();

  const onSubmit: SubmitHandler<AdminFormType> = (data) => {
    const currentLogin = process.env.NEXT_PUBLIC_ADMIN_LOGIN as string;
    const currentPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD as string;

    if (data.login === currentLogin && data.password === currentPassword) {
      setIsLogin(true);
      setSuccess("Вы успешно вошли в админ-панель");
    } else {
      setError("Логин или пароль не совпадают");
    }
  };
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <Subtitle>Админ-панель</Subtitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-10 flex flex-col gap-4"
      >
        <div className="flex items-center gap-4">
          <label className="flex flex-col gap-2">
            <span className="text-sm/6 font-medium text-white">Логин</span>
            <TextInput
              {...register("login", {
                required: "Логин обязателен для заполнения",
              })}
              errorPlacement="inside"
              validationState={errors?.login && "invalid"}
              errorMessage={errors?.login?.message}
              view="clear"
              className="rounded-md bg-white/5 px-2 py-1"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm/6 font-medium text-white">Пароль</span>
            <TextInput
              {...register("password", {
                required: "Пароль обязателен для заполнения",
              })}
              errorPlacement="inside"
              validationState={errors?.password && "invalid"}
              errorMessage={errors?.password?.message}
              type="password"
              view="clear"
              className="rounded-md bg-white/5 px-2 py-1"
            />
          </label>
        </div>
        <Button type="submit" variant="primary">
          Войти
        </Button>
      </form>
    </div>
  );
};

export default Login;
