"use client";
import type { FC } from "react";
import { useGetTournaments } from "@/src/entities/tournaments";
import Button from "@/src/shared/ui/Button";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Star from "@/src/shared/ui/icons/Star";
import { Spin } from "@gravity-ui/uikit";

const Tournaments: FC = () => {
  const router = useRouter();
  const { data: tournaments } = useGetTournaments();

  return (
    <section className="container">
      <div className="my-10 flex flex-col items-center justify-between gap-8 sm:flex-row">
        <h2>Турниры</h2>
        <Button onClick={() => router.push("/tournaments")} variant="more">
          Посмотреть все
        </Button>
      </div>
      <div className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
        {tournaments ? (
          tournaments?.slice(0, 4).map((tournament, index) => (
            <Link
              className={classNames({
                "2xl:col-span-3": index === 0,
              })}
              key={tournament.id}
              href="#"
            >
              <article
                className={classNames(
                  {
                    "2xl:grid 2xl:grid-cols-3": index === 0,
                  },
                  "bg-white/5 relative flex flex-col",
                )}
              >
                {index === 0 && (
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-yellow px-4 py-2 text-sm font-semibold uppercase text-black">
                    <Star />
                    <span>Популярное</span>
                  </div>
                )}
                <Image
                  className={classNames(
                    {
                      "col-span-2": index === 0,
                    },
                    "w-full h-full object-cover",
                  )}
                  src={tournament.artworkUrl}
                  alt={tournament.name}
                  width={388}
                  height={211}
                />
                <div
                  className={classNames(
                    {
                      "col-span-1 p-10": index === 0,
                    },
                    "p-6 flex flex-col justify-between h-full",
                  )}
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold sm:text-3xl">
                      {tournament.name}
                    </h3>
                    {index === 0 && (
                      <p className="line-clamp-2 hidden text-zinc-500 2xl:block">
                        {tournament.description}
                      </p>
                    )}
                  </div>
                  <div
                    className={classNames(
                      {
                        "gap-6": index === 0,
                      },
                      "mt-6 gap-4 grid grid-cols-2 lg:grid-cols-3",
                    )}
                  >
                    <p
                      className={classNames(
                        {
                          "2xl:col-span-3": index === 0,
                        },
                        "text-zinc-500 col-span-2 sm:col-span-1",
                      )}
                    >
                      Призовой фонд <br />
                      <span
                        className={classNames(
                          {
                            "2xl:text-4xl 2xl:font-bold": index === 0,
                          },
                          "text-yellow sm:text-xl font-semibold",
                        )}
                      >
                        {tournament.prize}
                        {index === 0 ? (
                          <>
                            <span className="hidden 2xl:inline"> рублей</span>
                            <span className="inline 2xl:hidden">р</span>
                          </>
                        ) : (
                          <span>р</span>
                        )}
                      </span>
                    </p>
                    <p className="text-zinc-500">
                      Режим <br />
                      <span
                        className={classNames(
                          {
                            "2xl:text-4xl 2xl:font-bold": index === 0,
                          },
                          "text-white sm:text-xl font-semibold",
                        )}
                      >
                        {tournament.mode}
                      </span>
                    </p>
                    <p className="text-zinc-500">
                      Регистрация <br />
                      <span
                        className={classNames(
                          {
                            "2xl:text-4xl 2xl:font-bold": index === 0,
                          },
                          "text-white sm:text-xl font-semibold",
                        )}
                      >
                        {tournament.type === "closed"
                          ? "Закрытая"
                          : "Бесплатная"}
                      </span>
                    </p>
                    {index === 0 && (
                      <Button
                        className="col-span-3 hidden 2xl:flex"
                        variant="secondary"
                      >
                        Подробнее
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            </Link>
          ))
        ) : (
          <div className="flex items-center justify-center col-span-full row-span-full">
            <Spin size="xl" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Tournaments;
