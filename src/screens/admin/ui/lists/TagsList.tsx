import type { FC } from "react";
import { useGetTags } from "@/src/entities/tags";
import Tag from "../units/Tag";

const TagsList: FC = () => {
  const { data } = useGetTags();

  return (
    <ul className="flex flex-col gap-6">
      {data?.map((tag) => <Tag tag={tag} key={tag.id} />)}
    </ul>
  );
};

export default TagsList;
