import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import Star from "@/src/shared/ui/icons/Star";
import { API_URL } from "@/src/shared/constants";
import Button from "@/src/shared/ui/Button";
import { TagChip } from "@/src/entities/tags";

import type { TournamentType } from "../types";

interface Props {
  tournament: TournamentType;
}

const TournamentLarge: FC<Props> = ({ tournament }) => {
  return (
    <Link
      className="2xl:col-span-3"
      key={tournament.id}
      href={`/tournaments/${tournament.id}`}
    >
      <article className="flex h-full flex-col bg-white/5 2xl:grid 2xl:grid-cols-3">
        <div className="relative col-span-2 min-h-[200px] 2xl:h-full">
          {tournament.artworkUrl && (
            <Image
              className="size-full object-cover"
              src={`${API_URL}/images/${tournament.artworkUrl}`}
              alt={tournament.name}
              width={388}
              height={211}
            />
          )}
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-yellow px-4 py-2 text-sm font-semibold uppercase text-black">
            <Star />
            <span>Популярное</span>
          </div>
          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs">
            {tournament.tags?.map((tag) => <TagChip tag={tag} key={tag.id} />)}
          </div>
        </div>
        <div className="col-span-1 flex h-full flex-col justify-between p-6 2xl:p-10">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold md:text-3xl">
              {tournament.name}
            </h3>
            <p className="line-clamp-2 hidden text-zinc-500 2xl:block">
              {tournament.description}
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {tournament.prize && (
              <p className="col-span-2 text-zinc-500 sm:col-span-1 2xl:col-span-3">
                Призовой фонд <br />
                <span className="font-semibold text-yellow sm:text-xl 2xl:text-4xl 2xl:font-bold">
                  {tournament.prize}
                  <span className="hidden 2xl:inline"> рублей</span>
                  <span className="inline 2xl:hidden">р</span>
                </span>
              </p>
            )}
            {tournament.mode && (
              <p className="text-zinc-500">
                Режим <br />
                <span className="font-semibold text-white sm:text-xl 2xl:text-4xl 2xl:font-bold">
                  {tournament.mode}
                </span>
              </p>
            )}
            {tournament.type && (
              <p className="text-zinc-500">
                Регистрация <br />
                <span className="font-semibold text-white sm:text-xl 2xl:text-4xl 2xl:font-bold">
                  {tournament.type === "closed" ? "Закрытая" : "Бесплатная"}
                </span>
              </p>
            )}
            <Button className="col-span-3 hidden 2xl:flex" variant="secondary">
              Подробнее
            </Button>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default TournamentLarge;
