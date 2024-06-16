import type { Metadata, NextPage } from "next";
import { Teams } from "@/src/screens/teams";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Phygital Basketball - Команды",
};

const TeamsPage: NextPage = () => {
  return (
    <Suspense>
      <Teams />
    </Suspense>
  );
};

export default TeamsPage;
