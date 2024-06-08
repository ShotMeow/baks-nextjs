"use client";
import { type FC, useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";

import Button from "@/src/shared/ui/Button";
import { getRoleIcon } from "@/src/screens/teams/utils/getRoleIcon";
import { numberFloater } from "@/src/screens/teams/utils/numberFloater";
import { API_URL } from "@/src/shared/constants";
import { useGetTournamentById } from "@/src/entities/tournaments";
import { TagChip } from "@/src/entities/tags";

interface Props {
  slug: string;
}

const Tournament: FC<Props> = ({ slug }) => {
  const [activeTeam, setActiveTeam] = useState<number>(0);
  const { data: tournament, isSuccess } = useGetTournamentById(+slug);

  useEffect(() => {
    isSuccess && setActiveTeam(tournament.teams[0]?.id);
  }, [setActiveTeam, isSuccess, tournament?.teams]);

  return (
    <main className="relative">
      {tournament && (
        <article>
          <div className="absolute -z-10">
            <Image
              src={`${API_URL}/images/${tournament.artworkUrl}`}
              alt={tournament.name}
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          </div>
          <div className="container py-40">
            <div>
              <div className="relative bg-white/5 px-6 py-14 backdrop-blur-md md:px-10 md:py-20">
                <div className="absolute right-4 top-4 flex items-center gap-2 text-xs">
                  {tournament.tags?.map((tag) => (
                    <TagChip tag={tag} key={tag.id} />
                  ))}
                </div>
                {tournament.eventDate && (
                  <p>
                    {new Date(tournament.eventDate.toDate()).toLocaleDateString(
                      "ru",
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      },
                    )}
                  </p>
                )}
                <h1 className="mt-6 text-5xl">{tournament.name}</h1>
                <p className="mt-4">{tournament.description}</p>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="mt-6 flex flex-wrap items-center gap-8 [&>p>span]:text-3xl [&>p>span]:font-semibold">
                    {tournament.prize && (
                      <p className="text-zinc-300">
                        Призовой фонд <br />
                        <span className="text-yellow">
                          {tournament.prize} рублей
                        </span>
                      </p>
                    )}
                    {tournament.type && (
                      <p className="text-zinc-300">
                        Регистрация <br />
                        <span className="text-white">
                          {tournament.type === "closed"
                            ? "Закрытая"
                            : "Бесплатная"}
                        </span>
                      </p>
                    )}
                    {tournament.mode && (
                      <p className="text-zinc-300">
                        Режим <br />
                        <span className="text-white">{tournament.mode}</span>
                      </p>
                    )}
                  </div>
                  <Button className="w-full sm:w-auto" variant="secondary">
                    Зарегистрироваться
                  </Button>
                </div>
              </div>
              <div className="space-y-16 bg-black p-10">
                <div className="prose prose-zinc prose-invert max-w-none">
                  <ReactMarkdown>{tournament.body}</ReactMarkdown>
                </div>
                {tournament.teams.length !== 0 && (
                  <>
                    <div>
                      <h3>
                        Команды{" "}
                        <span className="text-yellow">
                          • {tournament.teams.length}
                        </span>
                      </h3>
                      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {tournament.teams.map((team) => (
                          <article className="group" key={team.id}>
                            <div className="flex flex-col">
                              <div className="relative flex h-48 items-center justify-center bg-white/10 p-4">
                                {team?.logoUrl && (
                                  <Image
                                    src={`${API_URL}/images/${team.logoUrl}`}
                                    alt={team.name}
                                    width={120}
                                    height={120}
                                  />
                                )}
                                <ul className="absolute inset-0 flex flex-col gap-3 bg-black/10 p-4 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                                  {team.players.map((player) => (
                                    <li key={player.id}>{player.name}</li>
                                  ))}
                                </ul>
                              </div>
                              <h4 className="bg-white/5 p-4 text-xl transition-all group-hover:text-yellow">
                                {team.name}
                              </h4>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3>
                        Составы{" "}
                        <span className="text-yellow">
                          •{" "}
                          {
                            tournament.teams.find(
                              (team) => team.id === activeTeam,
                            )?.name
                          }
                        </span>
                      </h3>
                      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {tournament.teams
                          .find((team) => team.id === activeTeam)
                          ?.players.map((player) => (
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
                                  <div className="mt-10">
                                    {getRoleIcon(player.role)}
                                  </div>
                                </div>
                              </div>
                              <p className="bg-white/5 p-4 text-lg backdrop-blur-md lg:text-xl">
                                {player.nickname} |{" "}
                                <span className="text-zinc-400">
                                  {player.name}
                                </span>
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
                      <div className="mt-8 flex items-center justify-center gap-6">
                        {tournament.teams.map((team) => (
                          <button
                            key={team.id}
                            className={classNames({
                              "opacity-50": team.id !== activeTeam,
                            })}
                            onClick={() => setActiveTeam(team.id)}
                          >
                            {team.logoUrl ? (
                              <Image
                                src={`${API_URL}/images/${team.logoUrl}`}
                                alt={team.name}
                                width={60}
                                height={60}
                              />
                            ) : (
                              <p>{team.name}</p>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </article>
      )}
    </main>
  );
};

export default Tournament;
