import { Rating } from "@material-tailwind/react";
import { ChangeEvent, FC, useState } from "react";
import TextInput, { InputType } from "../../ui/TextInput";
import {
  clientUpdateService,
  submitReview,
} from "../../../services/api/serviceApi";
import { toast } from "react-toastify";
import { ScaleSpinner } from "../../ui/Loading";
import Button from "../../ui/Button";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";

interface Props {
  id: string;
  close: () => void;
}
const ReviewModal: FC<Props> = ({ id, close }) => {
  const [ratings, setRatings] = useState(0);
  const [showRev, setShowRev] = useState(false);
  const [review, setReview] = useState("");
  const [isBusy, setIsBusy] = useState(false);
  // const review_mutation = useMutation({

  // })
  const handleSubmit = async () => {
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
        setIsBusy(false);
      });
  };

  const handleAction = async () => {
    setIsBusy(true);
    const payload = {
      status: "completed",
    };
    await clientUpdateService(id, payload)
      .then((res) => {
        if (review || ratings) {
          handleSubmit();
        } else {
          toast.success(res.message);
          setIsBusy(false);
          close();
        }
      })
      .catch((err: any) => {
        toast.error(err.response.data.message);
        console.log(err);
        setIsBusy(false);
      });
  };
  return (
    <div>
      <p className="fw-500 text-black">
        We&apos;re glad to have completed your service request please click on
        option to submit a review on the provider who carried out the task.
      </p>
      <div>
        {/*<div className="mb-4 mt-3">
          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              className="w-5 h-5"
              onChange={() => setShowRev(!showRev)}
            />
            <label className="text-black">Submit Provider Review</label>
          </div>
        </div>*/}

        <div>
          <div>
            <TextInput
              label="Review (Required)"
              type={InputType.textarea}
              onChange={(
                e: ChangeEvent<
                  HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
                >,
              ) => setReview(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <p className="mb-1">Rating</p>
            <Rating
              value={ratings}
              onChange={(value: number) => setRatings(value)}
              ratedIcon={<FaStar className="!text-5xl" />}
              unratedIcon={<FaRegStar className="!text-5xl" />}
              className="gap-x-2 text-2xl"
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Button
          onClick={handleAction}
          title={isBusy ? <ScaleSpinner size={14} color="white" /> : "Complete"}
        />
      </div>
    </div>
  );
};

export default ReviewModal;
