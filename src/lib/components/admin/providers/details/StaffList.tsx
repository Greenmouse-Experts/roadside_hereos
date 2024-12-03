import { createColumnHelper } from "@tanstack/react-table";
// import { DataTable } from "../../ui/DataTable";
// import ProfileAvatar from "../../ui/ProfileAvatar";
import dayjs from "dayjs";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { BsArrowsExpand, BsThreeDotsVertical } from "react-icons/bs";
// import { FormatStatus } from "../../../utils";
import { useNavigate } from "react-router-dom";
// import { GetInvitedItem, StaffItem } from "../../../types/company";
import { FC, useState } from "react";
import { StaffItem } from "../../../../types/company";
import ProfileAvatar from "../../../ui/ProfileAvatar";
import { FormatStatus } from "../../../../utils";
import { DataTable } from "../../../ui/DataTable";
import SuspendModal from "./SuspendModal";
import useModal from "../../../../hooks/useModal";
import ReusableModal from "../../../ui/ReusableModal";
import { useMutation } from "@tanstack/react-query";
import { unsuspendUser } from "../../../../services/api/usersApi";
import { toast } from "react-toastify";

interface Props {
  data: any;
  refetch: () => void;
}
const StaffList: FC<Props> = ({ data, refetch }) => {
  const [isBusy, setIsBusy] = useState(false);
  const { Modal: Suspend, setShowModal: ShowSuspend } = useModal();
  const { Modal: Unsuspend, setShowModal: ShowUnsuspend } = useModal();

  const unsus = useMutation({
    mutationFn: unsuspendUser,
    mutationKey: ["unsuspend"],
  });

  const UnsuspendAction = () => {
    const payload = {
      userId: data[0].id,
    };
    unsus.mutate(payload, {
      onSuccess: (data) => {
        toast.success(data.message);
        setIsBusy(false);
        refetch();
        ShowUnsuspend(false);
      },
      onError: (error) => {
        toast.error(error.message);
        setIsBusy(false);
      },
    });
  };

  const navigate = useNavigate();
  const gotoDetails = (item: string) => {
    navigate(`/admin/providers/staff/${item}`);
  };
  // Table components
  const columnHelper = createColumnHelper<StaffItem>();
  const columns = [
    columnHelper.accessor((row) => row.fname, {
      id: "Name",
      cell: (info) => (
        <div className="flex gap-x-2 items-center">
          <ProfileAvatar
            name={`${info.getValue()} ${info.row.original.lname}`}
            size={35}
            font={15}
          />
          <p className="fw-600 text-primary">{`${info.getValue()} ${
            info.row.original.lname
          }`}</p>
        </div>
      ),
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.email, {
      id: "Email",
      cell: (info) => <>{info.getValue()}</>,
      header: (info) => info.column.id,
    }),
    // columnHelper.accessor((row) => row.skill, {
    //   id: "Service Category",
    //   cell: (info) => <>{info.getValue().map((item:string) => <p className="flex gap-x-1 items-center fs-500 fw-500"><span className="w-2 h-2 circle bg-orange-500"></span>{item}</p>)}</>,
    //   header: (info) => info.column.id,
    // }),
    columnHelper.accessor((row) => row.createdAt, {
      id: "Joined On",
      cell: (info) => <>{dayjs(info.getValue()).format("DD  MMMM YYYY")}</>,
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.isSuspended, {
      id: "Status",
      cell: (info) => (
        <>
          {info.getValue() ? FormatStatus["inactive"] : FormatStatus["active"]}
        </>
      ),
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.id, {
      id: "Action",
      header: (info) => info.column.id,
      cell: (info) => (
        <>
          <Menu placement="bottom-end">
            <MenuHandler>
              <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none capitalize">
                <BsThreeDotsVertical className="text-xl text-black" />
              </Button>
            </MenuHandler>
            <MenuList className="">
              <MenuItem
                className="my-1 fw-500 flex items-center gap-x-2 pt-1"
                onClick={() => gotoDetails(info.getValue())}
              >
                <BsArrowsExpand /> View Details
              </MenuItem>
              {!data[0].isSuspended && (
                <MenuItem
                  className="my-1 fw-500 flex items-center gap-x-2 pt-1"
                  onClick={() => ShowSuspend(true)}
                >
                  Suspend
                </MenuItem>
              )}
              {data[0].isSuspended && (
                <MenuItem
                  className="my-1 fw-500 flex items-center gap-x-2 pt-1"
                  onClick={() => ShowUnsuspend(true)}
                >
                  UnSuspend
                </MenuItem>
              )}
            </MenuList>
          </Menu>

          <Suspend title="Suspend Driver" size="sm" type="withCancel">
            <SuspendModal
              id={data[0].id}
              close={() => ShowSuspend(false)}
              refetch={refetch}
            />
          </Suspend>

          <Unsuspend title="" size="sm">
            <ReusableModal
              title="Do you want to unsuspend this driver"
              action={UnsuspendAction}
              closeModal={() => ShowUnsuspend(false)}
              actionTitle="Unsuspend"
              cancelTitle="Close"
              isBusy={isBusy}
            />
          </Unsuspend>
        </>
      ),
    }),
  ];
  return (
    <>
      <div>{!!data.length && <DataTable columns={columns} data={data} />}</div>
    </>
  );
};

export default StaffList;
