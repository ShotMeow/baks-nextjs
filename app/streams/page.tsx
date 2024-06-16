import type { Metadata, NextPage } from "next";
import { Streams } from "@/src/screens/streams";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Phygital Basketball - Трансляции",
};

const StreamsPage: NextPage = () => {
  return (
    <Suspense>
      <Streams />
    </Suspense>
  );
};

export default StreamsPage;
