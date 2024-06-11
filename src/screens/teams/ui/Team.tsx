"use client";
import type { FC } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

import { PlayerCard, useGetTeamById } from "@/src/entities/teams";

import { API_URL } from "@/src/shared/constants";

interface Props {
  slug: string;
}

const Team: FC<Props> = ({ slug }) => {
  const { data: team } = useGetTeamById(+slug);

  return (
    <main>
      {team && (
        <article>
          <header className="bg-white/10">
            <div className="container flex flex-wrap items-center justify-between gap-4 py-3">
              <div className="flex items-center gap-4">
                {team.logoUrl && (
                  <div className="bg-white/5 p-2">
                    <Image
                      src={`${API_URL}/images/${team.logoUrl}`}
                      alt={team.name}
                      width={48}
                      height={48}
                    />
                  </div>
                )}
                <h4 className="text-2xl">{team.name}</h4>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {team.winsPercent ? (
                  <p className="bg-white/5 p-2">
                    Процент побед | {team.winsPercent}%
                  </p>
                ) : (
                  ""
                )}
                {team.gamesCount ? (
                  <p className="bg-white/5 p-2">
                    Количество игр | {team.gamesCount}
                  </p>
                ) : (
                  ""
                )}
                {team.lastMatch && (
                  <p className="bg-white/5 p-2">
                    Последний матч |{" "}
                    {new Date(team.lastMatch).toLocaleDateString("ru", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                )}
              </div>
            </div>
          </header>
          <div className="container">
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {team.players.map((player) => (
                <PlayerCard player={player} key={player.id} />
              ))}
            </div>
            <div className="prose prose-zinc prose-invert my-6 max-w-none">
              <ReactMarkdown>{team.body}</ReactMarkdown>
            </div>
          </div>
        </article>
      )}
    </main>
  );
};

export default Team;
