import { type FC, PropsWithChildren, useState } from "react";
import SearchInput from "@/src/shared/ui/SearchInput";
import { useDebounce } from "@/src/shared/hooks/useDebounce";

import Player from "../units/Player";
import { useGetUsers } from "@/src/entities/users";

const PlayersList: FC<PropsWithChildren> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce(search, 500);

  const { data: players } = useGetUsers({
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
      {players?.map((player) => <Player player={player} key={player.id} />)}
    </ul>
  );
};

export default PlayersList;
