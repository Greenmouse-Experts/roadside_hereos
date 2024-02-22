import { Button, Tooltip } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { TbListDetails } from "react-icons/tb";
import { getPendingServices } from "../../../services/api/serviceApi";
import EmptyState from "../../ui/EmptyState";
import CurveLoader from "../../ui/loader/curveLoader/CurveLoader";
import { ServiceRequestItem } from "../../../types/service";
import { MdLocationPin } from "react-icons/md";
import dayjs from "dayjs";

const RenderedServices = () => {
    const { isLoading, data } = useQuery({
        queryKey: ["getServices"],
        queryFn: getPendingServices,
      });
  const colors: string[] = [
    "border-purple-500",
    "border-blue-500",
    "border-yellow-500",
    "border-pink-500",
    "border-orange-500",
  ];
  return (
    <>
      <div>
      {data && !!data?.data.length && (
          <div>
            <EmptyState msg="There's no completed service request" />
          </div>
        )}
        {isLoading && (
          <div className="py-12 flex justify-center items-center text-black">
            <div>
              <div className="place-center">
                <CurveLoader />
              </div>
              <p className="text-center mt-5 fw-500">
                Fetching Rendered Service...
              </p>
            </div>
          </div>
        )}
        {!isLoading &&
          !data.data.length &&
          data?.data?.map((item: ServiceRequestItem, index: number)  => {
          const colorIndex = index % colors.length;
          const color = colors[colorIndex];
          return (
            <div
            key={index}
            className={`border-l-[8px] relative flex items-center justify-between ${color}  p-3 mb-5`}
          >
            <div>
              <p className="fw-600">{item.service.name}</p>
              <p>{item.requestNote}</p>
              <p className="my-1 fs-500 flex gap-x-2 items-center">
                <MdLocationPin className="text-sm text-gray-500" />
                {item.location}
              </p>
              <p className=" fs-300 fw-600 text-primary">
                {dayjs(item.createdAt).format("hh:mma dddd DD, MMMM YYYY")}
              </p>
            </div>
            <div className="flex gap-x-3 ">
              <Tooltip content="View Service Details">
                <Button className="m-0 p-0 shadow-none hover:shadow-none bg-transparent text-black">
                  <TbListDetails className="text-3xl" />
                </Button>
              </Tooltip>
            </div>
          </div>
          );
        })}
      </div>
    </>
  );
};

export default RenderedServices;
