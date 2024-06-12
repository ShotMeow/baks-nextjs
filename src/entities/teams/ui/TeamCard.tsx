import type { FC } from "react";
import Image from "next/image";
import { API_URL } from "@/src/shared/constants";
import Button from "@/src/shared/ui/Button";
import { useRouter } from "next/navigation";
import type { TeamType } from "../types";

interface Props {
  team: TeamType;
}

const TeamCard: FC<Props> = ({ team }) => {
  const router = useRouter();

  return (
    <article className="flex flex-col justify-between bg-zinc-900 p-4">
      <div className="mb-4 flex gap-4">
        {team?.logoUrl && (
          <div className="flex items-center justify-center bg-white/5 p-4">
            <Image
              src={`${API_URL}/images/${team.logoUrl}`}
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
      <Button onClick={() => router.push(`/teams/${team.id}`)} variant="more">
        Подробнее
      </Button>
    </article>
  );
};

export default TeamCard;
