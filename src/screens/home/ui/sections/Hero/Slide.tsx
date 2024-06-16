import type { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

import { useSwiperSlide } from "swiper/react";

import Button from "@/src/shared/ui/Button";
import type { PostType } from "@/src/entities/news";
import { API_URL } from "@/src/shared/constants";
import DarkGradientToTop from "@/src/shared/ui/DarkGradientToTop";

interface Props extends PostType {}

const Slide: FC<Props> = ({ id, artworkUrl, title, description }) => {
  const { isActive } = useSwiperSlide();
  return (
    <Link className="group" href={`/news/${id}`}>
      <div className="size-full overflow-hidden">
        <DarkGradientToTop />
        <Image
          className={classNames(
            {
              "grayscale opacity-20": !isActive,
            },
            "relative -z-20 size-full transition-all duration-700 object-cover group-hover:scale-110",
          )}
          src={`${API_URL}/images/${artworkUrl}`}
          alt={title}
          width={1256}
          height={600}
        />
      </div>
      <div className="absolute inset-x-6 bottom-6 flex flex-col gap-6 transition-all duration-500 group-hover:scale-95 md:inset-x-20 md:bottom-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-4 text-white lg:space-y-8">
          <h4 className="line-clamp-2 text-xl font-bold lg:text-4xl">
            {title}
          </h4>
          <p className="line-clamp-3 lg:text-lg">{description}</p>
        </div>
        <Button className="!bg-lilac/20 !text-yellow" variant="transparent">
          Подробнее
        </Button>
      </div>
    </Link>
  );
};

export default Slide;
