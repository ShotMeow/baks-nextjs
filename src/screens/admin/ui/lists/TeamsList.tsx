import { FC, useState } from "react";
import { useGetTeams } from "@/src/entities/teams";
import Team from "../units/Team";
import SearchInput from "@/src/shared/ui/SearchInput";
import { useDebounce } from "@/src/shared/hooks/useDebounce";

const TagsList: FC = () => {
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce(search, 500);

  const { data: teams } = useGetTeams({
    search: debounceSearch,
  });

  return (
    <ul className="flex flex-col gap-6">
      <SearchInput
        value={search}
        setValue={setSearch}
        placeholder="Найти команды"
      />
      {teams?.map((team) => <Team team={team} key={team.id} />)}
    </ul>
  );
};

export default TagsList;
