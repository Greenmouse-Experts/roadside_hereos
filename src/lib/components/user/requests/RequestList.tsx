import { FC } from "react";
import { DataTable } from "../../ui/DataTable";
import { createColumnHelper } from "@tanstack/react-table";
import { FormatStatus } from "../../../utils";
import { ServiceItemUser } from "../../../types/service";
import CurveLoader from "../../ui/loader/curveLoader/CurveLoader";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

interface Props {
  status: string;
  data: ServiceItemUser[];
  isLoading: boolean;
}
const RequestList: FC<Props> = ({ status, data, isLoading }) => {
  const navigate = useNavigate()
  // Table components
  const columnHelper = createColumnHelper<ServiceItemUser>();
  const columns = [
    columnHelper.accessor((row) => row.service.name, {
      id: "Service Category",
      cell: (info) => <p className="fw-500 text-pri">{info.getValue()}</p>,
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.location, {
      id: "Service Location",
      cell: (info) => <p className="fw-600">{info.getValue()}</p>,
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
        <p className="fw-600">
          {FormatStatus[info.getValue() as keyof typeof FormatStatus]}
        </p>
      ),
    }),
    columnHelper.accessor((row) => row.id, {
      id: "Action",
      cell: (info) => <p className="fw-600 cursor-pointer underline text-primary" onClick={() => navigate(`/user/requests/${info.getValue()}`)}>View Details</p>,
    }),
  ];
  const dets = data && data?.filter((where) => where.status === status);
  return (
    <div className="lg:p-4 w-full">
      {isLoading && (
        <div className="py-12 flex justify-center items-center text-black">
          <div>
            <div className="place-center">
              <CurveLoader />
            </div>
            <p className="text-center mt-5 fw-500">
              Fetching {status} requests...
            </p>
          </div>
        </div>
      )}
      {!isLoading && data && <DataTable columns={columns} data={dets} />}
    </div>
  );
};

export default RequestList;
