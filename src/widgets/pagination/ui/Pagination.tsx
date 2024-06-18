import { type FC, useEffect } from "react";
import { ArrowToggle } from "@gravity-ui/uikit";
import classNames from "classnames";

import type { PaginationType } from "@/src/shared/types/global.types";
import Button from "@/src/shared/ui/Button";
import { useQueryParams } from "@/src/shared/hooks/useQueryParams";

interface Props {
  pagination: PaginationType;
}

const Pagination: FC<Props> = ({ pagination }) => {
  const { push } = useQueryParams();

  useEffect(() => {
    pagination.currentPage > pagination.lastPage &&
      push("page", String(pagination.lastPage));
  }, [pagination, push]);

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
      <Button
        disabled={pagination.currentPage === 1}
        onClick={() => push("page", String(pagination.currentPage - 1))}
        variant="pagination"
      >
        <ArrowToggle direction="left" />
      </Button>
      {pagination.currentPage > 3 && (
        <Button onClick={() => push("page", String(1))} variant="pagination">
          01
        </Button>
      )}
      {pagination.pages.map((page) => (
        <Button
          className={classNames({
            "!text-green !border-green dark:!text-yellow dark:!border-yellow":
              pagination.currentPage === page,
          })}
          onClick={() => push("page", String(page))}
          variant="pagination"
          key={page}
        >
          {page < 10 ? `0${page}` : page}
        </Button>
      ))}
      {pagination.currentPage <= pagination.lastPage - 3 && (
        <>
          <Button disabled variant="pagination">
            ...
          </Button>
          <Button
            onClick={() => push("page", String(pagination.lastPage))}
            variant="pagination"
          >
            {pagination.lastPage < 10
              ? `0${pagination.lastPage} `
              : pagination.lastPage}
          </Button>
        </>
      )}
      <Button
        disabled={pagination.currentPage >= pagination.lastPage}
        onClick={() => push("page", String(pagination.currentPage + 1))}
        variant="pagination"
      >
        <ArrowToggle direction="right" />
      </Button>
    </div>
  );
};

export default Pagination;
