import { type FC, type PropsWithChildren, useState } from "react";
import SearchInput from "@/src/shared/ui/SearchInput";
import { useDebounce } from "@/src/shared/hooks/useDebounce";

import Player from "../units/Player";
import { useGetUsers } from "@/src/entities/users";
import { useQueryParams } from "@/src/shared/hooks/useQueryParams";
import { Pagination } from "@/src/widgets/pagination";

const PlayersList: FC<PropsWithChildren> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const { query } = useQueryParams();
  const debounceSearch = useDebounce(search, 500);

  const { data: players } = useGetUsers({
    ...query,
    take: 10,
    search: debounceSearch,
  });

  return (
    <ul className="flex flex-col gap-6">
      <SearchInput
        value={search}
        setValue={setSearch}
        placeholder="Найти игроков"
      />
      {children}
      {players?.data.map((player) => (
        <Player player={player} key={player.id} />
      ))}
      {players && <Pagination pagination={players.pagination} />}
    </ul>
  );
};

export default PlayersList;
