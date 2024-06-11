import { type Dispatch, type FC, type SetStateAction, useState } from "react";
import { TextInput, Select } from "@gravity-ui/uikit";
import Image from "next/image";
import { DatePicker } from "@gravity-ui/date-components";
import MDEditor from "@uiw/react-md-editor";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";

import Button from "@/src/shared/ui/Button";
import {
  type TournamentType,
  type TournamentFormType,
  useCreateTournament,
  useUpdateTournament,
} from "@/src/entities/tournaments";
import { useGetTeams } from "@/src/entities/teams";
import { API_URL } from "@/src/shared/constants";
import { useGetTags } from "@/src/entities/tags";
import { dateTimeParse } from "@gravity-ui/date-utils";

interface Props {
  onClose: Dispatch<SetStateAction<boolean>>;
  tournament?: TournamentType;
  type: "create" | "edit";
}

const TournamentsForm: FC<Props> = ({ onClose, tournament, type }) => {
  const {
    register,
    formState: { errors },
    setValue,
    control,
    handleSubmit,
  } = useForm<TournamentFormType>({
    defaultValues: {
      name: tournament?.name,
      description: tournament?.description,
      body: tournament?.body,
      prize: tournament?.prize,
      mode: tournament?.mode,
      type: tournament?.type,
      teams: tournament?.teams,
      address: tournament?.address,
      eventDate: tournament?.eventDate,
      tags: tournament?.tags,
    },
  });
  const [imageUrl, setImageUrl] = useState<string | null>(
    tournament?.artworkUrl
      ? `${API_URL}/images/${tournament?.artworkUrl}`
      : null,
  );

  const { mutate: createTournamentMutation } = useCreateTournament();
  const { mutate: updateTournamentMutation } = useUpdateTournament();
  const { data: teams } = useGetTeams();
  const { data: tags } = useGetTags({
    searchQuery: "",
  });

  const onSubmit: SubmitHandler<TournamentFormType> = (data) => {
    switch (type) {
      case "create":
        createTournamentMutation(data);
        break;
      case "edit":
        tournament &&
          updateTournamentMutation({
            id: tournament.id,
            data,
          });
        break;
    }

    onClose(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <h4 className="text-xl font-bold">
        {type === "create"
          ? "Новый турнир"
          : `Редактировать турнир ${tournament?.name}`}
      </h4>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium text-white">Название</span>
        <TextInput
          {...register("name", {
            required: "Название турнира не может быть пустым",
          })}
          errorPlacement="inside"
          validationState={errors?.name && "invalid"}
          errorMessage={errors?.name?.message}
          view="clear"
          className="rounded-md bg-white/5 px-2 py-1"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium text-white">Описание</span>
        <TextInput
          {...register("description", {
            required: "Описание турнира не может быть пустым",
          })}
          errorPlacement="inside"
          validationState={errors?.description && "invalid"}
          errorMessage={errors?.description?.message}
          view="clear"
          className="rounded-md bg-white/5 px-2 py-1"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium text-white">Описание</span>
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
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium text-white">Изображение</span>
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
        <span className="text-sm/6 font-medium text-white">Приз</span>
        <TextInput
          {...register("prize", {
            valueAsNumber: true,
          })}
          view="clear"
          type="number"
          className="rounded-md bg-white/5 px-2 py-1"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium text-white">Режим</span>
        <Controller
          render={({ field: { value, ...field } }) => (
            <Select
              {...field}
              filterable
              className="rounded-md bg-white/5 px-2 py-1"
              onUpdate={(value) => setValue("mode", value[0])}
            >
              <Select.Option value="1x1">1x1</Select.Option>
              <Select.Option value="2x2">2x2</Select.Option>
              <Select.Option value="5x5">5x5</Select.Option>
            </Select>
          )}
          name="mode"
          control={control}
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium text-white">Формат</span>
        <Controller
          render={({ field: { value, ...field } }) => (
            <Select
              {...field}
              filterable
              className="rounded-md bg-white/5 px-2 py-1"
              onUpdate={(value) => setValue("type", value[0])}
            >
              <Select.Option value="opened">Открытый</Select.Option>
              <Select.Option value="closed">Закрытый</Select.Option>
            </Select>
          )}
          name="type"
          control={control}
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium text-white">Команды</span>
        {teams && (
          <Controller
            render={({ field: { value, ...field } }) => (
              <Select
                {...field}
                multiple
                filterable
                className="rounded-md bg-white/5 px-2 py-1"
                defaultValue={value?.map((team) => String(team.id))}
                onUpdate={(value) =>
                  setValue(
                    "teams",
                    teams.filter((team) => value.includes(String(team.id))),
                  )
                }
              >
                {teams.map((team) => (
                  <Select.Option value={String(team.id)} key={team.id}>
                    {team.name}
                  </Select.Option>
                ))}
              </Select>
            )}
            name="teams"
            control={control}
          />
        )}
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
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium text-white">
          Адрес проведения
        </span>
        <TextInput
          {...register("address")}
          view="clear"
          className="rounded-md bg-white/5 px-2 py-1"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium text-white">
          Дата проведения турнира
        </span>
        <Controller
          render={() => (
            <DatePicker
              onUpdate={(value) =>
                setValue("eventDate", value?.toDate().toISOString())
              }
              view="clear"
              format="DD.MM.YYYY"
              defaultValue={dateTimeParse(tournament?.eventDate)}
              className="rounded-md bg-white/5 px-2 py-1"
              {...register("eventDate")}
            />
          )}
          name="eventDate"
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

export default TournamentsForm;
