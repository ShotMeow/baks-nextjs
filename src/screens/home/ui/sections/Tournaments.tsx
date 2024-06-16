"use client";
import type { FC } from "react";
import { useRouter } from "next/navigation";
import { Spin } from "@gravity-ui/uikit";

import {
  TournamentLarge,
  TournamentSmall,
  useGetTournaments,
} from "@/src/entities/tournaments";
import Button from "@/src/shared/ui/Button";
import Subtitle from "@/src/shared/ui/Subtitle";

const Tournaments: FC = () => {
  const router = useRouter();
  const { data: tournaments } = useGetTournaments({
    take: 4,
  });

  return (
    <section className="container">
      <div className="my-10 flex flex-col items-center justify-between gap-8 sm:flex-row">
        <Subtitle>Турниры</Subtitle>
        <Button onClick={() => router.push("/tournaments")} variant="more">
          Посмотреть все
        </Button>
      </div>
      <div className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
        {tournaments ? (
          tournaments?.data.map((tournament, index) =>
            index === 0 ? (
              <TournamentLarge tournament={tournament} key={tournament.id} />
            ) : (
              <TournamentSmall tournament={tournament} key={tournament.id} />
            ),
          )
        ) : (
          <div className="col-span-full row-span-full flex items-center justify-center">
            <Spin size="xl" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Tournaments;
