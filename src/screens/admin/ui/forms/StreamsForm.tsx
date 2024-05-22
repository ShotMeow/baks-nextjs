import {
  type Dispatch,
  type FC,
  type FormEvent,
  type SetStateAction,
  useState,
} from "react";
import { DialogTitle, Field, Input, Label, Textarea } from "@headlessui/react";

import Button from "@/src/shared/ui/Button";
import {
  type CreateStreamType,
  type StreamType,
  useCreateStream,
  useUpdateStream,
} from "@/src/entities/streams";

interface Props {
  stream?: StreamType;
  onClose: Dispatch<SetStateAction<boolean>>;
  type: "create" | "edit";
}

const StreamsForm: FC<Props> = ({ onClose, stream, type }) => {
  const { mutate: createStreamMutation } = useCreateStream();
  const { mutate: updateStreamMutation } = useUpdateStream();

  const [formState, setFormState] = useState<CreateStreamType>({
    title: stream?.title ?? "",
    description: stream?.description ?? "",
    channel: stream?.channel ?? "",
    posterUrl: stream?.posterUrl ?? "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    switch (type) {
      case "create":
        createStreamMutation({ ...formState });
        break;
      case "edit":
        stream && updateStreamMutation({ id: stream.id, ...formState });
        break;
    }

    onClose(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <DialogTitle className="text-xl font-bold">
        {type === "create" ? "Новая трансляция" : "Редактировать трансляцию"}
      </DialogTitle>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Название</Label>
        <Input
          value={formState.title}
          onChange={(event) =>
            setFormState({ ...formState, title: event.target.value })
          }
          className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Описание</Label>
        <Textarea
          value={formState.description}
          onChange={(event) =>
            setFormState({ ...formState, description: event.target.value })
          }
          className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Twitch-канал</Label>
        <Input
          value={formState.channel}
          onChange={(event) =>
            setFormState({ ...formState, channel: event.target.value })
          }
          className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">
          Ссылка на постер
        </Label>
        <Input
          value={formState.posterUrl}
          onChange={(event) =>
            setFormState({ ...formState, posterUrl: event.target.value })
          }
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

export default StreamsForm;
