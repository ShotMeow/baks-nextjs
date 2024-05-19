import {
  type Dispatch,
  type FC,
  type FormEvent,
  type SetStateAction,
  useState,
} from "react";
import { DialogTitle, Field, Input, Label } from "@headlessui/react";
import MDEditor from "@uiw/react-md-editor";

import Button from "@/src/shared/ui/Button";
import {
  type CreateTeamType,
  type TeamType,
  useCreateTeam,
  useUpdateTeam,
} from "@/src/entities/teams";

interface Props {
  onClose: Dispatch<SetStateAction<boolean>>;
  team?: TeamType;
  type: "create" | "edit";
}

const TeamsForm: FC<Props> = ({ onClose, team, type }) => {
  const { mutate: createTeamMutation } = useCreateTeam();
  const { mutate: updateTeamMutation } = useUpdateTeam();

  const [formState, setFormState] = useState<CreateTeamType>({
    name: team?.name ?? "",
    body: team?.body ?? "",
    winsPercent: team?.winsPercent ?? 0,
    gamesCount: team?.gamesCount ?? 0,
    lastMatch: team?.lastMatch ?? new Date(),
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    switch (type) {
      case "create":
        createTeamMutation({ ...formState });
        break;
      case "edit":
        team && updateTeamMutation({ id: team.id, ...formState });
        break;
    }

    onClose(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <DialogTitle className="text-xl font-bold">Новая команда</DialogTitle>
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
        <MDEditor
          value={formState.body}
          onChange={(value) =>
            setFormState({ ...formState, body: value ?? "" })
          }
        />
      </Field>
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
          Последний матч
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
