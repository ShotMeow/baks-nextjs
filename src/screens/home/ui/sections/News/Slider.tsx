"use client";
import type { FC } from "react";
import { useGetNews } from "@/src/entities/news";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Slide from "./Slide";

const Slider: FC = () => {
  const { data } = useGetNews();
  return (
    <Swiper
      className="container my-10 h-[440px] !overflow-visible"
      modules={[Autoplay]}
      autoplay={{
        delay: 5000,
      }}
      spaceBetween={10}
      slidesPerView="auto"
    >
      {data?.map((news) => (
        <SwiperSlide
          className="bg-white/5 !transition-all !duration-700 lg:!w-[350px] hover:lg:!w-[600px]"
          key={news.id}
        >
          <Slide {...news} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
