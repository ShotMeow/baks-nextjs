import type { FC } from "react";
import Image from "next/image";

import type { UserType } from "@/src/entities/users";
import { API_URL } from "@/src/shared/constants";
import { getRoleIcon } from "../utils/getRoleIcon";
import { numberFloater } from "../utils/numberFloater";

interface Props {
  player: UserType;
}

const PlayerCard: FC<Props> = ({ player }) => {
  return (
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
        {player.nickname} | <span className="text-zinc-400">{player.name}</span>
      </p>
      <div className="mt-2 grid grid-cols-3 gap-2 text-lg [&>p]:bg-white/5 [&>p]:p-2 [&>p]:text-center">
        {player.killDeaths ? (
          <p>KD | {numberFloater(player.killDeaths)}</p>
        ) : (
          ""
        )}
        {player.deaths ? <p>D | {numberFloater(player.deaths)}</p> : ""}
        {player.assists ? <p>A | {numberFloater(player.assists)}</p> : ""}
      </div>
    </div>
  );
};

export default PlayerCard;
