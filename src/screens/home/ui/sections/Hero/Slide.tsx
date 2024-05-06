import type { FC } from "react";
import Image from "next/image";
import classNames from "classnames";

import { useSwiperSlide } from "swiper/react";

import Button from "@/src/shared/ui/Button";

interface Props {
  artwork_url: string;
  title: string;
  description: string;
}

const Slide: FC<Props> = ({ artwork_url, title, description }) => {
  const { isActive } = useSwiperSlide();
  return (
    <>
      <div className="absolute left-0 top-0 size-full bg-gradient-to-t from-black/50 to-transparent" />
      <Image
        className={classNames(
          {
            "grayscale opacity-20": !isActive,
          },
          "-z-10 w-full transition-all duration-700 h-[300px] md:h-auto object-cover",
        )}
        src={artwork_url}
        alt={title}
        width={1256}
        height={600}
      />
      <div className="absolute inset-x-6 bottom-6 flex flex-col gap-6 md:inset-x-20 md:bottom-20 lg:flex-row lg:items-end">
        <div className="space-y-4 lg:space-y-8">
          <h2 className="line-clamp-2 text-xl font-bold lg:text-4xl">
            {title}
          </h2>
          <p className="line-clamp-3 lg:text-lg">{description}</p>
        </div>
        <Button variant="transparent">Подробнее</Button>
      </div>
    </>
  );
};

export default Slide;
