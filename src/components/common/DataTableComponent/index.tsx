import DataTable, { TableProps } from "react-data-table-component";

const DataTableComponent = ({ ...props }: TableProps<unknown>) => {
  return (
    <DataTable
      //   paginationComponent={() => {
      //     return <>Hello</>;
      //   }}
      {...props}
    />
  );
};

export default DataTableComponent;
