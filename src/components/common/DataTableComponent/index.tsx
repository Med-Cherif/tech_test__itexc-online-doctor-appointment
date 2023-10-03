import DataTable, { TableProps } from "react-data-table-component";
import Pagination from "../Pagination";

const DataTableComponent = ({ ...props }: TableProps<unknown>) => {
  return (
    <DataTable
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
