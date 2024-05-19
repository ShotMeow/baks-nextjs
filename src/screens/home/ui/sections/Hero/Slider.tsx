import { type FC, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { useGetNews } from "@/src/entities/news";
import Slide from "./Slide";
import Pagination from "./Pagination";

const Slider: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Инициализируем начальный индекс
  const { data } = useGetNews();
  return (
    <Swiper
      className="container !overflow-visible"
      modules={[Autoplay]}
      autoplay={{
        delay: 5000,
      }}
      spaceBetween={60}
      slidesPerView={1}
      onSlideChange={({ activeIndex }) => setActiveIndex(activeIndex)}
    >
      {data?.slice(0, 5).map((news) => (
        <SwiperSlide key={news.id}>
          <Slide {...news} />
        </SwiperSlide>
      ))}
      <Pagination activeIndex={activeIndex} />
    </Swiper>
  );
};

export default Slider;
