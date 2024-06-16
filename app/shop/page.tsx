import type { Metadata, NextPage } from "next";
import { Shop } from "@/src/screens/shop";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Phygital Basketball - Магазин",
};

const TournamentsPage: NextPage = () => {
  return (
    <Suspense>
      <Shop />
    </Suspense>
  );
};

export default TournamentsPage;
