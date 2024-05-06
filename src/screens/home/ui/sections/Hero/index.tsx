"use client";
import { type FC, useState } from "react";
import Slider from "./Slider";

const Hero: FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  return (
    <div className="my-10 overflow-x-hidden">
      <Slider />
    </div>
  );
};

export default Hero;
