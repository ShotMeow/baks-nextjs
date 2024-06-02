import { type FC, useState } from "react";
import { Spin } from "@gravity-ui/uikit";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { useGetNews } from "@/src/entities/news";

import Slide from "./Slide";
import Pagination from "./Pagination";

const Slider: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Инициализируем начальный индекс
  const { data: news } = useGetNews();

  return (
    <>
      <Swiper
        className="container h-[300px] md:h-[600px]"
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
        }}
        spaceBetween={60}
        slidesPerView={1}
        onSlideChange={({ activeIndex }) => setActiveIndex(activeIndex)}
      >
        {news ? (
          news.slice(0, 5).map((post) => (
            <SwiperSlide key={post.id}>
              <Slide {...post} />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide className="!flex items-center justify-center">
            <Spin size="xl" />
          </SwiperSlide>
        )}
      </Swiper>
      <div className="mt-6 h-1">
        {news && (
          <Pagination news={news.slice(0, 5)} activeIndex={activeIndex} />
        )}
      </div>
    </>
  );
};

export default Slider;
