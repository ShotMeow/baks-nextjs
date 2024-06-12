"use client";
import { type FC, useState } from "react";
import { Spin } from "@gravity-ui/uikit";

import { useGetTeams } from "@/src/entities/teams";
import { PageHeader } from "@/src/widgets/filter";
import { useDebounce } from "@/src/shared/hooks/useDebounce";
import TeamCard from "@/src/entities/teams/ui/TeamCard";

const Teams: FC = () => {
  const [sort, setSort] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce(search, 500);
  const {
    data: teams,
    isSuccess,
    isLoading,
  } = useGetTeams({
    search: debounceSearch,
    sort,
  });

  return (
    <main className="container">
      <PageHeader
        title="Команды"
        searchPlaceholder="Поиск команд"
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isSuccess &&
          teams.map((team) => <TeamCard team={team} key={team.id} />)}
        {isLoading && (
          <div className="col-span-full row-span-full flex h-[10vh] items-center justify-center">
            <Spin size="xl" />
          </div>
        )}
      </div>
    </main>
  );
};

export default Teams;
