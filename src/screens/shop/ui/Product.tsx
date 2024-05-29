"use client";
import type { FC } from "react";
import Image from "next/image";
import { useGetProductById } from "@/src/entities/products";
import Button from "@/src/shared/ui/Button";

interface Props {
  slug: string;
}

const Product: FC<Props> = ({ slug }) => {
  const { data: product } = useGetProductById(+slug);
  return (
    <main className="container">
      {product && (
        <div className="grid lg:grid-cols-2 lg:gap-10">
          <div className="bg-white/5 p-6">
            <Image
              src={product.pictureUrl}
              width={400}
              height={350}
              alt={product.name}
              className="h-96 w-full object-contain"
            />
          </div>
          <div className="flex h-full flex-col items-start justify-between gap-6 py-6">
            <p className="line-clamp-1 lg:text-3xl">{product.name}</p>
            <div className="flex items-center gap-6">
              <Button variant="primary">Купить</Button>
              <p className="text-xl text-yellow">{product.price} рублей</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Product;
