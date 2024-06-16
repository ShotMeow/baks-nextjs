import type { Metadata, NextPage } from "next";
import { News } from "@/src/screens/news";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Phygital Basketball - Новости",
};

const NewsPage: NextPage = () => {
  return (
    <Suspense>
      <News />
    </Suspense>
  );
};

export default NewsPage;
