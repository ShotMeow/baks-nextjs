"use client";
import type { FC } from "react";
import { getNews } from "@/src/entities/news";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Slide from "./Slide";

const Slider: FC = () => {
  return (
    <Swiper
      className="container my-10 !overflow-visible"
      modules={[Autoplay]}
      autoplay={{
        delay: 5000,
      }}
      spaceBetween={10}
      slidesPerView="auto"
    >
      {getNews().map((news) => (
        <SwiperSlide className="bg-white/5 sm:!w-[400px]" key={news.id}>
          <Slide {...news} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
