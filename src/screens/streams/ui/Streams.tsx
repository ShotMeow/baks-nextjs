"use client";
import { type FC, useEffect, useState } from "react";
import { Spin } from "@gravity-ui/uikit";
import { type StreamType, useGetStreams } from "@/src/entities/streams";

import StreamsList from "./StreamsList";
import ActiveStream from "./ActiveStream";

const Streams: FC = () => {
  const [activeStream, setActiveStream] = useState<StreamType | null>(null);
  const { data: streams } = useGetStreams({});

  useEffect(() => {
    streams && setActiveStream(streams[0]);
  }, [streams]);

  return (
    <main className="container">
      {streams ? (
        <>
          {activeStream && <ActiveStream {...activeStream} />}
          {streams && activeStream && (
            <StreamsList
              streams={streams}
              activeStreamId={activeStream.id}
              setActiveStream={setActiveStream}
            />
          )}
        </>
      ) : (
        <div className="flex h-screen items-center justify-center">
          <Spin size="xl" />
        </div>
      )}
    </main>
  );
};

export default Streams;
