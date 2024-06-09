import type { Dispatch, FC, SetStateAction } from "react";
import { TextInput } from "@gravity-ui/uikit";
import Search from "@/src/shared/ui/icons/Search";

interface Props {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

const TournamentsHeader: FC<Props> = ({ search, setSearch }) => {
  return (
    <header className="container mb-4 bg-zinc-900 px-8 py-4">
      <div className="flex flex-wrap items-center gap-6">
        <h3 className="text-2xl font-semibold">Турниры</h3>
        <label className="relative">
          <TextInput
            view="clear"
            className="rounded-md border-2 border-white/5 px-2 py-1"
            placeholder="Поиск турниров"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <Search
            width={16}
            height={16}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
          />
        </label>
      </div>
    </header>
  );
};

export default TournamentsHeader;
