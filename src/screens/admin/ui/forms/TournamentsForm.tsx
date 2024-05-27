import {
  type Dispatch,
  type FC,
  type FormEvent,
  type SetStateAction,
  useState,
} from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  DialogTitle,
  Field,
  Input,
  Label,
  Select,
  Transition,
} from "@headlessui/react";
import Button from "@/src/shared/ui/Button";

import {
  type TournamentType,
  useCreateTournament,
  useUpdateTournament,
} from "@/src/entities/tournaments";
import { useGetTeams } from "@/src/entities/teams";

interface Props {
  onClose: Dispatch<SetStateAction<boolean>>;
  tournament?: TournamentType;
  type: "create" | "edit";
}

const TournamentsForm: FC<Props> = ({ onClose, tournament, type }) => {
  const { mutate: createTournamentMutation } = useCreateTournament();
  const { mutate: updateTournamentMutation } = useUpdateTournament();
  const { data: teams } = useGetTeams();
  const [formState, setFormState] = useState<
    Omit<TournamentType, "id" | "createdAt">
  >({
    name: tournament?.name ?? "",
    description: tournament?.description ?? "",
    prize: tournament?.prize ?? 0,
    mode: tournament?.mode ?? "",
    type: tournament?.type ?? "",
    teams: tournament?.teams ?? [],
    artworkUrl: tournament?.artworkUrl ?? "",
    address: tournament?.address ?? "",
    eventDate: tournament?.eventDate ?? new Date(),
  });

  const [queryTeams, setQueryTeams] = useState("");
  const filteredTeams =
    teams &&
    (queryTeams === ""
      ? teams
      : teams?.filter((team) => {
          return team.name.toLowerCase().includes(queryTeams.toLowerCase());
        }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    switch (type) {
      case "create":
        createTournamentMutation({
          ...formState,
          teams: formState.teams.map((team) => team.id),
        });
        break;
      case "edit":
        tournament &&
          updateTournamentMutation({
            id: tournament.id,
            ...formState,
            teams: formState.teams.map((team) => team.id),
          });
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
          className="mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 [&>option]:bg-black"
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
      <Combobox
        multiple
        value={formState.teams}
        onChange={(value) => setFormState({ ...formState, teams: value })}
      >
        <label className="text-sm/6 font-medium text-white">Команды</label>
        <div className="relative">
          {teams && teams.length > 0 && formState.teams && (
            <ul className="mb-4 flex h-8 items-center gap-2">
              {formState.teams.map((team) => (
                <li key={team.id}>{team.name}</li>
              ))}
            </ul>
          )}
          <ComboboxInput
            className="w-full rounded-lg border-none bg-white/5 py-1.5 pl-3 pr-8 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            onChange={(event) => setQueryTeams(event.target.value)}
          />
        </div>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQueryTeams("")}
        >
          <ComboboxOptions
            anchor="bottom"
            className="z-50 w-[var(--input-width)] rounded-xl border border-white/5 bg-black p-1 [--anchor-gap:var(--spacing-1)] empty:hidden"
          >
            {filteredTeams?.map((team) => (
              <ComboboxOption
                key={team.id}
                value={team}
                className="group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10 data-[selected]:bg-white/10"
              >
                <div className="text-sm/6 text-white">{team.name}</div>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Transition>
      </Combobox>
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
