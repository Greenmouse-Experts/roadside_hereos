import { ChangeEvent, FC, useState } from "react";
import { submitQuery } from "../../../services/api/serviceApi";
import { toast } from "react-toastify";
import TextInput, { InputType } from "../../ui/TextInput";
import Button from "../../ui/Button";
import { ScaleSpinner } from "../../ui/Loading";

interface Props {
  id: string;
  refetch: () => void;
  close: () => void;
}
const QueryModal: FC<Props> = ({ id, close, refetch }) => {
  const [review, setReview] = useState("");
  const [isBusy, setIsBusy] = useState(false);
  const handleSubmit = async () => {
    setIsBusy(true);
    const payload = {
      queryNote: review,
    };
    await submitQuery(id, payload)
      .then((res) => {
        toast.success(res.message);
        setIsBusy(false);
        refetch();
        close();
      })
      .catch((err: any) => {
        toast.error(err.response.data.message);
        setIsBusy(false);
      });
  };
  return (
    <div>
      <p className="fw-500 text-black mt-3">
        We&apos;re sorry for any mishap, please kindly submit a detailed description of the event.
      </p>
      <div>
        <TextInput
          label="Query"
          type={InputType.textarea}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setReview(e.target.value)
          }
        />
      </div>
      <div className="mt-6">
        <Button
          onClick={handleSubmit}
          title={isBusy ? <ScaleSpinner size={14} color="white" /> : "SUBMIT"}
        />
      </div>
    </div>
  );
};

export default QueryModal;
