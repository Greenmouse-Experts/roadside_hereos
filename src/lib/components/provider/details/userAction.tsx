import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { FC, useRef, useCallback } from "react";
import { BsArrowsExpand, BsThreeDotsVertical } from "react-icons/bs";
import { toast } from "react-toastify";
import useModal from "../../../hooks/useModal";
import { useMutation } from "@tanstack/react-query";
import ReusableModal from "../../ui/ReusableModal";
import { FormatStatus } from "../../../utils";
import { apiClient } from "../../../services/api/serviceApi";

interface Props {
  id: string;
  refetch: () => void;
  suspended: boolean;
  companyId: string;
}
const UserAction: FC<Props> = ({ id, refetch, suspended, companyId }) => {
  const { Modal: Suspend, setShowModal: ShowSuspend } = useModal();
  const { Modal: Unsuspend, setShowModal: ShowUnsuspend } = useModal();
  const reason = useRef<string | null>(null);
  const sus = useMutation({
    mutationFn: async (id: string) => {
      let resp = await apiClient.post("/company/suspend-driver", {
        driverId: id,
        companyId: companyId,
        reason: reason.current || "",
        suspended: true,
      });
      return resp.data;
    },
    mutationKey: ["suspend"],
  });
  const unsus = useMutation({
    mutationFn: async (id: string) => {
      let resp = await apiClient.post("/users/unsuspend-driver/" + id, {
        driverId: id,
        companyId: companyId,
        reason: reason.current || "",
        suspended: false,
      });
      return resp.data;
    },
    mutationKey: ["unsuspend"],
  });
  const suspendAction = useCallback(() => {
    if (reason.current === null) {
      toast.error("Please enter a reason");
      return;
    }
    if (reason.current.length < 3) {
      toast.error("Reason must be at least 5 characters");
      return;
    }
    sus.mutate(id || "", {
      onSuccess: (data) => {
        toast.success(data.message);
        refetch();
        ShowSuspend(false); // Changed to Suspend modal
        reason.current = null;
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  }, [id, refetch, sus, ShowSuspend]);

  const UnsuspendAction = useCallback(() => {
    unsus.mutate(id || "", {
      onSuccess: (data) => {
        toast.success(data.message);
        refetch();
        ShowUnsuspend(false);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  }, [id, refetch, unsus, ShowUnsuspend]);

  const SuspendModalContent = useCallback(
    () => (
      <ReusableModal
        title="Do you want to suspend this driver/provider"
        action={() => suspendAction()}
        closeModal={() => ShowSuspend(false)}
        actionTitle="Suspend"
        cancelTitle="Close"
        isBusy={sus.isPending}
      >
        <div className="space-y-2 py-4">
          <label htmlFor="" className="font-bold">
            Reason
          </label>
          <input
            onChange={(e) => {
              reason.current = e.target.value;
            }}
            placeholder="reason"
            type="text"
            className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </ReusableModal>
    ),
    [suspendAction, ShowSuspend, sus.isPending],
  );

  const UnsuspendModalContent = useCallback(
    () => (
      <ReusableModal
        title="Do you want to unsuspend this driver/provider"
        action={UnsuspendAction}
        closeModal={() => ShowUnsuspend(false)}
        actionTitle="Unsuspend"
        cancelTitle="Close"
        isBusy={unsus.isPending}
      >
        <div className="space-y-2 py-4">
          <label htmlFor="" className="font-bold">
            Reason
          </label>
          <input
            onChange={(e) => {
              reason.current = e.target.value;
            }}
            placeholder="reason"
            type="text"
            className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </ReusableModal>
    ),
    [UnsuspendAction, ShowUnsuspend, unsus.isPending],
  );

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
            {!suspended && (
              <MenuItem
                className="my-1 fw-500 flex items-center gap-x-2 pt-1"
                onClick={() => ShowSuspend(true)}
              >
                <BsArrowsExpand /> Suspend User
              </MenuItem>
            )}
            {suspended && (
              <MenuItem
                className="my-1 fw-500 flex items-center gap-x-2 pt-1"
                onClick={() => ShowUnsuspend(true)}
              >
                <BsArrowsExpand /> Unuspend User
              </MenuItem>
            )}
          </MenuList>
        </Menu>
      </div>
      <Suspend title="" size="sm">
        <SuspendModalContent />
      </Suspend>
      <Unsuspend title="" size="sm">
        <UnsuspendModalContent />
      </Unsuspend>
    </>
  );
};

export default UserAction;
