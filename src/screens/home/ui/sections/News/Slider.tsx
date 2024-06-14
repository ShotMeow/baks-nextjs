"use client";
import type { FC } from "react";
import { useGetNews } from "@/src/entities/news";
import { Spin } from "@gravity-ui/uikit";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Slide from "./Slide";

const Slider: FC = () => {
  const { data: news } = useGetNews({
    take: 8,
  });

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
      {news ? (
        news?.map((post) => (
          <SwiperSlide
            className="!transition-all !duration-700 lg:!w-[350px] hover:lg:!w-[600px]"
            key={post.id}
          >
            <Slide {...post} />
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide className="!flex items-center justify-center">
          <Spin size="xl" />
        </SwiperSlide>
      )}
    </Swiper>
  );
};

export default Slider;
