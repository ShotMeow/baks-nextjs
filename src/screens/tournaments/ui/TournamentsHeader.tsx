import { Dispatch, FC, SetStateAction, useState } from "react";
import SearchInput from "@/src/shared/ui/SearchInput";
import { useDebounce } from "@/src/shared/hooks/useDebounce";
import { useGetTags } from "@/src/entities/tags";
import Button from "@/src/shared/ui/Button";
import classNames from "classnames";
import { ArrowToggle } from "@gravity-ui/uikit";
import Exit from "@/src/shared/ui/icons/Exit";
import Dropdown from "@/src/shared/ui/Dropdown";
import Radio from "@/src/shared/ui/Radio";

interface Props {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  tag: string;
  setTag: Dispatch<SetStateAction<string>>;
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
}

const TournamentsHeader: FC<Props> = ({
  search,
  setSearch,
  setTag,
  tag: activeTag,
  sort,
  setSort,
}) => {
  const [dropdownState, setDropdownState] = useState<{
    visible: boolean;
    type: "tags" | "sort" | null;
  }>({
    visible: false,
    type: null,
  });
  const [tagSearch, setTagSearch] = useState<string>("");
  const debounceSearch = useDebounce(tagSearch, 500);

  const { data: tags } = useGetTags({
    searchQuery: debounceSearch,
  });

  return (
    <header className="container relative mb-4 flex flex-wrap items-center justify-between gap-6 bg-zinc-900 p-4 md:px-8 md:py-4">
      <div className="flex flex-wrap items-center gap-6">
        <h3 className="text-2xl font-semibold">Турниры</h3>
        <SearchInput
          placeholder="Поиск турниров"
          value={search}
          setValue={setSearch}
        />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <Button
            className={classNames({
              "!text-white": activeTag,
            })}
            variant="dropdown"
            onClick={() =>
              setDropdownState({
                visible: true,
                type: "tags",
              })
            }
          >
            {activeTag || "Категория"}
            <ArrowToggle
              direction={dropdownState.type === "tags" ? "top" : "bottom"}
            />
          </Button>
          {activeTag && (
            <Button
              onClick={() => setTag("")}
              className="!p-2 text-red-600"
              variant="dropdown"
              aria-label="Очистить категории"
            >
              <Exit />
            </Button>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            className={classNames({
              "!text-white": sort,
            })}
            variant="dropdown"
            onClick={() =>
              setDropdownState({
                visible: true,
                type: "sort",
              })
            }
          >
            {sort === "asc"
              ? "По возрастанию"
              : sort === "desc"
                ? "По убыванию"
                : "Сортировка"}
            <ArrowToggle
              direction={dropdownState.type === "sort" ? "top" : "bottom"}
            />
          </Button>
          {sort && (
            <Button
              onClick={() => setSort("")}
              className="!p-2 text-red-600"
              variant="dropdown"
              aria-label="Очистить сортировку"
            >
              <Exit />
            </Button>
          )}
        </div>
      </div>
      <Dropdown
        isShow={dropdownState.visible}
        onClose={() =>
          setDropdownState({
            visible: false,
            type: null,
          })
        }
      >
        {dropdownState.type === "tags" && (
          <>
            <SearchInput
              placeholder="Я ищу"
              value={tagSearch}
              setValue={setTagSearch}
            />
            <div className="max-h-96 space-y-4 overflow-y-auto">
              {tags?.map((tag) => (
                <Radio
                  onClick={() => setTag(tag.name)}
                  isActive={activeTag === tag.name}
                  key={tag.id}
                >
                  {tag.name}
                </Radio>
              ))}
            </div>
          </>
        )}
        {dropdownState.type === "sort" && (
          <div className="max-h-96 space-y-4 overflow-y-auto">
            <Radio onClick={() => setSort("asc")} isActive={sort === "asc"}>
              По возрастанию
            </Radio>
            <Radio onClick={() => setSort("desc")} isActive={sort === "desc"}>
              По убыванию
            </Radio>
          </div>
        )}
      </Dropdown>
    </header>
  );
};

export default TournamentsHeader;
