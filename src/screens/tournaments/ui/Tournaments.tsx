"use client";
import { type FC, useState } from "react";
import {
  TournamentLarge,
  TournamentSmall,
  useGetTournaments,
} from "@/src/entities/tournaments";
import { Spin } from "@gravity-ui/uikit";
import { useDebounce } from "@/src/shared/hooks/useDebounce";
import { PageHeader } from "@/src/widgets/filter";
import { useQueryParams } from "@/src/shared/hooks/useQueryParams";
import { Pagination } from "@/src/widgets/pagination";

const Tournaments: FC = () => {
  const [search, setSearch] = useState<string>("");
  const { query } = useQueryParams();
  const debounceSearch = useDebounce(search, 500);

  const {
    data: tournaments,
    isSuccess,
    isLoading,
  } = useGetTournaments({ ...query, search: debounceSearch });

  return (
    <main className="container">
      <PageHeader
        title="Турниры"
        searchPlaceholder="Поиск турниров"
        search={search}
        setSearch={setSearch}
        withSort
        withTags
      />
      <div className="grid gap-6 sm:grid-cols-2 2xl:grid-cols-3">
        {isSuccess &&
          tournaments.data?.map((tournament, index) =>
            index === 0 &&
            !debounceSearch &&
            (String(query.page || "") === "1" ||
              String(query.page || "") === "") ? (
              <TournamentLarge tournament={tournament} key={tournament.id} />
            ) : (
              <TournamentSmall tournament={tournament} key={tournament.id} />
            ),
          )}
        {isLoading && (
          <div className="col-span-full row-span-full flex h-[10vh] items-center justify-center">
            <Spin size="xl" />
          </div>
        )}
      </div>
      {tournaments && <Pagination pagination={tournaments.pagination} />}
    </main>
  );
};

export default Tournaments;
