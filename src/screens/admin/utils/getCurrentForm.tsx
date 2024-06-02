import type { Dispatch, ReactElement, SetStateAction } from "react";

import NewsForm from "../ui/forms/NewsForm";
import TagsForm from "../ui/forms/TagsForm";
import TeamsForm from "../ui/forms/TeamsForm";
import StreamsForm from "../ui/forms/StreamsForm";
import TournamentsForm from "../ui/forms/TournamentsForm";
import ProductsForm from "../ui/forms/ProductsForm";

export const getCurrentForm = (
  tabType: string,
  onClose: Dispatch<SetStateAction<boolean>>,
): ReactElement => {
  switch (tabType) {
    case "news":
      return <NewsForm type="create" onClose={onClose} />;
    case "tags":
      return <TagsForm type="create" onClose={onClose} />;
    case "streams":
      return <StreamsForm type="create" onClose={onClose} />;
    case "teams":
      return <TeamsForm type="create" onClose={onClose} />;
    case "tournaments":
      return <TournamentsForm type="create" onClose={onClose} />;
    case "products":
      return <ProductsForm type="create" onClose={onClose} />;
    default:
      return <></>;
  }
};
