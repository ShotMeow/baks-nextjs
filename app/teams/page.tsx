import type { Metadata, NextPage } from "next";
import { Teams } from "@/src/screens/teams";

export const metadata: Metadata = {
  title: "Phygital Basketball - Команды",
};

const TeamsPage: NextPage = () => {
  return <Teams />;
};

export default TeamsPage;
