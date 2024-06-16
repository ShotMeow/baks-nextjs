import { type FC, useState } from "react";
import Button from "@/src/shared/ui/Button";
import { useDeleteProduct, type ProductType } from "@/src/entities/products";

import DeleteModal from "../modals/DeleteModal";
import FormModal from "../modals/FormModal";
import ProductsForm from "../forms/ProductsForm";
import { useNotificationCall } from "../../hooks/useNotificationCall";

interface Props {
  product: ProductType;
}

const Product: FC<Props> = ({ product }) => {
  const [deleteModalShown, setDeleteModalShown] = useState<boolean>(false);
  const [updateModalShown, setUpdateModalShown] = useState<boolean>(false);

  const {
    mutate: deleteProduct,
    isSuccess: isDeleteSuccess,
    isError: isDeleteError,
  } = useDeleteProduct();

  const handleDelete = () => {
    deleteProduct(product.id);
  };

  useNotificationCall({
    isDeleteSuccess,
    isDeleteError,
    onClose: () => setDeleteModalShown(false),
    deleteText: ["Продукт успешно удален", "Ошибка при удалении продукта"],
  });

  return (
    <>
      <li className="flex flex-wrap items-center justify-between gap-6">
        <span>{product.name}</span>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            onClick={() => setUpdateModalShown(true)}
            variant="transparent"
          >
            Изменить
          </Button>
          <Button onClick={() => setDeleteModalShown(true)} variant="primary">
            Удалить
          </Button>
        </div>
      </li>
      {updateModalShown && (
        <FormModal
          open={updateModalShown}
          activeTab="products"
          onClose={setUpdateModalShown}
        >
          <ProductsForm
            product={product}
            onClose={setUpdateModalShown}
            type="edit"
          />
        </FormModal>
      )}
      {deleteModalShown && (
        <DeleteModal
          open={deleteModalShown}
          onClose={setDeleteModalShown}
          action={handleDelete}
        >
          Вы точно хотите удалить товар <br />
          &quot;
          <span className="font-bold">{product.name}</span>&quot;?
        </DeleteModal>
      )}
    </>
  );
};

export default Product;
