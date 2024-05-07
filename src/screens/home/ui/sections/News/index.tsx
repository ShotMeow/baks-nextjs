import type { FC } from "react";

import Button from "@/src/shared/ui/Button";
import Slider from "./Slider";

const News: FC = () => {
  return (
    <section className="container">
      <div className="flex items-center gap-6">
        <h2>Новости</h2>
        <Button variant="more">Посмотреть все</Button>
      </div>
      <Slider />
    </section>
  );
};

export default News;
