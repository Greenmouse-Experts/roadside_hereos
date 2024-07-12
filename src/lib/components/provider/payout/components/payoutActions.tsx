import { FC, useState } from "react";
import Button from "../../../ui/Button";
import useDialog from "../../../../hooks/useDialog";
import {
  adminApprovePayout,
  adminIniatePayout,
} from "../../../../services/api/adminApi";
import { toast } from "react-toastify";
import ReusableModal from "../../../ui/ReusableModal";
import { declineStaffRequest } from "../../../../services/api/companyApi";

interface Props {
  id: string;
  status: string;
  refetch: () => void;
}
const PayoutActions: FC<Props> = ({ id, status, refetch }) => {
  const [isBusy, setIsBusy] = useState(false);
  const { Dialog: Approve, setShowModal: ShowApprove } = useDialog();
  const { Dialog: Decline, setShowModal: ShowDecline } = useDialog();

  const handleInitate = async () => {
    await adminIniatePayout(id)
      .then((res) => {
        toast.success(res.message);
        ShowApprove(false);
        refetch();
      })
      .catch((err: any) => {
        toast.error(err.response.data.message);
        setIsBusy(false);
      });
  };

  const handleDecline = async () => {
    setIsBusy(true);
    await declineStaffRequest(id)
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

  const handleApprove = async () => {
    setIsBusy(true);
    if (status === "approved") {
      handleInitate();
    } else {
      await adminApprovePayout(id)
        .then(() => {
          handleInitate();
        })
        .catch((err: any) => {
          toast.error(err.response.data.message);
          setIsBusy(false);
        });
    }
  };
  
  return (
    <>
      <div>
        <div className="fw-600 flex gap-x-3">
          <Button
            title={"Approve"}
            onClick={() => ShowApprove(true)}
            altClassName="py-2 px-5 btn-primary"
          />
          <Button
            title={"Decline"}
            onClick={() => ShowDecline(true)}
            altClassName="py-2 px-5 btn-primary bg-red-600"
          />
        </div>
      </div>
      <Approve title="" size="md">
        <ReusableModal
          title="Are you sure want to Approve this withdrawal request?"
          action={handleApprove}
          actionTitle="Approve"
          cancelTitle="No, Close"
          closeModal={() => ShowApprove(false)}
          isBusy={isBusy}
        />
      </Approve>
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

export default PayoutActions;
