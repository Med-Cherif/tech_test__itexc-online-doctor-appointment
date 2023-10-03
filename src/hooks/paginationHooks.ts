import { useMemo, useState } from "react";
import range from "../helpers/range";

export interface TUsePagination {
  currentPage: number;
  pageSize: number;
  totalCount: number;
}

export function usePagination({
  currentPage,
  pageSize,
  totalCount,
}: TUsePagination) {
  return useMemo(() => {
    const totalPages = Math.ceil(totalCount / pageSize);

    const maxPages = 5;

    if (totalPages <= maxPages) {
      return range(1, totalPages);
    } else {
      const shouldShowRightDots = currentPage <= 3;
      const shouldShowLeftDots = currentPage >= totalPages - 2;
      if (shouldShowRightDots) {
        return [...range(1, 4), ".", totalPages];
      } else if (shouldShowLeftDots) {
        return [1, ".", ...range(totalPages - 3, totalPages)];
      } else {
        return [
          1,
          ".",
          ...range(currentPage - 1, currentPage + 1),
          ".",
          totalPages,
        ];
      }
    }
  }, [currentPage, pageSize, totalCount]);
}

export function usePaginationState(currentPage = 1) {
  const [page, setPage] = useState(currentPage);

  const onPageChange = (p: number) => {
    setPage(p);
  };

  return {
    page,
    onPageChange,
  };
}

export function usePaginationData<T>(data: T[], pageSize = 10) {
  const { page, onPageChange } = usePaginationState(1);

  const from = (page - 1) * pageSize;
  const to = from + pageSize;
  const totalCount = data.length;

  const paginatedData = [...data.slice(from, to)];

  return {
    data: paginatedData,
    page,
    totalCount,
    onPageChange,
  };
}
