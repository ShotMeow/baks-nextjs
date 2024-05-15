import type { FC } from "react";
import { DialogTitle, Field, Input, Label, Select } from "@headlessui/react";

const TournamentsForm: FC = () => {
  return (
    <>
      <DialogTitle className="text-xl font-bold">Новый турнир</DialogTitle>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Название</Label>
        <Input className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25" />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Описание</Label>
        <Input className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25" />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">
          Ссылка на изображение
        </Label>
        <Input className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25" />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Приз</Label>
        <Input
          type="number"
          className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Режим игры</Label>
        <Select className="mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25">
          <option value="1x1">1x1</option>
          <option value="2x2">2x2</option>
          <option value="5x5">5x5</option>
        </Select>
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Тип игры</Label>
        <Select className="mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25">
          <option value="opened">Открытый</option>
          <option value="closed">Закрытый</option>
        </Select>
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">
          Адрес проведения
        </Label>
        <Input className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25" />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">
          Дата проведения
        </Label>
        <Input className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25" />
      </Field>
    </>
  );
};

export default TournamentsForm;
