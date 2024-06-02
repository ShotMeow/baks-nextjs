"use client";
import type { FC } from "react";
import Image from "next/image";
import { Spin } from "@gravity-ui/uikit";
import { useRouter } from "next/navigation";

import { useGetTeams } from "@/src/entities/teams";
import Button from "@/src/shared/ui/Button";

const Teams: FC = () => {
  const router = useRouter();
  const { data: teams } = useGetTeams();

  return (
    <main className="container grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {teams ? (
        teams.map((team) => (
          <article
            className="flex flex-col justify-between bg-white/5 p-4"
            key={team.id}
          >
            <div className="mb-4 flex gap-4">
              {team?.logoUrl && (
                <div className="flex items-center justify-center bg-white/5 p-4">
                  <Image
                    src={team.logoUrl}
                    alt={team.name}
                    width={48}
                    height={48}
                  />
                </div>
              )}
              <div>
                <h4 className="text-xl">{team.name}</h4>
                <ul className="mt-4 space-y-2">
                  {team.players.map((player) => (
                    <li key={player.id}>{player.nickname}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Button
              onClick={() => router.push(`/teams/${team.id}`)}
              variant="more"
            >
              Подробнее
            </Button>
          </article>
        ))
      ) : (
        <div className="col-span-full row-span-full flex h-screen items-center justify-center">
          <Spin size="xl" />
        </div>
      )}
    </main>
  );
};

export default Teams;
