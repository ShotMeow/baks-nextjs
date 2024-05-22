import { type FC, useState } from "react";
import type { StreamType } from "@/src/entities/streams";
import classNames from "classnames";
import { TwitchPlayer } from "react-twitch-embed";

interface Props extends StreamType {}

const ActiveStream: FC<Props> = ({ channel, title, description }) => {
  const [descriptionShown, setDescriptionShown] = useState<boolean>(false);

  return (
    <div className="relative">
      <div className="h-[240px] md:h-[400px] xl:h-[600px]">
        <TwitchPlayer
          autoplay={false}
          channel={channel}
          width="100%"
          height="100%"
        />
      </div>
      <div
        className={classNames(
          {
            "opacity-0": !descriptionShown,
          },
          "absolute space-y-2 inset-x-4 bottom-4 lg:inset-x-14 lg:bottom-14 transition-all duration-500",
        )}
      >
        <h3 className="line-clamp-1 font-semibold sm:text-3xl">{title}</h3>
        <p className="line-clamp-2 sm:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ActiveStream;
