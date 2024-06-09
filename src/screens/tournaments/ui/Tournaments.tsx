"use client";
import { type FC, useState } from "react";
import {
  TournamentLarge,
  TournamentSmall,
  useGetTournaments,
} from "@/src/entities/tournaments";
import { Spin } from "@gravity-ui/uikit";
import { useDebounce } from "@/src/shared/hooks/useDebounce";
import TournamentsHeader from "@/src/screens/tournaments/ui/TournamentsHeader";

const Tournaments: FC = () => {
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce(search, 500);
  const {
    data: tournaments,
    isSuccess,
    isLoading,
  } = useGetTournaments({
    searchQuery: debounceSearch,
  });

  return (
    <main className="container">
      <TournamentsHeader search={search} setSearch={setSearch} />
      <div className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
        {isSuccess &&
          tournaments.map((tournament, index) =>
            index === 0 ? (
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
