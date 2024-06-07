import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { TextInput, useToaster } from "@gravity-ui/uikit";

import Button from "@/src/shared/ui/Button";

import { useSignIn } from "../mutations";
import type { SignInType } from "../types";

interface Props {
  onClose: Dispatch<SetStateAction<boolean>>;
}

const SignIn: FC<Props> = ({ onClose }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInType>();
  const { add } = useToaster();
  const { mutate: signIn, isError, isSuccess } = useSignIn();

  const onSubmit: SubmitHandler<SignInType> = (data) => {
    signIn(data);
  };

  useEffect(() => {
    isSuccess && onClose(false);
  }, [isSuccess, onClose]);

  useEffect(() => {
    isError &&
      add({
        name: "sign-in-error",
        title: "Авторизация не прошла успешно",
        content: "E-mail или пароль не совпадают",
        theme: "warning",
      });
  }, [add, isError]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <h3 className="text-xl font-bold">Авторизация</h3>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium text-white">E-mail</span>
        <TextInput
          {...register("email", {
            required: "E-mail обязателен для заполнения",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Неверный формат E-mail",
            },
          })}
          errorPlacement="inside"
          validationState={errors?.email && "invalid"}
          errorMessage={errors?.email?.message}
          type="email"
          view="clear"
          className="rounded-md bg-white/5 px-2 py-1"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium text-white">Пароль</span>
        <TextInput
          {...register("password", {
            required: "Пароль обязателен для заполнения",
            minLength: {
              value: 6,
              message: "Пароль должен быть не менее 6 символов",
            },
          })}
          errorPlacement="inside"
          validationState={errors?.password && "invalid"}
          errorMessage={errors?.password?.message}
          type="password"
          view="clear"
          className="rounded-md bg-white/5 px-2 py-1"
        />
      </label>
      <div className="mt-4 flex flex-wrap gap-4">
        <Button
          type="button"
          variant="transparent"
          onClick={() => onClose(false)}
        >
          Отмена
        </Button>
        <Button type="submit" variant="more">
          Войти
        </Button>
      </div>
    </form>
  );
};

export default SignIn;
