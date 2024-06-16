"use client";
import { FC, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";
import { Spin } from "@gravity-ui/uikit";

import { useGetProducts } from "@/src/entities/products";
import { API_URL } from "@/src/shared/constants";
import { Pagination } from "@/src/widgets/pagination";
import { useQueryParams } from "@/src/shared/hooks/useQueryParams";
import { useDebounce } from "@/src/shared/hooks/useDebounce";
import { PageHeader } from "@/src/widgets/filter";
import ListNotFound from "@/src/shared/ui/ListNotFound";

const Shop: FC = () => {
  const [search, setSearch] = useState<string>("");
  const { query } = useQueryParams();
  const debounceSearch = useDebounce(search, 500);

  const {
    data: products,
    isSuccess,
    isLoading,
  } = useGetProducts({
    ...query,
    search: debounceSearch,
  });

  return (
    <main className="container">
      <PageHeader
        title="Магазин"
        searchPlaceholder="Поиск товаров"
        search={search}
        setSearch={setSearch}
      />
      <div className="my-10 grid-cols-12 justify-items-center gap-6 space-y-4 md:grid md:space-y-0">
        {isSuccess &&
          products.data.length !== 0 &&
          products.data.map((product, index) => (
            <Link
              href={`/shop/${product.id}`}
              className={classNames(
                {
                  "col-span-full justify-self-stretch lg:row-start-1 lg:row-end-3 lg:col-span-6 lg:[&>img]:h-full":
                    index === 0 &&
                    (String(query.page || "") === "1" ||
                      String(query.page || "") === "") &&
                    !debounceSearch,
                  "col-start-1 col-end-7 lg:col-span-6 lg:row-start-1 lg:row-end-2 lg:[&>img]:h-72":
                    index === 1 &&
                    (String(query.page || "") === "1" ||
                      String(query.page || "") === "") &&
                    !debounceSearch,
                  "col-start-7 col-end-13 lg:col-span-6 lg:row-start-2 lg:row-end-3 lg:[&>img]:h-72":
                    index === 2 &&
                    (String(query.page || "") === "1" ||
                      String(query.page || "") === "") &&
                    !debounceSearch,
                },
                "group bg-white dark:bg-zinc-900 flex flex-col justify-between p-6 items-center gap-4 w-full col-span-4",
              )}
              key={product.id}
            >
              <Image
                src={`${API_URL}/images/${product.pictureUrl}`}
                width={400}
                height={350}
                alt={product.name}
                className="h-48 w-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <div className="flex w-full items-center justify-between gap-4">
                <p className="line-clamp-1 lg:text-xl">{product.name}</p>
                <p className="line-clamp-1 text-lg text-green dark:text-yellow">
                  {product.price} р
                </p>
              </div>
            </Link>
          ))}
        {isSuccess && products.data.length === 0 && (
          <ListNotFound className="col-span-full">
            Таких товаров нет
          </ListNotFound>
        )}
        {isLoading && (
          <div className="col-span-full row-span-full flex h-[60vh] items-center justify-center">
            <Spin size="xl" />
          </div>
        )}
      </div>
      {products && <Pagination pagination={products.pagination} />}
    </main>
  );
};

export default Shop;
