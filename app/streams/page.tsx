import type { Metadata, NextPage } from "next";
import { Streams } from "@/src/screens/streams";

export const metadata: Metadata = {
  title: "Phygital Basketball - Трансляции",
};

const StreamsPage: NextPage = () => {
  return <Streams />;
};

export default StreamsPage;
