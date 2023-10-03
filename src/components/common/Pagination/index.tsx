// import { Fragment } from "react";
import { TUsePagination, usePagination } from "../../../hooks/paginationHooks";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import PaginationChevron from "./PaginationChevron";

interface TProps extends TUsePagination {
  position?: "center" | "right" | "left";
  onPageChange: (page: number) => unknown | Promise<unknown>;
}

const Pagination = ({
  currentPage,
  pageSize,
  totalCount,
  onPageChange,
  position = "right",
}: TProps) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const pages = usePagination({ currentPage, pageSize, totalCount });
  return (
    <div
      className={`
        pagination-parent
        pagination-parent-${position}
    `}
    >
      <div className={`pagination`}>
        <PaginationChevron
          Chevron={BsChevronLeft}
          disabled={currentPage == 1}
          onClick={() => {
            if (currentPage != 1) {
              onPageChange(currentPage - 1);
            }
          }}
        />
        <div className="pagination-pages">
          {pages.map((page, index) => {
            if (page === ".") {
              return (
                <span className="pagination-dots" key={`${page}-${index}`}>
                  {"..."}
                </span>
              );
            }
            return (
              <button
                className={`
                pagination-page-button
                ${currentPage == page ? "active" : ""}
              `}
                key={page}
                onClick={() => onPageChange(page as number)}
              >
                {page}
              </button>
            );
          })}
        </div>
        <PaginationChevron
          Chevron={BsChevronRight}
          disabled={currentPage == totalPages}
          onClick={() => {
            if (currentPage != totalPages) {
              onPageChange(currentPage + 1);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Pagination;
