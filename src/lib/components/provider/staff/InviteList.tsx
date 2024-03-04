import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../../ui/DataTable";
import ProfileAvatar from "../../ui/ProfileAvatar";
import dayjs from "dayjs";
import { FormatStatus } from "../../../utils";
import { GetInvitedItem } from "../../../types/company";
import { FC } from "react";

interface Props {
  data: GetInvitedItem[]
}
const InviteList:FC<Props> = (data) => {
    // Table components
  const columnHelper = createColumnHelper<GetInvitedItem>();
  const columns = [
    columnHelper.accessor((row) => row.first_name, {
      id: "Name",
      cell: (info) => (
        <div className="flex gap-x-2 items-center">
          <ProfileAvatar
            name={`${info.getValue()} ${info.row.original.last_name}`}
            size={35}
            font={15}
          />
          <p className="fw-600 text-primary">{`${info.getValue()} ${info.row.original.last_name}`}</p>
        </div>
      ),
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.email, {
      id: "Email",
      cell: (info) => <>{info.getValue()}</>,
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.createdAt, {
      id: "Joined On",
      cell: (info) => <>{dayjs(info.getValue()).format("DD  MMMM YYYY")}</>,
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.status, {
        id: "Status",
        cell: (info) => <>{FormatStatus[info.getValue() as keyof typeof FormatStatus]}</>,
        header: (info) => info.column.id,
      }),
  ];
  return (
    <>
        <div>
        {!!data.data.length && <DataTable
          columns={columns}
          data={data.data}
        />}
      </div>
    </>
  )
}

export default InviteList