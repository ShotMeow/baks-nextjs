"use client";
import { FC, useEffect, useState } from "react";
import { StreamType, useGetStreams } from "@/src/entities/streams";
import StreamsList from "@/src/screens/streams/ui/StreamsList";
import ActiveStream from "@/src/screens/streams/ui/ActiveStream";
import { Spin } from "@gravity-ui/uikit";

const Streams: FC = () => {
  const [activeStream, setActiveStream] = useState<StreamType | null>(null);
  const { data: streams } = useGetStreams();

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
        <div className="flex items-center justify-center h-screen">
          <Spin size="xl" />
        </div>
      )}
    </main>
  );
};

export default Streams;
