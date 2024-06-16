import type { Dispatch, FC, SetStateAction } from "react";
import { TextInput } from "@gravity-ui/uikit";
import Search from "@/src/shared/ui/icons/Search";

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder?: string;
}

const SearchInput: FC<Props> = ({ value, setValue, placeholder = "" }) => {
  return (
    <label className="relative">
      <TextInput
        view="clear"
        className="border-2 border-black/5 px-2 py-1 dark:border-white/5"
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Search
        width={16}
        height={16}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
      />
    </label>
  );
};

export default SearchInput;
