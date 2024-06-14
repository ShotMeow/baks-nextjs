"use client";
import type { FC } from "react";
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";
import { Spin } from "@gravity-ui/uikit";

import { useGetProducts } from "@/src/entities/products";
import { API_URL } from "@/src/shared/constants";

const Shop: FC = () => {
  const { data: products } = useGetProducts({});
  return (
    <main className="container">
      <div className="my-10 grid-cols-12 justify-items-center gap-6 space-y-4 md:grid md:space-y-0">
        {products ? (
          products.map((product, index) => (
            <Link
              href={`/shop/${product.id}`}
              className={classNames(
                {
                  "col-span-full justify-self-stretch row-start-1 row-end-3 lg:col-span-6":
                    index === 0,
                  "col-start-1 col-end-7 lg:col-span-6 lg:row-start-1 lg:row-end-2":
                    index === 1,
                  "col-start-7 col-end-13 lg:col-span-6 lg:row-start-2 lg:row-end-3":
                    index === 2,
                },
                "group bg-white dark:bg-white/5 flex flex-col justify-between p-6 items-center gap-4 w-full col-span-4",
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
                    "p-10 sm:p-20 h-auto": index === 0,
                  },
                  "w-full h-72 object-contain group-hover:scale-110 transition-transform duration-500",
                )}
              />
              <div className="flex w-full items-center justify-between gap-10">
                <p className="line-clamp-1 lg:text-xl">{product.name}</p>
                <p className="text-lg text-yellow">{product.price}р</p>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full row-span-full flex h-[60vh] items-center justify-center">
            <Spin size="xl" />
          </div>
        )}
      </div>
    </main>
  );
};

export default Shop;
