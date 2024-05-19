import type { Metadata, NextPage } from "next";
import { News } from "@/src/screens/news";

export const metadata: Metadata = {
  title: "Phygital Basketball - Новости",
};

const NewsPage: NextPage = () => {
  return <News />;
};

export default NewsPage;
