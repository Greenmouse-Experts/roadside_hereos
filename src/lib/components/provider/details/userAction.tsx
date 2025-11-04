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

interface SuspendModalContentProps {
  id: string;
  companyId: string;
  refetch: () => void;
  closeModal: () => void;
  reasonRef: React.MutableRefObject<string | null>;
}

const SuspendModalContent: FC<SuspendModalContentProps> = ({
  id,
  companyId,
  refetch,
  closeModal,
  reasonRef,
}) => {
  const sus = useMutation({
    mutationFn: async (driverId: string) => {
      let resp = await apiClient.post("/company/suspend-driver", {
        driverId: driverId,
        companyId: companyId,
        reason: reasonRef.current || "",
        suspended: true,
      });
      return resp.data;
    },
    mutationKey: ["suspend"],
  });

  const suspendAction = () => {
    if (reasonRef.current === null) {
      toast.error("Please enter a reason");
      return;
    }
    if (reasonRef.current.length < 3) {
      toast.error("Reason must be at least 5 characters");
      return;
    }
    sus.mutate(id || "", {
      onSuccess: (data) => {
        toast.success(data.message);
        refetch();
        closeModal();
        reasonRef.current = null;
      },
      onError: (error: any) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <ReusableModal
      title="Do you want to suspend this driver/provider"
      action={suspendAction}
      closeModal={closeModal}
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
            reasonRef.current = e.target.value;
          }}
          placeholder="reason"
          type="text"
          className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold"
        />
      </div>
    </ReusableModal>
  );
};

interface UnsuspendModalContentProps {
  id: string;
  companyId: string;
  refetch: () => void;
  closeModal: () => void;
  reasonRef: React.MutableRefObject<string | null>;
}

const UnsuspendModalContent: FC<UnsuspendModalContentProps> = ({
  id,
  companyId,
  refetch,
  closeModal,
  reasonRef,
}) => {
  const unsus = useMutation({
    mutationFn: async (driverId: string) => {
      let resp = await apiClient.post("/users/unsuspend-driver/" + driverId, {
        driverId: driverId,
        companyId: companyId,
        reason: reasonRef.current || "",
        suspended: false,
      });
      return resp.data;
    },
    mutationKey: ["unsuspend"],
  });

  const UnsuspendAction = () => {
    unsus.mutate(id || "", {
      onSuccess: (data) => {
        toast.success(data.message);
        refetch();
        closeModal();
      },
      onError: (error: any) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <ReusableModal
      title="Do you want to unsuspend this driver/provider"
      action={UnsuspendAction}
      closeModal={closeModal}
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
            reasonRef.current = e.target.value;
          }}
          placeholder="reason"
          type="text"
          className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold"
        />
      </div>
    </ReusableModal>
  );
};

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
        <SuspendModalContent
          id={id}
          companyId={companyId}
          refetch={refetch}
          closeModal={() => ShowSuspend(false)}
          reasonRef={reason}
        />
      </Suspend>
      <Unsuspend title="" size="sm">
        <UnsuspendModalContent
          id={id}
          companyId={companyId}
          refetch={refetch}
          closeModal={() => ShowUnsuspend(false)}
          reasonRef={reason}
        />
      </Unsuspend>
    </>
  );
};

export default UserAction;
