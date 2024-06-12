import type { FC } from "react";
import { useGetTeams } from "@/src/entities/teams";
import Team from "../units/Team";

const TagsList: FC = () => {
  const { data } = useGetTeams({});

  return (
    <ul className="flex flex-col gap-6">
      {data?.map((team) => <Team team={team} key={team.id} />)}
    </ul>
  );
};

export default TagsList;
