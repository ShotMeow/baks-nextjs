import { FC, useState } from "react";
import Button from "@/src/shared/ui/Button";
import DeleteModal from "@/src/screens/admin/ui/modals/DeleteModal";
import FormModal from "@/src/screens/admin/ui/modals/FormModal";
import { ProductType } from "@/src/entities/products/types";
import { useDeleteProduct } from "@/src/entities/products";
import ProductsForm from "@/src/screens/admin/ui/forms/ProductsForm";

interface Props {
  product: ProductType;
}

const Product: FC<Props> = ({ product }) => {
  const [deleteModalShown, setDeleteModalShown] = useState<boolean>(false);
  const [updateModalShown, setUpdateModalShown] = useState<boolean>(false);

  const mutation = useDeleteProduct();

  const handleDelete = () => {
    mutation.mutate(product.id);
    setDeleteModalShown(false);
  };

  return (
    <>
      <li className="flex items-center justify-between">
        <span>
          {product.name} - {product.price} рублей
        </span>
        <div className="flex items-center gap-2">
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
          Вы точно хотите удалить товар &quot;{product.name}&quot;?
        </DeleteModal>
      )}
    </>
  );
};

export default Product;
