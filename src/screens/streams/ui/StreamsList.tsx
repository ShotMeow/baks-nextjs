import type { Dispatch, FC, SetStateAction } from "react";
import Image from "next/image";
import classNames from "classnames";

import { StreamType } from "@/src/entities/streams";
import { API_URL } from "@/src/shared/constants";

interface Props {
  streams: StreamType[];
  activeStreamId: number;
  setActiveStream: Dispatch<SetStateAction<StreamType | null>>;
}

const StreamsList: FC<Props> = ({
  streams,
  activeStreamId,
  setActiveStream,
}) => {
  return (
    <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {streams.map((stream) => (
        <button onClick={() => setActiveStream(stream)} key={stream.id}>
          <article
            className={classNames(
              {
                "bg-black/10 dark:bg-white/10": activeStreamId === stream.id,
                "bg-black/5 dark:bg-white/5": activeStreamId !== stream.id,
              },
              "p-4 flex flex-col items-start text-start justify-between gap-6 h-full transition-all",
            )}
          >
            <Image
              className="h-60 w-full object-cover"
              src={`${API_URL}/images/${stream.posterUrl}`}
              alt={stream.title}
              width={320}
              height={400}
            />
            <div className="space-y-2">
              <h4 className="text-xl">{stream.title}</h4>
              <p className="text-zinc-400">{stream.description}</p>
            </div>
          </article>
        </button>
      ))}
    </div>
  );
};

export default StreamsList;
