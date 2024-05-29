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
  Field,
  Input,
  Label,
  Transition,
} from "@headlessui/react";
import MDEditor from "@uiw/react-md-editor";

import Button from "@/src/shared/ui/Button";
import {
  type TeamType,
  useCreateTeam,
  useUpdateTeam,
} from "@/src/entities/teams";
import { useGetUsers } from "@/src/entities/users";
import { useGetTournaments } from "@/src/entities/tournaments";

interface Props {
  onClose: Dispatch<SetStateAction<boolean>>;
  team?: TeamType;
  type: "create" | "edit";
}

const TeamsForm: FC<Props> = ({ onClose, team, type }) => {
  const { mutate: createTeamMutation } = useCreateTeam();
  const { mutate: updateTeamMutation } = useUpdateTeam();
  const { data: players } = useGetUsers();
  const { data: tournaments } = useGetTournaments();

  const [formState, setFormState] = useState<
    Omit<TeamType, "id" | "createdAt">
  >({
    name: team?.name ?? "",
    body: team?.body ?? "",
    players: team?.players ?? [],
    winsPercent: team?.winsPercent ?? 0,
    gamesCount: team?.gamesCount ?? 0,
    logoUrl: team?.logoUrl ?? "",
    lastMatch: team?.lastMatch ?? new Date(),
    tournaments: team?.tournaments ?? [],
  });

  const [queryPlayers, setQueryPlayers] = useState("");
  const [queryTournaments, setQueryTournaments] = useState("");
  const filteredPlayers =
    players &&
    (queryPlayers === ""
      ? players
      : players?.filter((player) => {
          return player.nickname
            .toLowerCase()
            .includes(queryPlayers.toLowerCase());
        }));
  const filteredTournaments =
    tournaments &&
    (queryTournaments === ""
      ? tournaments
      : tournaments?.filter((tournament) => {
          return tournament.name
            .toLowerCase()
            .includes(queryTournaments.toLowerCase());
        }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    switch (type) {
      case "create":
        createTeamMutation({
          ...formState,
          tournaments: formState.tournaments.map((tournament) => tournament.id),
          players: formState.players.map((player) => player.id),
        });
        break;
      case "edit":
        team &&
          updateTeamMutation({
            id: team.id,
            ...formState,
            tournaments: formState.tournaments.map(
              (tournament) => tournament.id,
            ),
            players: formState.players.map((player) => player.id),
          });
        break;
    }

    onClose(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h4 className="text-xl font-bold">
        {type === "create"
          ? "Новая команда"
          : `Редактировать команду ${team?.name}`}
      </h4>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Название</Label>
        <Input
          required
          value={formState.name}
          onChange={(event) =>
            setFormState({ ...formState, name: event.target.value })
          }
          className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Описание</Label>
        <MDEditor
          value={formState.body}
          onChange={(value) =>
            setFormState({ ...formState, body: value ?? "" })
          }
        />
      </Field>
      <Combobox
        multiple
        value={formState.players}
        onChange={(value) => setFormState({ ...formState, players: value })}
      >
        <label className="text-sm/6 font-medium text-white">Игроки</label>
        <div className="relative">
          {players && players.length > 0 && formState.players && (
            <ul className="mb-4 flex h-8 items-center gap-2">
              {formState.players.map((player) => (
                <li key={player.id}>{player.nickname}</li>
              ))}
            </ul>
          )}
          <ComboboxInput
            className="w-full rounded-lg border-none bg-white/5 py-1.5 pl-3 pr-8 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            onChange={(event) => setQueryPlayers(event.target.value)}
          />
        </div>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQueryPlayers("")}
        >
          <ComboboxOptions
            anchor="bottom"
            className="z-50 w-[var(--input-width)] rounded-xl border border-white/5 bg-black p-1 [--anchor-gap:var(--spacing-1)] empty:hidden"
          >
            {filteredPlayers?.map((player) => (
              <ComboboxOption
                key={player.id}
                value={player}
                className="group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10 data-[selected]:bg-white/10"
              >
                <div className="text-sm/6 text-white">{player.nickname}</div>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Transition>
      </Combobox>
      <Combobox
        multiple
        value={formState.tournaments}
        onChange={(value) => setFormState({ ...formState, tournaments: value })}
      >
        <label className="text-sm/6 font-medium text-white">Турниры</label>
        <div className="relative">
          {tournaments && tournaments.length > 0 && formState.tournaments && (
            <ul className="mb-4 flex h-8 items-center gap-2">
              {formState.tournaments.map((tournament) => (
                <li key={tournament.id}>{tournament.name}</li>
              ))}
            </ul>
          )}
          <ComboboxInput
            className="w-full rounded-lg border-none bg-white/5 py-1.5 pl-3 pr-8 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            onChange={(event) => setQueryTournaments(event.target.value)}
          />
        </div>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQueryTournaments("")}
        >
          <ComboboxOptions
            anchor="bottom"
            className="z-50 w-[var(--input-width)] rounded-xl border border-white/5 bg-black p-1 [--anchor-gap:var(--spacing-1)] empty:hidden"
          >
            {filteredTournaments?.map((tournament) => (
              <ComboboxOption
                key={tournament.id}
                value={tournament}
                className="group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10 data-[selected]:bg-white/10"
              >
                <div className="text-sm/6 text-white">{tournament.name}</div>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Transition>
      </Combobox>
      <Field>
        <Label className="text-sm/6 font-medium text-white">
          Процент побед
        </Label>
        <Input
          value={formState.winsPercent}
          onChange={(event) =>
            setFormState({ ...formState, winsPercent: +event.target.value })
          }
          type="number"
          className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">
          Количество игр
        </Label>
        <Input
          value={formState.gamesCount}
          onChange={(event) =>
            setFormState({ ...formState, gamesCount: +event.target.value })
          }
          type="number"
          className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">
          Ссылка на логотип
        </Label>
        <Input
          value={formState.logoUrl}
          onChange={(event) =>
            setFormState({ ...formState, logoUrl: event.target.value })
          }
          className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">
          Дата последнего матча
        </Label>
        <Input
          onChange={(event) =>
            setFormState({
              ...formState,
              lastMatch: new Date(event.target.value),
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

export default TeamsForm;
