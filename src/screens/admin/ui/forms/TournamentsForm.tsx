import {
  type Dispatch,
  type FC,
  type FormEvent,
  type SetStateAction,
  useState,
} from "react";
import { DialogTitle, Field, Input, Label, Select } from "@headlessui/react";
import Button from "@/src/shared/ui/Button";

import {
  type CreateTournamentType,
  type TournamentType,
  useCreateTournament,
  useUpdateTournament,
} from "@/src/entities/tournaments";

interface Props {
  onClose: Dispatch<SetStateAction<boolean>>;
  tournament?: TournamentType;
  type: "create" | "edit";
}

const TournamentsForm: FC<Props> = ({ onClose, tournament, type }) => {
  const { mutate: createTournamentMutation } = useCreateTournament();
  const { mutate: updateTournamentMutation } = useUpdateTournament();

  const [formState, setFormState] = useState<CreateTournamentType>({
    name: tournament?.name ?? "",
    description: tournament?.description ?? "",
    prize: tournament?.prize ?? 0,
    mode: tournament?.mode ?? "",
    type: tournament?.type ?? "",
    artworkUrl: tournament?.artworkUrl ?? "",
    address: tournament?.address ?? "",
    eventDate: tournament?.eventDate ?? new Date(),
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    switch (type) {
      case "create":
        createTournamentMutation({ ...formState });
        break;
      case "edit":
        tournament &&
          updateTournamentMutation({ id: tournament.id, ...formState });
        break;
    }

    onClose(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <DialogTitle className="text-xl font-bold">Новый турнир</DialogTitle>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Название</Label>
        <Input
          value={formState.name}
          onChange={(event) =>
            setFormState({ ...formState, name: event.target.value })
          }
          className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Описание</Label>
        <Input
          value={formState.description}
          onChange={(event) =>
            setFormState({ ...formState, description: event.target.value })
          }
          className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">
          Ссылка на изображение
        </Label>
        <Input
          value={formState.artworkUrl}
          onChange={(event) =>
            setFormState({ ...formState, artworkUrl: event.target.value })
          }
          className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Приз</Label>
        <Input
          value={formState.prize}
          onChange={(event) =>
            setFormState({ ...formState, prize: +event.target.value })
          }
          type="number"
          className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Режим игры</Label>
        <Select
          value={formState.mode}
          onChange={(event) =>
            setFormState({ ...formState, mode: event.target.value })
          }
          className="mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        >
          <option value="1x1">1x1</option>
          <option value="2x2">2x2</option>
          <option value="5x5">5x5</option>
        </Select>
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Тип игры</Label>
        <Select
          value={formState.type}
          onChange={(event) =>
            setFormState({ ...formState, type: event.target.value })
          }
          className="mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        >
          <option value="opened">Открытый</option>
          <option value="closed">Закрытый</option>
        </Select>
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">
          Адрес проведения
        </Label>
        <Input
          value={formState.address}
          onChange={(event) =>
            setFormState({ ...formState, address: event.target.value })
          }
          className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">
          Дата проведения
        </Label>
        <Input
          onChange={(event) =>
            setFormState({
              ...formState,
              eventDate: new Date(event.target.value),
            })
          }
          type="date"
          className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        />
      </Field>
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
