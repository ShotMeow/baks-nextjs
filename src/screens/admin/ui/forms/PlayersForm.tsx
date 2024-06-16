import type { Dispatch, FC, SetStateAction } from "react";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { Select, TextInput } from "@gravity-ui/uikit";

import Button from "@/src/shared/ui/Button";
import {
  type UserType,
  type UserFormType,
  useUpdateUser,
} from "@/src/entities/users";
import { useNotificationCall } from "../../hooks/useNotificationCall";

interface Props {
  onClose: Dispatch<SetStateAction<boolean>>;
  player: UserType;
}

const PlayersForm: FC<Props> = ({ onClose, player }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
  } = useForm<UserFormType>({
    defaultValues: {
      nickname: player.nickname,
      name: player.name,
      role: player.role,
      killDeaths: player.killDeaths,
      deaths: player.deaths,
      assists: player.assists,
    },
  });

  const {
    mutate: updateUserMutation,
    isSuccess: isUpdateSuccess,
    isError: isUpdateError,
  } = useUpdateUser();

  useNotificationCall({
    isUpdateSuccess,
    isUpdateError,
    onClose,
    updateText: [
      "Данные пользователя успешно обновлены",
      "Ошибка при обновлении данных пользователя",
    ],
  });

  const onSubmit: SubmitHandler<UserFormType> = (data) => {
    updateUserMutation({ id: player.id, data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <h4 className="text-xl font-bold">Изменить пользователя</h4>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium">Никнейм</span>
        <TextInput
          {...register("nickname", {
            required: "Никнейм не может быть пустым",
          })}
          errorPlacement="inside"
          validationState={errors?.nickname && "invalid"}
          errorMessage={errors?.nickname?.message}
          view="clear"
          className="rounded-md bg-black/5 px-2 py-1 dark:bg-white/5"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium">Имя</span>
        <TextInput
          {...register("name", {
            required: "Имя не может быть пустым",
          })}
          errorPlacement="inside"
          validationState={errors?.name && "invalid"}
          errorMessage={errors?.name?.message}
          view="clear"
          className="rounded-md bg-black/5 px-2 py-1 dark:bg-white/5"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium">Роль</span>
        <Controller
          render={({ field: { value, ...field } }) => (
            <Select
              {...field}
              filterable
              className="rounded-md bg-black/5 px-2 py-1 dark:bg-white/5"
              popupClassName="text-white"
              onUpdate={(value) => setValue("role", value[0])}
              defaultValue={[player.role]}
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
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium">K/D</span>
        <input
          {...register("killDeaths", {
            valueAsNumber: true,
          })}
          step="0.1"
          type="number"
          className="rounded-md bg-black/5 px-2 py-1 dark:bg-white/5"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium">Коэффициент смертей</span>
        <input
          {...register("deaths", {
            valueAsNumber: true,
          })}
          step="0.1"
          type="number"
          className="rounded-md bg-black/5 px-2 py-1 dark:bg-white/5"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium">Коэффициент помощи</span>
        <input
          {...register("assists", {
            valueAsNumber: true,
          })}
          step="0.1"
          type="number"
          className="rounded-md bg-black/5 px-2 py-1 dark:bg-white/5"
        />
      </label>
      <div className="mt-4 flex gap-4">
        <Button
          type="button"
          variant="transparent"
          onClick={() => onClose(false)}
        >
          Отмена
        </Button>
        <Button type="submit" variant="more">
          Подтвердить
        </Button>
      </div>
    </form>
  );
};

export default PlayersForm;
