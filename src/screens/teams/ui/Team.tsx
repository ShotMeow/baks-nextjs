"use client";
import type { FC } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

import { useGetTeamById } from "@/src/entities/teams";

import { getRoleIcon } from "../utils/getRoleIcon";
import { numberFloater } from "../utils/numberFloater";
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
                    {new Date(team.lastMatch.toDate()).toLocaleDateString(
                      "ru",
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      },
                    )}
                  </p>
                )}
              </div>
            </div>
          </header>
          <div className="container">
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {team.players.map((player) => (
                <div className="bg-white/10 p-2" key={player.id}>
                  <div className="relative h-48">
                    <div className="absolute left-1/2 flex h-full -translate-x-1/2 items-start sm:left-0 sm:translate-x-0 xl:left-12">
                      {player.pictureUrl && (
                        <Image
                          className="h-full w-auto object-contain"
                          src={`${API_URL}/images/${player.pictureUrl}`}
                          alt={player.nickname}
                          width={200}
                          height={220}
                        />
                      )}
                      <div className="mt-10">{getRoleIcon(player.role)}</div>
                    </div>
                  </div>
                  <p className="bg-white/5 p-4 text-lg backdrop-blur-md lg:text-xl">
                    {player.nickname} |{" "}
                    <span className="text-zinc-400">{player.name}</span>
                  </p>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-lg [&>p]:bg-white/5 [&>p]:p-2 [&>p]:text-center">
                    {player.killDeaths ? (
                      <p>KD | {numberFloater(player.killDeaths)}</p>
                    ) : (
                      ""
                    )}
                    {player.deaths ? (
                      <p>D | {numberFloater(player.deaths)}</p>
                    ) : (
                      ""
                    )}
                    {player.assists ? (
                      <p>A | {numberFloater(player.assists)}</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
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
