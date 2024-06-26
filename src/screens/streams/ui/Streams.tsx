"use client";
import { type FC, useEffect, useState } from "react";
import { Spin } from "@gravity-ui/uikit";
import { type StreamType, useGetStreams } from "@/src/entities/streams";

import StreamsList from "./StreamsList";
import ActiveStream from "./ActiveStream";
import { Pagination } from "@/src/widgets/pagination";
import { PageHeader } from "@/src/widgets/filter";
import { useQueryParams } from "@/src/shared/hooks/useQueryParams";
import { useDebounce } from "@/src/shared/hooks/useDebounce";
import ListNotFound from "@/src/shared/ui/ListNotFound";

const Streams: FC = () => {
  const [search, setSearch] = useState<string>("");
  const { query } = useQueryParams();
  const debounceSearch = useDebounce(search, 500);
  const [activeStream, setActiveStream] = useState<StreamType | null>(null);
  const {
    data: streams,
    isSuccess,
    isLoading,
  } = useGetStreams({ ...query, search: debounceSearch });

  useEffect(() => {
    streams && setActiveStream(streams.data[0]);
  }, [streams]);

  return (
    <main className="container">
      <PageHeader
        title="Трансляции"
        searchPlaceholder="Поиск трансляций"
        search={search}
        setSearch={setSearch}
      />
      {isSuccess && streams.data.length !== 0 && (
        <>
          {activeStream && <ActiveStream {...activeStream} />}
          {streams && activeStream && (
            <StreamsList
              streams={streams.data}
              activeStreamId={activeStream.id}
              setActiveStream={setActiveStream}
            />
          )}
        </>
      )}
      {isSuccess && streams.data.length === 0 && (
        <ListNotFound className="col-span-full">
          Таких трансляций нет
        </ListNotFound>
      )}
      {isLoading && (
        <div className="flex h-screen items-center justify-center">
          <Spin size="xl" />
        </div>
      )}
      {streams && <Pagination pagination={streams.pagination} />}
    </main>
  );
};

export default Streams;
