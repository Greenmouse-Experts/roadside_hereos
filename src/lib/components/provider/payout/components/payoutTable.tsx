import { createColumnHelper } from "@tanstack/react-table";
import dayjs from "dayjs";
import { FC } from "react";
import { DynamicTable } from "../../../ui/DynamicTable";
import { FormatStatus, formatAsNgnMoney } from "../../../../utils";
import { PayoutItem } from "../../../../types/payment";
import PayoutActions from "./payoutActions";

interface Props {
  isLoading: boolean;
  data: PaymentItem[];
  count: number;
  page: number;
  next: () => void;
  prev: () => void;
  refetch: () => void;
}
const PayoutTable: FC<Props> = ({
  data,
  count,
  page,
  next,
  prev,
  refetch,
}) => {
  // Table components
  const columnHelper = createColumnHelper<PayoutItem>();
  const columns = [
    columnHelper.accessor((row) => row.fname, {
      id: "Staff Name",
      cell: (info) => <p className="fw-600">{`${info.getValue()} ${info.row.original.lname}`}</p>,
    }),
    columnHelper.accessor((row) => row.amount, {
      id: "Requested Amount",
      cell: (info) => (
        <p className="fw-600">{formatAsNgnMoney(info.getValue())}</p>
      ),
    }),
    columnHelper.accessor((row) => row.walletBal, {
      id: "Wallet Balance",
      cell: (info) => <p className="">{info.getValue()}</p>,
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.payoutCreatedAt, {
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
        <>{FormatStatus[info.getValue() as keyof typeof FormatStatus]}</>
      ),
    }),
    columnHelper.accessor((row) => row.PayoutRequestId, {
      id: "Action",
      header: (info) => info.column.id,
      cell: (info) => (
        <>
          {info.row.original.status === "pending" || info.row.original.status === "approved" ? (
            <PayoutActions
              id={info.getValue()}
              status={info.row.original.status}
              refetch={refetch}
            />
          )
            :
            <></>}
        </>
      ),
    }),
  ];
  return (
    <>
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
    </>
  );
};

export default PayoutTable;
