import type { FC } from "react";
import { DialogTitle, Field, Input, Label } from "@headlessui/react";

const StreamsForm: FC = () => {
  return (
    <>
      <DialogTitle className="text-xl font-bold">Новая трансляция</DialogTitle>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Название</Label>
        <Input className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25" />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">
          Ссылка на трансляцию
        </Label>
        <Input className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25" />
      </Field>
    </>
  );
};

export default StreamsForm;
