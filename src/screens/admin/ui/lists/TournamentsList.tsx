import { FC, useState } from "react";
import { useGetTournaments } from "@/src/entities/tournaments";
import Tournament from "../units/Tournament";
import SearchInput from "@/src/shared/ui/SearchInput";
import { useDebounce } from "@/src/shared/hooks/useDebounce";

const TagsList: FC = () => {
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce(search, 500);

  const { data: tournaments } = useGetTournaments({
    search: debounceSearch,
  });

  return (
    <ul className="flex flex-col gap-6">
      <SearchInput
        value={search}
        setValue={setSearch}
        placeholder="Найти турниры"
      />
      {tournaments?.map((tournament) => (
        <Tournament tournament={tournament} key={tournament.id} />
      ))}
    </ul>
  );
};

export default TagsList;
