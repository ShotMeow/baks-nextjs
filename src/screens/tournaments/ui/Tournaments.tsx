"use client";
import type { FC } from "react";
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";
import Button from "@/src/shared/ui/Button";
import {
  TournamentLarge,
  TournamentSmall,
  useGetTournaments,
} from "@/src/entities/tournaments";
import Star from "@/src/shared/ui/icons/Star";
import { Spin } from "@gravity-ui/uikit";
import { API_URL } from "@/src/shared/constants";

const Tournaments: FC = () => {
  const { data: tournaments } = useGetTournaments();

  return (
    <main className="container">
      <div className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
        {tournaments ? (
          tournaments.map((tournament, index) =>
            index === 0 ? (
              <TournamentLarge tournament={tournament} key={tournament.id} />
            ) : (
              <TournamentSmall tournament={tournament} key={tournament.id} />
            ),
          )
        ) : (
          <div className="col-span-full row-span-full flex h-screen items-center justify-center">
            <Spin size="xl" />
          </div>
        )}
      </div>
    </main>
  );
};

export default Tournaments;
