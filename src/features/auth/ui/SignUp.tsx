import { type Dispatch, type FC, type SetStateAction, useEffect } from "react";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { TextInput, Select } from "@gravity-ui/uikit";

import Button from "@/src/shared/ui/Button";

import { useSignUp } from "../mutations";
import type { SignUpType } from "../types";
import { useNotificationContext } from "@/src/features/notification";

interface Props {
  onClose: Dispatch<SetStateAction<boolean>>;
}

const SignUp: FC<Props> = ({ onClose }) => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    control,
    setValue,
  } = useForm<SignUpType>({
    defaultValues: {
      email: "",
      password: "",
      nickname: "",
      name: "",
      role: "tank",
    },
  });
  const { setError, setSuccess } = useNotificationContext();

  const { mutate: signUp, isSuccess, isError } = useSignUp();

  const onSubmit: SubmitHandler<SignUpType> = (data) => {
    // Проверка совпадения паролей
    if (data.password !== data.repeatPassword) {
      return;
    }

    signUp(data);
  };

  useEffect(() => {
    if (isSuccess) {
      onClose(false);
      setSuccess("Вы успешно зарегистрировались");
    }
  }, [isSuccess, onClose, setSuccess]);

  useEffect(() => {
    isError && setError("E-mail или никнейм уже заняты");
  }, [isError, setError]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <h3 className="text-xl font-bold">Регистрация</h3>
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
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium text-white">Пароль</span>
        <TextInput
          {...register("repeatPassword", {
            required: "Подтверждение пароля обязательно для заполнения",
            validate: (value: string) => {
              if (watch("password") !== value) {
                return "Пароли не совпадают";
              }
            },
          })}
          errorPlacement="inside"
          validationState={errors?.repeatPassword && "invalid"}
          errorMessage={errors?.repeatPassword?.message}
          type="password"
          view="clear"
          className="rounded-md bg-white/5 px-2 py-1"
        />
      </label>
      <div className="flex flex-wrap gap-4">
        <label className="flex w-full flex-col gap-2 sm:w-auto">
          <span className="text-sm/6 font-medium text-white">Никнейм</span>
          <TextInput
            {...register("nickname", {
              required: "Никнейм обязателен для заполнения",
            })}
            errorPlacement="inside"
            validationState={errors?.nickname && "invalid"}
            errorMessage={errors?.nickname?.message}
            view="clear"
            className="rounded-md bg-white/5 px-2 py-1"
          />
        </label>
        <label className="flex w-full flex-col gap-2 sm:w-auto">
          <span className="text-sm/6 font-medium text-white">Имя</span>
          <TextInput
            {...register("name", {
              required: "Имя обязательно для заполнения",
            })}
            errorPlacement="inside"
            validationState={errors?.name && "invalid"}
            errorMessage={errors?.name?.message}
            view="clear"
            className="rounded-md bg-white/5 px-2 py-1"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium text-white">Роль</span>
        <Controller
          render={({ field: { value, ...field } }) => (
            <Select
              {...field}
              filterable
              className="rounded-md bg-white/5 px-2 py-1"
              onUpdate={(value) => setValue("role", value[0])}
            >
              <Select.Option value="tank">Танк</Select.Option>
              <Select.Option value="attack">Нападение</Select.Option>
              <Select.Option value="sniper">Снайпер</Select.Option>
              <Select.Option value="support">Поддержка</Select.Option>
            </Select>
          )}
          name="role"
          control={control}
        />
      </label>
      <div className="mt-4 flex flex-col gap-4 sm:flex-row">
        <Button
          type="button"
          variant="transparent"
          onClick={() => onClose(false)}
        >
          Отмена
        </Button>
        <Button type="submit" variant="more">
          Зарегистрироваться
        </Button>
      </div>
    </form>
  );
};

export default SignUp;
