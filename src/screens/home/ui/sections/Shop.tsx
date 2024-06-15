"use client";
import type { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Spin } from "@gravity-ui/uikit";

import Button from "@/src/shared/ui/Button";
import { useGetProducts } from "@/src/entities/products";
import Subtitle from "@/src/shared/ui/Subtitle";
import { API_URL } from "@/src/shared/constants";

const Shop: FC = () => {
  const router = useRouter();
  const { data: products } = useGetProducts({
    take: 6,
  });

  return (
    <section className="container">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <Subtitle>Магазин</Subtitle>
        <Button onClick={() => router.push("/shop")} variant="more">
          Посмотреть все
        </Button>
      </div>
      <div className="my-10 grid-cols-12 justify-items-center gap-6 space-y-4 md:grid md:space-y-0 lg:grid-rows-6">
        {products ? (
          products?.map((product, index) => (
            <Link
              href={`/shop/${product.id}`}
              className={classNames(
                {
                  "col-span-full justify-self-stretch row-start-1 row-end-4 lg:row-span-full lg:col-span-5 lg:[&>img]:h-full":
                    index === 0,
                  "col-start-1 col-end-7 row-start-4 row-end-6 lg:col-start-6 lg:col-end-10 lg:row-start-1 lg:row-end-4 lg:[&>img]:h-60":
                    index === 1,
                  "col-start-7 col-end-13 row-start-4 row-end-6 lg:col-start-6 lg:col-end-10 lg:row-start-4 lg:row-end-7 lg:[&>img]:h-60":
                    index === 2,
                  "col-start-1 col-end-7 row-start-6 row-end-6 lg:col-start-10 lg:col-end-13 lg:row-start-1 lg:row-end-3 lg:[&>img]:h-40":
                    index === 3,
                  "col-start-7 col-end-13 row-start-6 row-end-6 lg:col-start-10 lg:col-end-13 lg:row-start-3 lg:row-end-5 lg:[&>img]:h-40":
                    index === 4,
                  "hidden lg:flex col-start-10 col-end-13 row-start-5 row-end-7 [&>img]:h-40":
                    index === 5,
                },
                "group bg-white dark:bg-white/5 flex flex-col justify-between p-6 items-center gap-4 w-full",
              )}
              key={product.id}
            >
              <Image
                src={`${API_URL}/images/${product.pictureUrl}`}
                width={400}
                height={350}
                alt={product.name}
                className={classNames(
                  {
                    "p-10 sm:p-20": index === 0,
                  },
                  "w-full object-contain group-hover:scale-110 transition-transform duration-500",
                )}
              />
              <div className="flex w-full items-center justify-between gap-10">
                <p className="line-clamp-1 lg:text-xl">{product.name}</p>
                <p className="text-lg text-green dark:text-yellow">
                  {product.price}р
                </p>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full row-span-full flex items-center justify-center">
            <Spin size="xl" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;
