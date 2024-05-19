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
  Transition,
} from "@headlessui/react";
import MDEditor from "@uiw/react-md-editor";

import Button from "@/src/shared/ui/Button";
import { useGetTags } from "@/src/entities/tags";
import { NewsType, useCreateNews, useUpdateNews } from "@/src/entities/news";

interface Props {
  onClose: Dispatch<SetStateAction<boolean>>;
  news?: NewsType;
  type: "create" | "edit";
}

const NewsForm: FC<Props> = ({ onClose, news, type }) => {
  const [formState, setFormState] = useState<
    Omit<NewsType, "id" | "createdAt">
  >({
    title: news?.title ?? "",
    artworkUrl: news?.artworkUrl ?? "",
    description: news?.description ?? "",
    body: news?.body ?? "",
    tags: news?.tags ?? [],
  });

  const { data: tagsData } = useGetTags();
  const { mutate: createNewsMutation } = useCreateNews();
  const { mutate: updateNewsMutation } = useUpdateNews();

  const [query, setQuery] = useState("");
  const filteredTags =
    tagsData &&
    (query === ""
      ? tagsData
      : tagsData?.filter((tag) => {
          return tag.name.toLowerCase().includes(query.toLowerCase());
        }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    switch (type) {
      case "create":
        createNewsMutation({
          title: formState.title,
          description: formState.description,
          body: formState.body,
          artworkUrl: formState.artworkUrl,
          tags: formState.tags.map((tag) => tag.id),
        });
        break;
      case "edit":
        news &&
          updateNewsMutation({
            id: news.id,
            title: formState.title,
            description: formState.description,
            body: formState.body,
            artworkUrl: formState.artworkUrl,
            tags: formState.tags.map((tag) => tag.id),
          });
        break;
    }

    onClose(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <DialogTitle className="text-xl font-bold">Новый пост</DialogTitle>
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
        <Input className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25" />
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
      <Combobox
        multiple
        value={formState.tags}
        onChange={(value) => setFormState({ ...formState, tags: value })}
      >
        <label className="text-sm/6 font-medium text-white">Теги</label>
        <div className="relative">
          {tagsData && tagsData.length > 0 && formState.tags && (
            <ul className="mb-4 flex h-8 items-center gap-2">
              {formState.tags.map((tag) => (
                <li key={tag.id}>{tag.name}</li>
              ))}
            </ul>
          )}
          <ComboboxInput
            className="w-full rounded-lg border-none bg-white/5 py-1.5 pl-3 pr-8 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <ComboboxOptions
            anchor="bottom"
            className="z-50 w-[var(--input-width)] rounded-xl border border-white/5 bg-black p-1 [--anchor-gap:var(--spacing-1)] empty:hidden"
          >
            {filteredTags?.map((tag) => (
              <ComboboxOption
                key={tag.id}
                value={tag}
                className="group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10 data-[selected]:bg-white/10"
              >
                <div className="text-sm/6 text-white">{tag.name}</div>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Transition>
      </Combobox>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Тело поста</Label>
        <MDEditor
          value={formState.body}
          onChange={(value) =>
            setFormState({ ...formState, body: value as string })
          }
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

export default NewsForm;
