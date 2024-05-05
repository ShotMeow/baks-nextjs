"use client";
import { FC, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { getStreams } from "@/src/entities/streams";

import Slide from "./Slide";
import Pagination from "./Pagination";

const Slider: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Инициализируем начальный индекс

  return (
    <Swiper
      effect="coverflow"
      className="my-14 w-full"
      loop
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      centeredSlides={true}
      modules={[EffectCoverflow]}
      slidesPerView="auto"
      onSlideChange={({ realIndex }) => setActiveIndex(realIndex)}
    >
      {getStreams().map((stream, index) => (
        <SwiperSlide className="relative !max-w-[1100px]" key={stream.id}>
          <Slide {...stream} />
        </SwiperSlide>
      ))}
      <Pagination activeIndex={activeIndex} />
    </Swiper>
  );
};

export default Slider;
