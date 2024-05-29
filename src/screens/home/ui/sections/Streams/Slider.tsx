"use client";
import { FC, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { getStreams, useGetStreams } from "@/src/entities/streams";

import Slide from "./Slide";
import Pagination from "./Pagination";
import { Spin } from "@gravity-ui/uikit";

const Slider: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Инициализируем начальный индекс
  const { data: streams } = useGetStreams();
  return (
    <>
      <Swiper
        effect="coverflow"
        className="my-14 w-full h-[200px] sm:h-[400px] lg:h-[600px]"
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
        onSlideChange={({ activeIndex }) => setActiveIndex(activeIndex)}
      >
        {streams ? (
          streams?.slice(0, 5).map((stream) => (
            <SwiperSlide className="relative !max-w-[1100px]" key={stream.id}>
              <Slide {...stream} />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide className="!flex items-center justify-center">
            <Spin size="xl" />
          </SwiperSlide>
        )}
      </Swiper>
      <div className="mt-10 h-4">
        {streams && (
          <Pagination streams={streams.slice(0, 5)} activeIndex={activeIndex} />
        )}
      </div>
    </>
  );
};

export default Slider;
