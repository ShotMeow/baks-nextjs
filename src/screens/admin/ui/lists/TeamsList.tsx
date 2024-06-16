import { type FC, type PropsWithChildren, useState } from "react";
import { useGetTeams } from "@/src/entities/teams";
import Team from "../units/Team";
import SearchInput from "@/src/shared/ui/SearchInput";
import { useDebounce } from "@/src/shared/hooks/useDebounce";
import { useQueryParams } from "@/src/shared/hooks/useQueryParams";
import { Pagination } from "@/src/widgets/pagination";

const TagsList: FC<PropsWithChildren> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const { query } = useQueryParams();
  const debounceSearch = useDebounce(search, 500);

  const { data: teams } = useGetTeams({
    ...query,
    take: 10,
    search: debounceSearch,
  });

  return (
    <ul className="flex flex-col gap-6">
      <SearchInput
        value={search}
        setValue={setSearch}
        placeholder="Найти команды"
      />
      {children}
      {teams?.data?.map((team) => <Team team={team} key={team.id} />)}
      {teams && <Pagination pagination={teams.pagination} />}
    </ul>
  );
};

export default TagsList;
