import { Button, Tooltip } from "@material-tailwind/react";
import { TbListDetails } from "react-icons/tb";
import { ServiceRequestItem } from "../../../types/service";
import dayjs from "dayjs";
import { MdLocationPin } from "react-icons/md";
import useModal from "../../../hooks/useModal";
import RequestDetailsModal from "./RequestDetailsModal";
import {  useState } from "react";
import { toast } from "react-toastify";
import { fetchAdminRequests } from "../../../services/api/serviceApi";
import { useQuery } from "@tanstack/react-query";
import EmptyState from "../../ui/EmptyState";
import CurveLoader from "../../ui/loader/curveLoader/CurveLoader";

const AdminCompletedService = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getServices", 'completed'],
    queryFn: () => fetchAdminRequests("completed"),
  });
  const colors: string[] = [
    "border-purple-500",
    "border-blue-500",
    "border-yellow-500",
    "border-pink-500",
    "border-orange-500",
  ];
  const { Modal, setShowModal } = useModal();
  const [selected, setSelected] = useState<ServiceRequestItem>();
  const openDetails = (item: ServiceRequestItem) => {
    setSelected(item);
    setShowModal(true);
  };
  const [{ start, stop, page }, setPage] = useState({
    start: 0,
    stop: 6,
    page: 1,
  });
  const handleNext = () => {
    if (stop >= data?.data?.length) {
      toast.info("This is the last page");
    } else {
      setPage({
        start: start + 6,
        stop: stop + 6,
        page: page + 1,
      });
    }
  };
  const handlePrev = () => {
    if (page === 1) {
      toast.info("This is the first page");
    } else {
      setPage({
        start: start - 6,
        stop: stop - 6,
        page: page - 1,
      });
    }
  };
  return (
    <>
      <div>
        {data && !data?.data?.length && (
          <div>
            <EmptyState msg="There's no completed request currently on the system." />
          </div>
        )}
        {isLoading && (
          <div className="py-12 flex justify-center items-center text-black">
            <div>
              <div className="place-center">
                <CurveLoader />
              </div>
              <p className="text-center mt-5 fw-500">
                Fetching Completed Service Requests...
              </p>
            </div>
          </div>
        )}
        {data &&
          !!data?.data.length &&
          data?.data
            ?.slice(start, stop)
            .map((item: ServiceRequestItem, index: number) => {
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
                      {dayjs(item.createdAt).format(
                        "hh:mma dddd DD, MMMM YYYY"
                      )}
                    </p>
                  </div>
                  <div className="flex gap-x-3 ">
                    <Tooltip content="View Service Details">
                      <Button
                        className="m-0 p-0 shadow-none hover:shadow-none bg-transparent text-black"
                        onClick={() => openDetails(item)}
                      >
                        <TbListDetails className="text-3xl" />
                      </Button>
                    </Tooltip>
                  </div>
                </div>
              );
            })}
        <div className="mt-6 flex justify-end">
          <div className="flex gap-x-4 items-center">
            <p className="fw-600">Page {page}</p>
            <div className="flex gap-x-2 items-center">
              <div
                onClick={handlePrev}
                className={`px-2 py-1 rounded ${
                  page === 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-primary text-white cursor-pointer"
                }`}
              >
                Prev
              </div>
              <div
                onClick={handleNext}
                className={`px-2 py-1 rounded ${
                  stop >= data?.data?.length
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-primary text-white cursor-pointer"
                }`}
              >
                Next
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal title="Service Details" size="md" type="withCancel">
        <RequestDetailsModal item={selected} />
      </Modal>
    </>
  );
};

export default AdminCompletedService;
