import { createColumnHelper } from "@tanstack/react-table";
import { FormatStatus } from "../../../utils";
import dayjs from "dayjs";
import { FC } from "react";
import { DynamicTable } from "../../ui/DynamicTable";

interface Props {
  isLoading: boolean;
  data: any[];
  count: number;
  page: number;
  next: () => void;
  prev: () => void;
}
const PaymentListing: FC<Props> = ({ data, count, page, prev, next }) => {
  // Table components
  const columnHelper = createColumnHelper<any>();
  const columns = [
    columnHelper.accessor((row) => row.ref, {
      id: "Payment Reference",
      cell: (info) => <p className="fw-600">{info.getValue()}</p>,
    }),
    columnHelper.accessor((row) => row.type, {
      id: "Payment Type",
      cell: (info) => <p className="fw-600">{info.getValue()}</p>,
    }),
    columnHelper.accessor((row) => row.service_name, {
      id: "Service Category",
      cell: (info) => <p className="">{info.getValue()}</p>,
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.createdAt, {
      id: "Date Requested",
      header: (info) => info.column.id,
      cell: (info) => (
        <p className="fw-600">
          {dayjs(info.getValue()).format("ddd DD, MMM YYYY")}
        </p>
      ),
    }),
    columnHelper.accessor((row) => row.status, {
      id: "Status",
      header: (info) => info.column.id,
      cell: (info) => (
        <div className="fw-600">
          {FormatStatus[info.getValue() as keyof typeof FormatStatus]}
        </div>
      ),
    }),
  ];
  return (
    <div className="lg:p-4 w-full">
      <DynamicTable
        columns={columns}
        data={data}
        count={count}
        prev={prev}
        next={next}
        page={page}
      />
    </div>
  );
};

export default PaymentListing;
