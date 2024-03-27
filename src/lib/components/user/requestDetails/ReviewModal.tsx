import { Rating } from "@material-tailwind/react";
import { ChangeEvent, FC, useState } from "react";
import TextInput, { InputType } from "../../ui/TextInput";
import { submitReview } from "../../../services/api/serviceApi";
import { toast } from "react-toastify";
import { ScaleSpinner } from "../../ui/Loading";
import Button from "../../ui/Button";
import { FaRegStar, FaStar } from "react-icons/fa";

interface Props {
  id: string;
  close: () => void;
}
const ReviewModal: FC<Props> = ({ id, close }) => {
  const [ratings, setRatings] = useState(0);
  const [review, setReview] = useState("");
  const [isBusy, setIsBusy] = useState(false);
  const handleSubmit = async () => {
    setIsBusy(true);
    const payload = {
      serviceRequestId: id,
      rating: ratings,
      comment: review,
    };
    await submitReview(payload)
      .then((res) => {
        toast.success(res.message);
        setIsBusy(false);
        close();
      })
      .catch((err: any) => {
        toast.error(err.response.data.message);
        console.log(err);
        setIsBusy(false);
      });
  };
  return (
    <div>
      <div>
        <TextInput
          label="Review"
          type={InputType.textarea}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setReview(e.target.value)
          }
        />
      </div>
      <div className="mt-4">
        <p className="mb-1">Rating</p>
        <Rating
          value={ratings}
          onChange={(value: number) => setRatings(value)}
          ratedIcon={<FaStar className='text-5xl' />}
          unratedIcon={<FaRegStar className='text-5xl'/>}
          className="gap-x-2 text-2xl scale-110"
        />
      </div>
      <div className="mt-6">
        <Button
          onClick={handleSubmit}
          title={isBusy ? <ScaleSpinner size={14} color="white" /> : "Submit"}
        />
      </div>
    </div>
  );
};

export default ReviewModal;
