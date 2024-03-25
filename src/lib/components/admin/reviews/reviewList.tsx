import { FC } from "react";
import { ReviewItem } from "../../../types/routine";
import { Rating } from "@material-tailwind/react";
import dayjs from "dayjs";

interface Props {
  data: any[];
}
const ReviewList: FC<Props> = ({ data }) => {
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
      {data.length &&
        data.map((item: ReviewItem, index) => {
          const colorIndex = index % colors.length;
          const color = colors[colorIndex];
          return (
            <div
              key={index}
              className={`border-l-[8px] relative flex items-center justify-between ${color}  p-3 mb-5`}
            >
              <div className="flex w-full justify-end gap-x-5">
                <div className="w-8/12">
                  <p className="fw-600">{`${item.user.fname} ${item.user.lname}`}</p>
                  <p>{item.comment}</p>
                  <div>
                    <Rating value={5} readonly/>
                  </div>
                  <p>{dayjs(item.createdAt).format('ddd DD, MMM YYYY')}</p>
                </div>
                <div className="border-l pl-4 w-4/12 p-2">
                  <p className="fw-600">{`${item.vendor.fname} ${item.vendor.lname}`}</p>
                  <div className="mt-2">
                    <Rating value={4} readonly/>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ReviewList;
