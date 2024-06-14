import { type Dispatch, type FC, type SetStateAction, useState } from "react";
import { TextArea, TextInput } from "@gravity-ui/uikit";
import Image from "next/image";
import Button from "@/src/shared/ui/Button";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";

import {
  type ProductType,
  type ProductFormType,
  useCreateProduct,
  useUpdateProduct,
} from "@/src/entities/products";
import { API_URL } from "@/src/shared/constants";

interface Props {
  onClose: Dispatch<SetStateAction<boolean>>;
  product?: ProductType;
  type: "create" | "edit";
}

const ProductsForm: FC<Props> = ({ onClose, product, type }) => {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<ProductFormType>({
    defaultValues: {
      name: product?.name,
      description: product?.description,
      price: product?.price,
    },
  });
  const [imageUrl, setImageUrl] = useState<string | null>(
    product?.pictureUrl ? `${API_URL}/images/${product?.pictureUrl}` : null,
  );

  const { mutate: createProductMutation } = useCreateProduct();
  const { mutate: updateProductMutation } = useUpdateProduct();

  const onSubmit: SubmitHandler<ProductFormType> = (data) => {
    switch (type) {
      case "create":
        createProductMutation(data);
        break;
      case "edit":
        product && updateProductMutation({ id: product.id, data });
        break;
    }

    onClose(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <h4 className="text-xl font-bold">
        {type === "create" ? "Добавить товар" : "Редактировать товар"}
      </h4>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium text-white">Название</span>
        <TextInput
          {...register("name", {
            required: "Название товара не может быть пустым",
          })}
          errorPlacement="inside"
          validationState={errors?.name && "invalid"}
          errorMessage={errors?.name?.message}
          view="clear"
          className="rounded-md bg-white/5 px-2 py-1"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium text-white">Описание</span>
        <TextArea
          {...register("description")}
          errorPlacement="inside"
          view="clear"
          className="rounded-md bg-white/5 px-2 py-1"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium text-white">Цена</span>
        <TextInput
          {...register("price", {
            valueAsNumber: true,
          })}
          type="number"
          view="clear"
          className="rounded-md bg-white/5 px-2 py-1"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium text-white">
          Изображение товара
        </span>
        <Controller
          render={({ field: { value, onChange, ...field } }) => (
            <input
              {...field}
              onChange={(event) => {
                const file = event.target.files?.[0] as File;
                onChange(file);
                setImageUrl(URL.createObjectURL(file));
              }}
              type="file"
              accept="image/*"
              className="rounded-md bg-white/5 px-2 py-1"
            />
          )}
          name="imageFile"
          control={control}
        />
        <div className="h-[270px] w-[480px]">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="Предпросмотр товара"
              width={480}
              height={270}
              className="size-full rounded-lg object-cover"
            />
          )}
        </div>
      </label>
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
