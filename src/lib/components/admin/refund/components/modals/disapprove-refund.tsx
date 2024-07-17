import { FC, useState } from "react";
import Button from "../../../../ui/Button";
import { BeatLoader } from "react-spinners";
import { disapproveRefund } from "../../../../../services/api/adminApi";
import { toast } from "react-toastify";

interface Props {
  id: string;
  close: () => void;
  refetch: () => void;
}
const DisapproveModal:FC<Props> = ({id, close, refetch}) => {
    const [reason, setReason] = useState('')
    const [isBusy, setIsBusy] = useState(false)
     const handleDecline = async () => {
       setIsBusy(true);
       const payload = {
        reason: reason
       }
       await disapproveRefund(id, payload)
         .then((res) => {
           toast.success(res.message);
           refetch();
           close()
         })
         .catch((err: any) => {
           toast.error(err.response.data.message);
           setIsBusy(false);
         });
     };
  return (
    <div>
      <div>
        <p>Reason for Disapproval</p>
        <textarea
          onChange={(e) => setReason(e.target.value)}
          className="p-2 mt-3 h-24 rounded-lg w-full border border-gray-400"
        />
      </div>
      <div className="mt-7 flex justify-between">
        <Button
          title={"Close"}
          onClick={close}
          altClassName="px-6 bg-red-500 text-white py-3 rounded-lg fw-600"
        />
        <Button
          title={isBusy ? <BeatLoader /> : "Disapprove"}
          onClick={handleDecline}
          altClassName="px-6 bg-primary text-white py-3 rounded-lg fw-600"
        />
      </div>
    </div>
  );
}

export default DisapproveModal