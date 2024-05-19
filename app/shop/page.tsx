import type { Metadata, NextPage } from "next";
import { Shop } from "@/src/screens/shop";

export const metadata: Metadata = {
  title: "Phygital Basketball - Магазин",
};

const TournamentsPage: NextPage = () => {
  return <Shop />;
};

export default TournamentsPage;
