import type { FC } from "react";
import { useGetTournaments } from "@/src/entities/tournaments";
import Tournament from "../units/Tournament";

const TagsList: FC = () => {
  const { data } = useGetTournaments({
    searchQuery: "",
  });

  return (
    <ul className="flex flex-col gap-6">
      {data?.map((tournament) => (
        <Tournament tournament={tournament} key={tournament.id} />
      ))}
    </ul>
  );
};

export default TagsList;
