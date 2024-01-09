import { DataTable } from "../../ui/DataTable";
import { createColumnHelper } from "@tanstack/react-table";

const CategoryList = () => {
  interface PropsCheck {
    name: string;
    id: string;
    status: string;
    date: string;
  }
  const datas = [
    {
      name: "Battery Charge",
      id: "39238jjes",
      status: "active",
      date: "10-12-2023",
    },
    {
      name: "Battery Charge",
      id: "39238jjes",
      status: "active",
    },
  ];
  // Table components
  const columnHelper = createColumnHelper<PropsCheck>();
  const columns = [
    columnHelper.accessor((row) => row.name, {
      id: "Transaction ID",
      cell: (info) => <p className="fw-600 text-pri">{info.getValue()}</p>,
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.id, {
      id: "description",
      header: "Description",
      cell: (info) => <>{info.getValue()}</>,
    }),
  ];
  return (
    <div className="lg:p-4 w-full">
      <DataTable
        columns={columns}
        data={datas}
        prev={() => false}
        next={() => false}
        gotoPage={() => false}
        pageCount={0}
        currentPage={0}
        total={0}
      />
    </div>
  );
};

export default CategoryList;
