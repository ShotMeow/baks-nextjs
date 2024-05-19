import type { Metadata, NextPage } from "next";
import { Tournaments } from "@/src/screens/tournaments";

export const metadata: Metadata = {
  title: "Phygital Basketball - Турниры",
};

const TournamentsPage: NextPage = () => {
  return <Tournaments />;
};

export default TournamentsPage;
