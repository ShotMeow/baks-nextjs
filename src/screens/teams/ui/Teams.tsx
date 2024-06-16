"use client";
import { type FC, useState } from "react";
import { Spin } from "@gravity-ui/uikit";

import { useGetTeams } from "@/src/entities/teams";
import { PageHeader } from "@/src/widgets/filter";
import { useDebounce } from "@/src/shared/hooks/useDebounce";
import TeamCard from "@/src/entities/teams/ui/TeamCard";
import { useQueryParams } from "@/src/shared/hooks/useQueryParams";
import { Pagination } from "@/src/widgets/pagination";

const Teams: FC = () => {
  const [search, setSearch] = useState<string>("");
  const { query } = useQueryParams();
  const debounceSearch = useDebounce(search, 500);
  const {
    data: teams,
    isSuccess,
    isLoading,
  } = useGetTeams({ ...query, search: debounceSearch });

  return (
    <main className="container">
      <PageHeader
        title="Команды"
        searchPlaceholder="Поиск команд"
        search={search}
        setSearch={setSearch}
        withSort
      />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isSuccess &&
          teams.data.map((team) => <TeamCard team={team} key={team.id} />)}
        {isLoading && (
          <div className="col-span-full row-span-full flex h-[10vh] items-center justify-center">
            <Spin size="xl" />
          </div>
        )}
      </div>
      {teams && <Pagination pagination={teams.pagination} />}
    </main>
  );
};

export default Teams;
