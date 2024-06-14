import type { FC } from "react";

import {
  TournamentSmall,
  type TournamentType,
} from "@/src/entities/tournaments";

interface Props {
  tournaments: TournamentType[];
}

const TournamentsList: FC<Props> = ({ tournaments }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:col-span-2">
      {tournaments.map((tournament) => (
        <TournamentSmall tournament={tournament} key={tournament.id} />
      ))}
    </div>
  );
};

export default TournamentsList;
