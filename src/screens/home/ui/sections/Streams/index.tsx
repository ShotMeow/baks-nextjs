import type { FC } from "react";

import Slider from "./Slider";
import Subtitle from "@/src/shared/ui/Subtitle";

const Streams: FC = () => {
  return (
    <section className="relative bg-[url('/images/streams-section_background.jpg')] py-20 before:absolute before:left-0 before:top-0 before:size-full before:bg-white/70 before:backdrop-blur-md dark:before:bg-black/80">
      <div className="container relative z-10">
        <Subtitle>Наши трансляции</Subtitle>
        <Slider />
      </div>
    </section>
  );
};

export default Streams;
