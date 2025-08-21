import { FC, useState } from "react";
import Button from "../../../../ui/Button";
import {
  approveRefund,
  initiateRefund,
} from "../../../../../services/api/adminApi";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";

interface Props {
  id: string;
  close: () => void;
  refetch: () => void;
  status: string;
}
const ApproveRefund: FC<Props> = ({ id, close, refetch, status }) => {
  const [amt, setAmt] = useState("");
  const [isBusy, setIsBusy] = useState(false);
  console.log(status);

  const handleInitate = async () => {
    const payload = {
      refundReqId: id,
      amountToClient: Number(amt),
    };
    await initiateRefund(payload)
      .then((res) => {
        toast.success(res.message);
        refetch();
        close();
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
      await approveRefund(id)
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
    <div>
      <div>
        <p>Refund Amount</p>
        <input
          type="number"
          onChange={(e) => setAmt(e.target.value)}
          className="p-2 mt-3 rounded-lg w-full border border-gray-400"
        />
      </div>
      <div className="mt-7 flex justify-between">
        <Button
          title={"Close"}
          onClick={close}
          altClassName="px-6 bg-red-500 text-white py-3 rounded-lg fw-600"
        />
        <Button
          title={isBusy ? <BeatLoader /> : "Approve"}
          onClick={handleApprove}
          altClassName="px-6 bg-primary text-white py-3 rounded-lg fw-600"
        />
      </div>
    </div>
  );
};

export default ApproveRefund;
