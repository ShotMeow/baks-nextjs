import { Dispatch, FC, SetStateAction, useState } from "react";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { TextInput, Select } from "@gravity-ui/uikit";
import Image from "next/image";
import MDEditor from "@uiw/react-md-editor";

import Button from "@/src/shared/ui/Button";
import { useGetTags } from "@/src/entities/tags";
import {
  type NewsFormType,
  type NewsType,
  useCreateNews,
  useUpdateNews,
} from "@/src/entities/news";
import { API_URL } from "@/src/shared/constants";

interface Props {
  onClose: Dispatch<SetStateAction<boolean>>;
  news?: NewsType;
  type: "create" | "edit";
}

const NewsForm: FC<Props> = ({ onClose, news, type }) => {
  const {
    register,
    formState: { errors },
    setValue,
    control,
    handleSubmit,
  } = useForm<NewsFormType>({
    defaultValues: {
      title: news?.title,
      description: news?.description,
      body: news?.body,
      tags: news?.tags,
    },
  });
  const [imageUrl, setImageUrl] = useState<string | null>(
    news?.artworkUrl ? `${API_URL}/images/${news?.artworkUrl}` : null,
  );

  const { data: tags } = useGetTags();
  const { mutate: createNewsMutation } = useCreateNews();
  const { mutate: updateNewsMutation } = useUpdateNews();

  const onSubmit: SubmitHandler<NewsFormType> = (data) => {
    switch (type) {
      case "create":
        createNewsMutation(data);
        break;
      case "edit":
        news &&
          updateNewsMutation({
            id: news.id,
            data,
          });
        break;
    }

    onClose(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <h4 className="text-xl font-bold">
        {type === "create" ? "Добавить новость" : "Редактировать статью"}
      </h4>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium text-white">Название</span>
        <TextInput
          {...register("title", {
            required: "Заголовок не может быть пустым",
          })}
          errorPlacement="inside"
          validationState={errors?.title && "invalid"}
          errorMessage={errors?.title?.message}
          view="clear"
          className="rounded-md bg-white/5 px-2 py-1"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium text-white">Описание</span>
        <TextInput
          {...register("description", {
            required: "Описание не может быть пустым",
          })}
          errorPlacement="inside"
          validationState={errors?.description && "invalid"}
          errorMessage={errors?.description?.message}
          view="clear"
          className="rounded-md bg-white/5 px-2 py-1"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium text-white">Постер</span>
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
              className="rounded-md bg-white/5 px-2 py-1"
            />
          )}
          name="imageFile"
          control={control}
        />
        <div className="h-[270px] w-[480px]">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="Предпросмотр изображения"
              width={480}
              height={270}
              className="size-full rounded-lg object-cover"
            />
          )}
        </div>
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium text-white">Теги</span>
        <Controller
          render={({ field: { value, ...field } }) => (
            <Select
              {...field}
              multiple
              filterable
              className="rounded-md bg-white/5 px-2 py-1"
              defaultValue={value?.map((tag) => String(tag.id))}
              onUpdate={(value) =>
                tags &&
                setValue(
                  "tags",
                  tags.filter((tag) => value.includes(String(tag.id))),
                )
              }
            >
              {tags?.map((tag) => (
                <Select.Option value={String(tag.id)} key={tag.id}>
                  {tag.name}
                </Select.Option>
              ))}
            </Select>
          )}
          name="tags"
          control={control}
        />
      </label>
      <label>
        <span className="text-sm/6 font-medium text-white">Тело поста</span>
        <Controller
          render={({ field }) => (
            <MDEditor
              {...field}
              onChange={(value) =>
                setValue("body", String(value), { shouldValidate: true })
              }
            />
          )}
          name="body"
          control={control}
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

export default NewsForm;
