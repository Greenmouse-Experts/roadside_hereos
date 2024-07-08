import { createColumnHelper } from "@tanstack/react-table";
import dayjs from "dayjs";
import { FC, useState } from "react";
import { PayoutItem } from "../../../../types/payment";
import { FormatStatus, formatAsNgnMoney } from "../../../../utils";
import { DynamicTable } from "../../../ui/DynamicTable";
import Button from "../../../ui/Button";
import useDialog from "../../../../hooks/useDialog";
import { adminDeclinePayoutRequests } from "../../../../services/api/adminApi";
import { toast } from "react-toastify";
import ReusableModal from "../../../ui/ReusableModal";

interface Props {
  isLoading: boolean;
  data: PaymentItem[];
  count: number;
  page: number;
  next: () => void;
  prev: () => void;
  refetch: () => void;
}
const PayoutTable: FC<Props> = ({ data, count, page, next, prev, refetch }) => {
  // modals
  const [isBusy, setIsBusy] = useState(false);
  // const { Dialog, setShowModal } = useDialog();
  const { Dialog: Decline, setShowModal: ShowDecline } = useDialog();
  const [selectedId, setSelectedId] = useState("");
  const openDecline = (item: string) => {
    setSelectedId(item);
    ShowDecline(true);
  };
  const handleDecline = async () => {
    setIsBusy(true);
    await adminDeclinePayoutRequests(selectedId)
      .then((res) => {
        toast.success(res.message);
        ShowDecline(false);
        refetch();
      })
      .catch((err: any) => {
        toast.error(err.response.data.message);
        setIsBusy(false);
      });
  };
  // Table components
  const columnHelper = createColumnHelper<PayoutItem>();
  const columns = [
    columnHelper.accessor((row) => row.name, {
      id: "Provider Name",
      cell: (info) => <p className="fw-600">{info.getValue()}</p>,
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
        <>{FormatStatus[info.getValue() as keyof typeof FormatStatus]}</>
      ),
    }),
    columnHelper.accessor((row) => row.PayoutRequestId, {
      id: "Action",
      header: (info) => info.column.id,
      cell: (info) => (
        <div className="fw-600 flex gap-x-3">
          <Button title={"Approve"} altClassName="py-2 px-5 btn-primary" />
          <Button
            title={"Decline"}
            onClick={() => openDecline(info.getValue())}
            altClassName="py-2 px-5 btn-primary bg-red-600"
          />
        </div>
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
      <Decline title="" size="md">
        <ReusableModal
          title="Are you sure want to decline this withdrawal request?"
          action={handleDecline}
          actionTitle="Decline"
          cancelTitle="No, Close"
          closeModal={() => ShowDecline(false)}
          isBusy={isBusy}
        />
      </Decline>
    </>
  );
};

export default PayoutTable;
