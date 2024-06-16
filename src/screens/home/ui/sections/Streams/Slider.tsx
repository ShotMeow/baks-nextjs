"use client";
import { FC, useState } from "react";
import { Spin } from "@gravity-ui/uikit";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { useGetStreams } from "@/src/entities/streams";

import Slide from "./Slide";
import Pagination from "./Pagination";

const Slider: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Инициализируем начальный индекс
  const { data: streams } = useGetStreams({
    take: 5,
  });

  return (
    <>
      <Swiper
        effect="coverflow"
        className="my-14 h-[200px] w-full sm:h-[400px] lg:h-[600px]"
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
          streams.data?.map((stream) => (
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
          <Pagination streams={streams.data} activeIndex={activeIndex} />
        )}
      </div>
    </>
  );
};

export default Slider;
