import { FC, useRef, useState } from "react";
import classNames from "classnames";
import { StreamType } from "@/src/entities/streams";

interface Props extends StreamType {}

const Slide: FC<Props> = ({ posterUrl, streamUrl, description, title }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [buttonShown, setButtonShown] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  let timer: number | null = null;

  const handleClick = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseMove = () => {
    timer !== null && window.clearTimeout(timer);
    if (!isPlaying) {
      setButtonShown(true);
      return;
    }

    timer = window.setTimeout(() => {
      setButtonShown(false);
    }, 3000);

    setButtonShown(true);
  };

  return (
    <div
      className={classNames({
        "before:absolute before:left-0 before:top-0 before:size-full before:bg-gradient-to-t before:from-black/70 before:via-transparent before:to-transparent":
          !isPlaying,
      })}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
    >
      <video
        width={736}
        height={414}
        ref={videoRef}
        muted
        className="h-[200px] w-full object-cover sm:h-[400px] lg:h-[600px]"
        poster={posterUrl}
      >
        <source src={streamUrl} type="video/mp4" />
      </video>
      <button
        aria-label="Включить/выключить видео"
        onClick={handleClick}
        className={classNames(
          {
            "opacity-0": !buttonShown,
          },
          "absolute z-10 left-1/2 top-1/2 flex size-24 lg:size-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-b from-white/30 to-transparent backdrop-blur-md transition-all duration-500",
        )}
      >
        {!isPlaying ? (
          <svg
            width="36"
            height="46"
            viewBox="0 0 36 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.15736 1.05283C1.87086 0.6633 2.74011 0.694436 3.42391 1.13402L34.535 21.134C35.1711 21.5429 35.5556 22.2472 35.5556 23.0033C35.5556 23.7594 35.1711 24.4637 34.535 24.8726L3.42391 44.8726C2.74011 45.3122 1.87086 45.3433 1.15736 44.9538C0.443863 44.5642 0 43.8162 0 43.0033V3.00331C0 2.1904 0.443863 1.44237 1.15736 1.05283Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="46"
            height="56"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 4C5 3.44772 5.44772 3 6 3H10C10.5523 3 11 3.44772 11 4V20C11 20.5523 10.5523 21 10 21H6C5.44772 21 5 20.5523 5 20V4Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 4C13 3.44772 13.4477 3 14 3H18C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21H14C13.4477 21 13 20.5523 13 20V4Z"
              fill="white"
            />
          </svg>
        )}
      </button>
      <div
        className={classNames(
          {
            "opacity-0": isPlaying,
          },
          "absolute inset-x-4 bottom-4 lg:inset-x-14 lg:bottom-14 transition-all duration-500",
        )}
      >
        <h3 className="line-clamp-1 font-semibold sm:text-3xl">{title}</h3>
        <p className="line-clamp-2 sm:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Slide;
