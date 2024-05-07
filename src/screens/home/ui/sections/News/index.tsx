import type { FC } from "react";

import Button from "@/src/shared/ui/Button";
import Slider from "./Slider";

const News: FC = () => {
  return (
    <section className="container">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <h2>Новости</h2>
        <Button variant="more">Посмотреть все</Button>
      </div>
      <Slider />
    </section>
  );
};

export default News;
