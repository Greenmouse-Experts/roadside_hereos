import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { getDriverReviews } from "../../../../services/api/companyApi";
import { ReviewItem } from "../../../../types/routine";
import { Rating } from "@material-tailwind/react";
import dayjs from "dayjs";

interface Props {
  id: string;
}
const ViewReviewsModal: FC<Props> = ({ id }) => {
  const {data, } = useQuery({
    queryKey: ['driverReview'],
    queryFn: () => getDriverReviews(id)
  })
  const colors: string[] = [
    "border-purple-500",
    "border-blue-500",
    "border-yellow-500",
    "border-pink-500",
    "border-orange-500",
    "border-red-500",
    "border-brown-500",
  ];
  return (
    <div>
      <div className="max-h-[400px] overflow-y-auto">
      {!!data?.data?.length &&
        data?.data?.map((item: ReviewItem, index:number) => {
          const colorIndex = index % colors.length;
          const color = colors[colorIndex];
          return (
            <div
              key={index}
              className={`border-l-[8px] relative flex items-center justify-between ${color}  p-2 mb-3`}
            >
              <div className="">
                <div className="">
                  <p className="fw-600 fs-500">{`${item.user.fname} ${item.user.lname}`}</p>
                  <p className="fs-500">{item.comment}</p>
                  <div>
                    <Rating value={Number(item.rating)} readonly/>
                  </div>
                  <p className="fs-300">{dayjs(item.createdAt).format('ddd DD, MMM YYYY')}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
    </div>
  );
};

export default ViewReviewsModal;
