"use client";
import type { FC } from "react";

import Slider from "./Slider";

const Streams: FC = () => {
  return (
    <section className="relative bg-[url('/images/streams-section_background.jpg')] py-20 before:absolute before:left-0 before:top-0 before:size-full before:bg-black/80 before:backdrop-blur-md">
      <div className="container relative z-10">
        <h2>Наши трансляции</h2>
        <Slider />
      </div>
    </section>
  );
};

export default Streams;
