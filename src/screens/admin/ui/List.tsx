import type { FC, PropsWithChildren } from "react";

import TagsList from "./lists/TagsList";
import StreamsList from "./lists/StreamsList";
import ProductsList from "./lists/ProductsList";
import NewsList from "./lists/NewsList";
import TeamsList from "./lists/TeamsList";
import TournamentsList from "./lists/TournamentsList";
import PlayersList from "./lists/PlayersList";

interface Props {
  type: string;
}

const List: FC<PropsWithChildren<Props>> = ({ type, children }) => {
  return (
    <div className="mb-6 text-xl">
      {type === "tags" && <TagsList>{children}</TagsList>}
      {type === "streams" && <StreamsList>{children}</StreamsList>}
      {type === "products" && <ProductsList>{children}</ProductsList>}
      {type === "news" && <NewsList>{children}</NewsList>}
      {type === "teams" && <TeamsList>{children}</TeamsList>}
      {type === "tournaments" && <TournamentsList>{children}</TournamentsList>}
      {type === "players" && <PlayersList>{children}</PlayersList>}
    </div>
  );
};

export default List;
