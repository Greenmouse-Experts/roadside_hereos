import {
    Button,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
  } from "@material-tailwind/react";
import { FC } from "react";
import { BsArrowsExpand, BsThreeDotsVertical } from "react-icons/bs";
import { toast } from "react-toastify";
import { useState } from "react";
import useModal from "../../../hooks/useModal";
import { useMutation } from "@tanstack/react-query";
import ReusableModal from "../../ui/ReusableModal";
import { suspendDriver, unsuspendDriver } from "../../../services/api/companyApi";
import { FormatStatus } from "../../../utils";

  interface Props {
    id: string
    refetch: () => void
    suspended: boolean
  }
const UserAction:FC<Props> = ({id, refetch, suspended}) => {
   const { Modal: Suspend, setShowModal: ShowSuspend } = useModal();
  const { Modal: Unsuspend, setShowModal: ShowUnsuspend } = useModal();
  const [isBusy, setIsBusy] = useState(false);
  const sus = useMutation({
    mutationFn: suspendDriver,
    mutationKey: ["unsuspend"],
  });
  const suspendAction = () => {
    sus.mutate(id || '', {
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
  const unsus = useMutation({
    mutationFn: unsuspendDriver,
    mutationKey: ["unsuspend"],
  });
  const UnsuspendAction = () => {
    unsus.mutate(id || '', {
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
  return (
    <>
        <div className="flex items-center gap-x-2">
        {suspended ? FormatStatus["inactive"] : FormatStatus["active"]}
        <Menu placement="bottom-end">
            <MenuHandler>
              <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none capitalize">
                <BsThreeDotsVertical className="text-xl text-black" />
              </Button>
            </MenuHandler>
            <MenuList className="">
              {!suspended && <MenuItem
                className="my-1 fw-500 flex items-center gap-x-2 pt-1"
                onClick={() => suspendAction()}
              >
                <BsArrowsExpand/> Suspend User
              </MenuItem>}
              {suspended && <MenuItem
                className="my-1 fw-500 flex items-center gap-x-2 pt-1"
                onClick={() => UnsuspendAction()}
              >
                <BsArrowsExpand/> Unuspend User
              </MenuItem>}
            </MenuList>
          </Menu>
        </div>
        <Suspend title="" size="sm">
        <ReusableModal
          title="Do you want to unsuspend this driver/provider"
          action={suspendAction}
          closeModal={() => ShowSuspend(false)}
          actionTitle="Unsuspend"
          cancelTitle="Close"
          isBusy={isBusy}
        />
        </Suspend>
      <Unsuspend title="" size="sm">
        <ReusableModal
          title="Do you want to unsuspend this driver/provider"
          action={UnsuspendAction}
          closeModal={() => ShowUnsuspend(false)}
          actionTitle="Unsuspend"
          cancelTitle="Close"
          isBusy={isBusy}
        />
      </Unsuspend>
    </>
  )
}

export default UserAction