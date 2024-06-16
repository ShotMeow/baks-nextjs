import type { Metadata, NextPage } from "next";
import { Tournaments } from "@/src/screens/tournaments";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Phygital Basketball - Турниры",
};

const TournamentsPage: NextPage = () => {
  return (
    <Suspense>
      <Tournaments />
    </Suspense>
  );
};

export default TournamentsPage;
