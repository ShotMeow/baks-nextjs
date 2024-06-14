"use client";
import { type FC, useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";

import Button from "@/src/shared/ui/Button";
import { API_URL } from "@/src/shared/constants";
import { useGetTournamentById } from "@/src/entities/tournaments";
import { TagChip } from "@/src/entities/tags";
import { PlayerCard } from "@/src/entities/teams";

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
                <div className="flex flex-wrap items-center gap-4">
                  {tournament.eventDate && (
                    <p>
                      {new Date(tournament.eventDate).toLocaleDateString("ru", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  )}
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {tournament.tags?.map((tag) => (
                      <TagChip tag={tag} key={tag.id} />
                    ))}
                  </div>
                </div>
                <h1 className="mt-6 text-2xl md:text-5xl">{tournament.name}</h1>
                <p className="mt-5 text-base font-medium text-zinc-300 md:text-lg">
                  {tournament.description}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="mt-6 flex flex-wrap items-center gap-8 [&>p>span]:text-xl [&>p>span]:font-semibold [&>p>span]:md:text-3xl">
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
              <div className="space-y-16 bg-light py-4 md:p-10 dark:bg-black">
                <div className="prose prose-zinc prose-invert max-w-none text-black dark:text-inherit">
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
                            <div className="flex flex-col bg-white dark:bg-transparent">
                              <div className="relative flex h-48 items-center justify-center bg-white p-4 dark:bg-white/10">
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
                              <h4 className="bg-white/5 p-4 text-xl transition-all group-hover:text-green dark:group-hover:text-yellow">
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
                            <PlayerCard player={player} key={player.id} />
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
              {tournament.gridUrl && (
                <div className="my-4 space-y-4">
                  <h3 className="text-[32px] font-semibold">Турнирная сетка</h3>
                  <iframe
                    src={tournament.gridUrl}
                    width="100%"
                    height="600px"
                  />
                </div>
              )}
              {tournament.address && (
                <div className="my-4 space-y-4">
                  <h3 className="text-[32px] font-semibold">
                    Адрес проведения
                  </h3>
                  <p>{tournament.address}</p>
                </div>
              )}
            </div>
          </div>
        </article>
      )}
    </main>
  );
};

export default Tournament;
