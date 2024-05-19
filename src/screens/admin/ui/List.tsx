import type { FC } from "react";
import TagsList from "./lists/TagsList";
import StreamsList from "./lists/StreamsList";
import ProductsList from "./lists/ProductsList";
import NewsList from "./lists/NewsList";
import TeamsList from "./lists/TeamsList";
import TournamentsList from "./lists/TournamentsList";

interface Props {
  type: string;
}

const List: FC<Props> = ({ type }) => {
  return (
    <div className="mb-6 text-xl">
      {type === "tags" && <TagsList />}
      {type === "streams" && <StreamsList />}
      {type === "products" && <ProductsList />}
      {type === "news" && <NewsList />}
      {type === "teams" && <TeamsList />}
      {type === "tournaments" && <TournamentsList />}
    </div>
  );
};

export default List;
