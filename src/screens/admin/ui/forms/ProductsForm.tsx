import {
  type Dispatch,
  type FC,
  type FormEvent,
  type SetStateAction,
  useState,
} from "react";
import { DialogTitle, Field, Input, Label } from "@headlessui/react";

import Button from "@/src/shared/ui/Button";
import {
  type CreateProductType,
  type ProductType,
  useCreateProduct,
  useUpdateProduct,
} from "@/src/entities/products";

interface Props {
  onClose: Dispatch<SetStateAction<boolean>>;
  product?: ProductType;
  type: "create" | "edit";
}

const ProductsForm: FC<Props> = ({ onClose, product, type }) => {
  const { mutate: createProductMutation } = useCreateProduct();
  const { mutate: updateProductMutation } = useUpdateProduct();
  const [formState, setFormState] = useState<CreateProductType>({
    name: product?.name ?? "",
    price: product?.price ?? 0,
    pictureUrl: product?.pictureUrl ?? "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    switch (type) {
      case "create":
        createProductMutation({ ...formState });
        break;
      case "edit":
        product && updateProductMutation({ id: product.id, ...formState });
        break;
    }

    onClose(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <DialogTitle className="text-xl font-bold">
        {type === "create" ? "Добавить товар" : "Редактировать товар"}
      </DialogTitle>
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
        <Label className="text-sm/6 font-medium text-white">Цена</Label>
        <Input
          value={formState.price}
          onChange={(event) =>
            setFormState({ ...formState, price: +event.target.value })
          }
          type="number"
          className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">
          Ссылка на изображение
        </Label>
        <Input
          value={formState.pictureUrl}
          onChange={(event) =>
            setFormState({ ...formState, pictureUrl: event.target.value })
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

export default ProductsForm;
