import { type FC, type PropsWithChildren, useState } from "react";
import { useGetProducts } from "@/src/entities/products";
import Product from "../units/Product";
import SearchInput from "@/src/shared/ui/SearchInput";
import { useDebounce } from "@/src/shared/hooks/useDebounce";
import { useQueryParams } from "@/src/shared/hooks/useQueryParams";
import { Pagination } from "@/src/widgets/pagination";

const TagsList: FC<PropsWithChildren> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const { query } = useQueryParams();
  const debounceSearch = useDebounce(search, 500);

  const { data: products } = useGetProducts({
    ...query,
    take: 10,
    search: debounceSearch,
  });

  return (
    <ul className="flex flex-col gap-6">
      <SearchInput
        value={search}
        setValue={setSearch}
        placeholder="Найти товары"
      />
      {children}
      {products?.data.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {products && <Pagination pagination={products.pagination} />}
    </ul>
  );
};

export default TagsList;
