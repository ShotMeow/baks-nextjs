import {
  type Dispatch,
  type FC,
  type FormEvent,
  type SetStateAction,
  useState,
} from "react";
import { DialogTitle, Field, Input, Label } from "@headlessui/react";

import Button from "@/src/shared/ui/Button";
import { type TagType, useCreateTag, useUpdateTag } from "@/src/entities/tags";

interface Props {
  onClose: Dispatch<SetStateAction<boolean>>;
  tag?: TagType;
  type: "create" | "edit";
}

const TagsForm: FC<Props> = ({ onClose, tag, type }) => {
  const [name, setName] = useState<string>(tag?.name ?? "");
  const { mutate: createTagMutation } = useCreateTag();
  const { mutate: updateTagMutation } = useUpdateTag();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    switch (type) {
      case "create":
        createTagMutation({ name });
        break;
      case "edit":
        tag && updateTagMutation({ id: tag.id, name });
        break;
    }

    onClose(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <DialogTitle className="text-xl font-bold">
        {type === "create" ? "Добавить тег" : "Изменить тег"}
      </DialogTitle>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Название</Label>
        <Input
          name="name"
          className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          value={name}
          onChange={(event) => setName(event.target.value)}
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

export default TagsForm;
