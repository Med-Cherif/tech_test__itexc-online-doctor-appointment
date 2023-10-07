import DataTable, { TableProps } from "react-data-table-component";
import Pagination from "../Pagination";
import Skeleton from "../Skeleton";

interface TProps extends TableProps<unknown> {
  isLoading?: boolean;
}

const DataTableComponent = ({ isLoading, ...props }: TProps) => {
  return (
    <DataTable
      progressComponent={<Skeleton className="table-skeleton" />}
      progressPending={isLoading}
      // paginationDefaultPage={}
      // pagination
      paginationComponent={({
        currentPage,
        rowCount,
        rowsPerPage,
        onChangePage,
      }) => {
        return (
          <Pagination
            onPageChange={(page) => {
              onChangePage(page, rowCount);
            }}
            currentPage={currentPage}
            totalCount={rowCount}
            pageSize={rowsPerPage}
          />
        );
      }}
      {...props}
    />
  );
};

export default DataTableComponent;
