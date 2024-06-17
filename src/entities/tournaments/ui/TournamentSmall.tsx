import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { API_URL } from "@/src/shared/constants";
import { TagChip } from "@/src/entities/tags";

import type { TournamentType } from "../types";

interface Props {
  tournament: TournamentType;
}

const TournamentSmall: FC<Props> = ({ tournament }) => {
  return (
    <Link
      className="group"
      key={tournament.id}
      href={`/tournaments/${tournament.id}`}
    >
      <article className="flex h-full flex-col bg-white transition-all duration-500 dark:bg-zinc-900 group-hover:dark:bg-zinc-800">
        <div className="relative max-h-[200px] min-h-[200px] overflow-hidden">
          {tournament.artworkUrl && (
            <Image
              className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={`${API_URL}/images/${tournament.artworkUrl}`}
              alt={tournament.name}
              width={388}
              height={240}
            />
          )}
          <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2 text-xs">
            {tournament.tags?.map((tag) => <TagChip tag={tag} key={tag.id} />)}
          </div>
        </div>
        <div className="flex h-full flex-col justify-between p-6">
          <div className="space-y-4">
            <h3 className="line-clamp-1 text-lg font-semibold text-black dark:text-white md:text-3xl">
              {tournament.name}
            </h3>
            {tournament.eventDate && (
              <p>
                {new Date(tournament.eventDate).toLocaleDateString("ru", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            )}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {tournament.prize && (
              <p className="col-span-2 text-zinc-500 sm:col-span-1">
                Призовой фонд <br />
                <span className="font-semibold text-green dark:text-yellow sm:text-xl">
                  {tournament.prize}
                  <span>р</span>
                </span>
              </p>
            )}
            {tournament.mode && (
              <p className="text-zinc-500">
                Режим <br />
                <span className="font-semibold text-black dark:text-white sm:text-xl">
                  {tournament.mode}
                </span>
              </p>
            )}
            {tournament.type && (
              <p className="text-zinc-500">
                Регистрация <br />
                <span className="font-semibold text-black dark:text-white sm:text-xl">
                  {tournament.type === "closed" ? "Закрытая" : "Бесплатная"}
                </span>
              </p>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default TournamentSmall;
