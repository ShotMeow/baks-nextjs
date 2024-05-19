import type { FC } from "react";
import { useGetProducts } from "@/src/entities/products";
import Product from "../units/Product";

const TagsList: FC = () => {
  const { data } = useGetProducts();
  return (
    <ul className="flex flex-col gap-6">
      {data?.map((product) => <Product product={product} key={product.id} />)}
    </ul>
  );
};

export default TagsList;
