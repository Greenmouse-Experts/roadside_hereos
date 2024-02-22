import { Button, Tooltip } from "@material-tailwind/react";
import { TbListDetails } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";
import { getPendingServices } from "../../../services/api/serviceApi";
import { ServiceRequestItem } from "../../../types/service";
import dayjs from "dayjs";
import CurveLoader from "../../ui/loader/curveLoader/CurveLoader";
import { MdLocationPin } from "react-icons/md";
import EmptyState from "../../ui/EmptyState";
import useModal from "../../../hooks/useModal";
import RequestDetailsModal from "./RequestDetailsModal";
import { useState } from "react";

const PendingService = () => {
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
  const {Modal, setShowModal} = useModal()
  const [selected, setSelected] = useState<ServiceRequestItem>()
  const openDetails = (item:ServiceRequestItem) => {
    setSelected(item)
    setShowModal(true)
  }
  return (
    <>
      <div className="p-3 lg:p-6">
        {data && !data?.data.length && (
          <div>
            <EmptyState msg="There's no pending request currently on the system." />
          </div>
        )}
        {isLoading && (
          <div className="py-12 flex justify-center items-center text-black">
            <div>
              <div className="place-center">
                <CurveLoader />
              </div>
              <p className="text-center mt-5 fw-500">
                Fetching Pending Service Requests...
              </p>
            </div>
          </div>
        )}
        {!isLoading &&
          data &&
          data?.data?.map((item: ServiceRequestItem, index: number) => {
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
                    <Button className="m-0 p-0 shadow-none hover:shadow-none bg-transparent text-black" onClick={() => openDetails(item)}>
                      <TbListDetails className="text-3xl" />
                    </Button>
                  </Tooltip>
                </div>
              </div>
            );
          })}
      </div>
      <Modal title="Service Details" size="md" type="withCancel">
        <RequestDetailsModal item={selected}/>
      </Modal>
    </>
  );
};

export default PendingService;
