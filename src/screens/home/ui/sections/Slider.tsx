"use client";
import { type FC, useState } from "react";
import Image from "next/image";
import classNames from "classnames";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Button from "@/src/shared/ui/Button";
import { getNews } from "@/src/entities/news";

const Slider: FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  return (
    <div className="my-10 overflow-x-hidden">
      <Swiper
        className="container !overflow-visible"
        spaceBetween={60}
        slidesPerView={1}
        onSlideChange={({ activeIndex }) => setActiveSlide(activeIndex)}
      >
        {getNews().map((news, index) => (
          <SwiperSlide key={news.id}>
            <div className="absolute left-0 top-0 size-full bg-gradient-to-t from-black/50 to-transparent" />
            <Image
              className={classNames(
                {
                  "grayscale opacity-20": index !== activeSlide,
                },
                "-z-10 w-full transition-all duration-700 h-[300px] md:h-auto object-cover",
              )}
              src={news.artwork_url}
              alt={news.title}
              width={1256}
              height={600}
            />
            <div className="absolute inset-x-6 bottom-6 flex flex-col gap-6 md:inset-x-20 md:bottom-20 lg:flex-row lg:items-end">
              <div className="space-y-4 lg:space-y-8">
                <h2 className="text-xl line-clamp-2 lg:text-4xl font-bold">
                  {news.title}
                </h2>
                <p className="lg:text-lg line-clamp-3">{news.description}</p>
              </div>
              <Button variant="transparent">Подробнее</Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-6 flex items-center justify-center gap-4">
        {getNews().map((news, index) => (
          <div
            className={classNames(
              {
                "w-8 bg-yellow": index === activeSlide,
              },
              "h-1 w-4 rounded-full bg-zinc-800 transition-all duration-500",
            )}
            key={news.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
