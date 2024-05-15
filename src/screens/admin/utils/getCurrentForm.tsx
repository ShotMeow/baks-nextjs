import NewsForm from "@/src/screens/admin/ui/forms/NewsForm";
import TagsForm from "@/src/screens/admin/ui/forms/TagsForm";
import TeamsForm from "@/src/screens/admin/ui/forms/TeamsForm";
import StreamsForm from "@/src/screens/admin/ui/forms/StreamsForm";
import TournamentsForm from "@/src/screens/admin/ui/forms/TournamentsForm";
import ProductsForm from "@/src/screens/admin/ui/forms/ProductsForm";
import type { ReactElement } from "react";

export const getCurrentForm = (tabType: string): ReactElement => {
  switch (tabType) {
    case "news":
      return <NewsForm />;
    case "tags":
      return <TagsForm />;
    case "streams":
      return <StreamsForm />;
    case "teams":
      return <TeamsForm />;
    case "tournaments":
      return <TournamentsForm />;
    case "products":
      return <ProductsForm />;
    default:
      return <></>;
  }
};
