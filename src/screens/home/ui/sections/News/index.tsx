"use client";
import type { FC } from "react";

import Button from "@/src/shared/ui/Button";
import Slider from "./Slider";
import { useRouter } from "next/navigation";

const News: FC = () => {
  const router = useRouter();
  return (
    <section className="container overflow-x-hidden">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <h2>Новости</h2>
        <Button onClick={() => router.push("/news")} variant="more">
          Посмотреть все
        </Button>
      </div>
      <Slider />
    </section>
  );
};

export default News;
