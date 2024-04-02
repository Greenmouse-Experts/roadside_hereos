import { useParams } from "react-router-dom";
import ProfileAvatar from "../../lib/components/ui/ProfileAvatar";
import { Rating } from "@material-tailwind/react";
import { MdLocationPin } from "react-icons/md";
import useDialog from "../../lib/hooks/useDialog";
import ReviewModal from "../../lib/components/user/requestDetails/ReviewModal";
import { useQuery } from "@tanstack/react-query";
import { getOneService } from "../../lib/services/api/clientApi";
import CurveLoader from "../../lib/components/ui/loader/curveLoader/CurveLoader";
import dayjs from "dayjs";

const ServiceDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["userServiceData", `${id}`],
    queryFn: () => getOneService(`${id}`),
  });
  const { Dialog, setShowModal } = useDialog();
  return (
    <div className="pb-24">
      <div className="flex justify-between items-start">
        <div>
          <p>
            Service Id: <span className="uppercase fw-600">{id}</span>
          </p>
          <p className="fw-500 mt-2 text-lg lg:text-2xl">
            {data?.data?.serviceRequest?.service?.name}
          </p>
        </div>
        {data?.data?.serviceRequest?.status !== "pending" && <div className="flex items-center gap-x-1 underline">
          <MdLocationPin className="text-xl" />
          <p className="fs-600 fw-600">Track Driver Location</p>
        </div>}
      </div>
      {isLoading && (
        <div className="py-12 flex justify-center items-center text-black">
          <div>
            <div className="flex place-center">
              <CurveLoader />
            </div>
            <p className="text-center mt-5 fw-500">
              Fetching Service Details...
            </p>
          </div>
        </div>
      )}
      {data && !isLoading && (
        <div>
          {data?.data?.serviceRequest?.status !== "pending" && (
            <div className="bg-white shadow mt-6 rounded-lg p-4">
              <div className="flex justify-between">
                <p className="fw-500 flex items-center gap-x-1 text-lg">
                  <span className="block w-4 h-4 circle bg-primary"></span>{" "}
                  Provider Details
                </p>
                <p
                  className="fw-500 underline cursor-pointer"
                  onClick={() => setShowModal(true)}
                >
                  Leave a rating
                </p>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-x-3">
                  <ProfileAvatar
                    url={""}
                    name="Enzo Fernandez"
                    size={100}
                    font={30}
                  />
                  <div>
                    <p className="fw-500 mb-2 text-lg">Enzo Fernandez</p>
                    <div className="flex items-center gap-2 font-bold text-blue-gray-500">
                      {4}.7
                      <Rating value={4} readonly />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 mt-6">
                <div className="grid gap-5">
                  <div className="flex gap-x-2">
                    <p>Company:</p>
                    <p className="fw-500">Greenmouse Technology</p>
                  </div>
                  <div className="flex gap-x-2">
                    <p>Car Description:</p>
                    <p className="fw-500">Black toyata camry 2015</p>
                  </div>
                  <div className="flex gap-x-2">
                    <p>Plate Number:</p>
                    <p className="fw-500">CA-32899</p>
                  </div>
                </div>
                <div className="grid gap-5">
                  <div className="flex gap-x-2">
                    <p>Service Cost:</p>
                    <p className="fw-500">$480</p>
                  </div>
                  <div className="flex gap-x-2">
                    <p>Contact Info:</p>
                    <p className="fw-500">+1 (419) 456 5566</p>
                  </div>
                  <div className="flex gap-x-2">
                    <p>Addition Info:</p>
                    <p className="fw-500"></p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="bg-white shadow mt-6 rounded-lg p-4">
            <div className="flex justify-between">
              <p className="fw-500 flex items-center gap-x-1 text-lg">
                <span className="block w-4 h-4 circle bg-primary"></span>{" "}
                Service Details
              </p>
            </div>
            <div className="grid lg:grid-cols-3 mt-6">
              <div className="grid gap-5">
                <div className="flex gap-x-2">
                  <p>Car Make:</p>
                  <p className="fw-500">{data?.data?.serviceRequest?.vehicleMake}</p>
                </div>
                <div className="flex gap-x-2">
                  <p>Car Model:</p>
                  <p className="fw-500">{data?.data?.serviceRequest?.model}</p>
                </div>
                <div className="flex gap-x-2">
                  <p>Car Year:</p>
                  <p className="fw-500">{data?.data?.serviceRequest?.vehicleYear}</p>
                </div>
                <div className="flex gap-x-2">
                  <p>Car Color:</p>
                  <p className="fw-500">{data?.data?.serviceRequest?.color}</p>
                </div>
              </div>
              <div className="grid mt-5 lg:mt-0 gap-5 lg:col-span-2">
                <div className="flex gap-x-2">
                  <p>Service Location:</p>
                  <p className="fw-500">{data?.data?.serviceRequest?.location}</p>
                </div>
                <div className="flex gap-x-2">
                  <p>Servie Info:</p>
                  <p className="fw-500">{data?.data?.serviceRequest?.requestNote}</p>
                </div>
                <div className="flex gap-x-2">
                  <p>Request Time:</p>
                  <p className="fw-500">
                    {dayjs(data?.data?.serviceRequest?.createdAt).format(
                      "hh:mmA, ddd DD, MMMM YYYY"
                    )}
                  </p>
                </div>
                <div className="flex gap-x-2">
                  <p>Response Time:</p>
                  <p className="fw-500">
                    {dayjs(data?.data?.serviceRequest?.updatedAt).format(
                      "hh:mmA, ddd DD, MMMM YYYY"
                    )}
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Dialog title="Submit a Review" size="lg">
        <ReviewModal id={`${id}`} close={() => setShowModal(false)} />
      </Dialog>
    </div>
  );
};

export default ServiceDetails;
