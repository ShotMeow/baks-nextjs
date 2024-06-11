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

const Tournaments: FC = () => {
  const [tag, setTag] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce(search, 500);
  const {
    data: tournaments,
    isSuccess,
    isLoading,
  } = useGetTournaments({
    search: debounceSearch,
    tag,
    sort,
  });

  return (
    <main className="container">
      <PageHeader
        title="Турниры"
        searchPlaceholder="Поиск турниров"
        search={search}
        setSearch={setSearch}
        tag={tag}
        setTag={setTag}
        sort={sort}
        setSort={setSort}
      />
      <div className="grid gap-6 sm:grid-cols-2 2xl:grid-cols-3">
        {isSuccess &&
          tournaments.map((tournament, index) =>
            index === 0 && !debounceSearch ? (
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
    </main>
  );
};

export default Tournaments;
