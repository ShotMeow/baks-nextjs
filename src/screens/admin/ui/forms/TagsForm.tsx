import type { Dispatch, FC, SetStateAction } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { TextInput } from "@gravity-ui/uikit";

import Button from "@/src/shared/ui/Button";
import {
  type TagsFormType,
  type TagType,
  useCreateTag,
  useUpdateTag,
} from "@/src/entities/tags";
import { useNotificationCall } from "../../hooks/useNotificationCall";

interface Props {
  onClose: Dispatch<SetStateAction<boolean>>;
  tag?: TagType;
  type: "create" | "edit";
}

const TagsForm: FC<Props> = ({ onClose, tag, type }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TagsFormType>({
    defaultValues: {
      name: tag?.name,
    },
  });

  const {
    mutate: createTagMutation,
    isSuccess: isCreateSuccess,
    isError: isCreateError,
  } = useCreateTag();
  const {
    mutate: updateTagMutation,
    isSuccess: isUpdateSuccess,
    isError: isUpdateError,
  } = useUpdateTag();

  useNotificationCall({
    isCreateSuccess,
    isCreateError,
    isUpdateSuccess,
    isUpdateError,
    onClose,
    createText: ["Тег успешно создан", "Ошибка при создании тега"],
    updateText: ["Тег успешно обновлен", "Ошибка при обновлении тега"],
  });

  const onSubmit: SubmitHandler<TagsFormType> = (data) => {
    switch (type) {
      case "create":
        createTagMutation(data);
        break;
      case "edit":
        tag && updateTagMutation({ id: tag.id, data });
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <h4 className="text-xl font-bold">
        {type === "create" ? "Добавить тег" : "Изменить тег"}
      </h4>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium">Название</span>
        <TextInput
          {...register("name", {
            required: "Название не может быть пустым",
          })}
          errorPlacement="inside"
          validationState={errors?.name && "invalid"}
          errorMessage={errors?.name?.message}
          view="clear"
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

export default TagsForm;
