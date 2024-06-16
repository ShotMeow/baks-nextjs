import { type Dispatch, type FC, type SetStateAction, useState } from "react";
import Image from "next/image";
import { TextArea, TextInput } from "@gravity-ui/uikit";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";

import Button from "@/src/shared/ui/Button";
import {
  type StreamType,
  type StreamFormType,
  useCreateStream,
  useUpdateStream,
} from "@/src/entities/streams";
import { API_URL } from "@/src/shared/constants";
import { useNotificationCall } from "../../hooks/useNotificationCall";

interface Props {
  stream?: StreamType;
  onClose: Dispatch<SetStateAction<boolean>>;
  type: "create" | "edit";
}

const StreamsForm: FC<Props> = ({ onClose, stream, type }) => {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<StreamFormType>({
    defaultValues: {
      title: stream?.title,
      description: stream?.description,
      channel: stream?.channel,
    },
  });
  const [imageUrl, setImageUrl] = useState<string | null>(
    stream?.posterUrl ? `${API_URL}/images/${stream?.posterUrl}` : null,
  );

  const {
    mutate: createStreamMutation,
    isSuccess: isCreateSuccess,
    isError: isCreateError,
  } = useCreateStream();
  const {
    mutate: updateStreamMutation,
    isSuccess: isUpdateSuccess,
    isError: isUpdateError,
  } = useUpdateStream();

  useNotificationCall({
    isCreateSuccess,
    isCreateError,
    isUpdateSuccess,
    isUpdateError,
    onClose,
    createText: [
      "Трансляция успешно создана",
      "Ошибка при создании трансляции",
    ],
    updateText: [
      "Трансляция успешно обновлена",
      "Ошибка при обновлении трансляции",
    ],
  });

  const onSubmit: SubmitHandler<StreamFormType> = (data) => {
    switch (type) {
      case "create":
        createStreamMutation(data);
        break;
      case "edit":
        stream && updateStreamMutation({ id: stream.id, data });
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <h4 className="text-xl font-bold">
        {type === "create" ? "Новая трансляция" : "Редактировать трансляцию"}
      </h4>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium">Название</span>
        <TextInput
          {...register("title", {
            required: "Название трансляции не может быть пустым",
          })}
          errorPlacement="inside"
          validationState={errors?.title && "invalid"}
          errorMessage={errors?.title?.message}
          view="clear"
          className="rounded-md bg-black/5 px-2 py-1 dark:bg-white/5"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium">Описание</span>
        <TextArea
          {...register("description")}
          view="clear"
          className="rounded-md bg-black/5 px-2 py-1 dark:bg-white/5"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium">Twitch-канал</span>
        <TextInput
          {...register("channel", {
            required: "Название канала не может быть пустым",
          })}
          errorPlacement="inside"
          validationState={errors?.channel && "invalid"}
          errorMessage={errors?.channel?.message}
          view="clear"
          className="rounded-md bg-black/5 px-2 py-1 dark:bg-white/5"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium">Постер</span>
        <Controller
          render={({ field: { value, onChange, ...field } }) => (
            <input
              {...field}
              onChange={(event) => {
                const file = event.target.files?.[0] as File;
                onChange(file);
                setImageUrl(URL.createObjectURL(file));
              }}
              type="file"
              accept="image/*"
              className="rounded-md bg-black/5 px-2 py-1 dark:bg-white/5"
            />
          )}
          name="imageFile"
          control={control}
        />
        <div className="h-[270px] w-[480px]">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="Предпросмотр постера"
              width={480}
              height={270}
              className="size-full rounded-lg object-cover"
            />
          )}
        </div>
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

export default StreamsForm;
