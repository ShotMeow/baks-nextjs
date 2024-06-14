"use client";
import type { FC } from "react";
import Image from "next/image";

import { useGetProductById } from "@/src/entities/products";
import Button from "@/src/shared/ui/Button";
import { API_URL } from "@/src/shared/constants";
import { useRouter } from "next/navigation";

interface Props {
  slug: string;
}

const Product: FC<Props> = ({ slug }) => {
  const router = useRouter();

  const { data: product } = useGetProductById(+slug);

  return (
    <main className="container">
      {product && (
        <div className="grid lg:grid-cols-2 lg:gap-10">
          <div className="bg-white p-6 dark:bg-white/5">
            <Image
              src={`${API_URL}/images/${product.pictureUrl}`}
              width={400}
              height={350}
              alt={product.name}
              className="h-96 w-full object-contain"
            />
          </div>
          <div className="flex h-full flex-col items-start justify-between gap-6 py-6">
            <div className="space-y-4">
              <h4 className="line-clamp-1 text-xl lg:text-3xl">
                {product.name}
              </h4>
              <p className="line-clamp-6 text-zinc-400">
                {product.description}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <Button
                onClick={() => router.push("https://www.shopify.com/")}
                variant="primary"
              >
                Купить
              </Button>
              <p className="text-xl text-green dark:text-yellow">
                {product.price} рублей
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Product;
