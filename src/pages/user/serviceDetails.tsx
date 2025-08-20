import { useParams } from "react-router-dom";
import ProfileAvatar from "../../lib/components/ui/ProfileAvatar";
import { Rating } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { getOneService } from "../../lib/services/api/clientApi";
import CurveLoader from "../../lib/components/ui/loader/curveLoader/CurveLoader";
import dayjs from "dayjs";
import { formatAsNgnMoney } from "../../lib/utils";
import TrackingBtn from "../../lib/components/user/requestDetails/TrackingBtn";
import ServiceProgress from "../../lib/components/user/requestDetails/ServiceProgress";

const ServiceDetails = () => {
  const { id } = useParams();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["userServiceData", `${id}`],
    queryFn: () => getOneService(`${id}`),
  });
  const payment = data?.data?.serviceRequest?.payment;
  const isPaid = payment && (payment?.status).toLowerCase() === "paid";
  const getTotal = () => {
    const totalPay =
      Number(payment?.amount) + Number(payment?.charge) + Number(payment?.tax);
    return totalPay;
  };
  // return <></>;

  return (
    <div className="pb-24">
      <div className="lg:flex justify-between items-start">
        <div>
          <p>
            Service Id: <span className="uppercase fw-600">{id}</span>
          </p>
          <p className="fw-500 mt-2 text-lg lg:text-2xl">
            {data?.data?.serviceRequest?.service?.name}
          </p>
        </div>
        {isPaid && (
          <TrackingBtn
            id={`${id}`}
            lat={data?.data?.serviceRequest?.latitude}
            lng={data?.data?.serviceRequest?.longitude}
            driverLat={data?.data?.driverQuote?.latitude}
            driverLng={data?.data?.driverQuote?.longitude}
            miles={data?.data?.driverQuote?.distance}
            time={data?.data?.driverQuote?.timeTaken}
          />
        )}
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
          {isPaid && (
            <div>
              <div>
                <ServiceProgress
                  id={`${id}`}
                  status={data?.data?.serviceRequest?.status}
                  query={data?.data?.serviceRequest?.queryNote}
                  refetch={refetch}
                />
              </div>
              <div className="bg-white shadow mt-6 rounded-lg p-4">
                <div className="flex justify-between">
                  <p className="fw-500 flex items-center gap-x-1 text-lg">
                    <span className="block w-4 h-4 circle bg-primary"></span>{" "}
                    Provider Details
                  </p>
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-x-3">
                    <ProfileAvatar
                      url={""}
                      name={`${data?.data?.driver?.fname} ${data?.data?.driver?.lname}`}
                      size={100}
                      font={30}
                    />
                    <div>
                      <p className="fw-500 mb-2 text-lg">{`${data?.data?.driver?.fname} ${data?.data?.driver?.lname}`}</p>
                      <div className="flex items-center gap-2 font-bold text-blue-gray-500">
                        {data?.data?.driver?.reviewsAvg}.0
                        {data?.data?.driver?.reviewsAvg && (
                          <Rating
                            value={Number(data?.data?.driver?.reviewsAvg)}
                            readonly
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-5 lg:gap-0 mt-6">
                  <div className="grid gap-5">
                    <div className="flex gap-x-2">
                      <p>Company:</p>
                      <p className="fw-500">
                        {data?.data?.driverCompany?.name}
                      </p>
                    </div>
                    <div className="flex gap-x-2">
                      <p>Car Description:</p>
                      <p className="fw-500">
                        {data?.data?.driverMoreInfo?.car_description}
                      </p>
                    </div>
                    <div className="flex gap-x-2">
                      <p>Plate Number:</p>
                      <p className="fw-500">
                        {data?.data?.driverMoreInfo?.plate_number}
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-5">
                    <div className="flex gap-x-2">
                      <p>Service Cost:</p>
                      <p className="fw-500">{formatAsNgnMoney(getTotal())}</p>
                    </div>
                    <div className="flex gap-x-2">
                      <p>Contact Info:</p>
                      <p className="fw-500">
                        {data?.data?.driverCompany?.phone}
                      </p>
                    </div>
                    <div className="flex gap-x-2">
                      <p>Addition Info:</p>
                      <p className="fw-500"></p>
                    </div>
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
                  <p>Vehicle Make:</p>
                  <p className="fw-500">
                    {data?.data?.serviceRequest?.vehicleMake}
                  </p>
                </div>
                <div className="flex gap-x-2">
                  <p>Vehcile Model:</p>
                  <p className="fw-500">{data?.data?.serviceRequest?.model}</p>
                </div>
                <div className="flex gap-x-2">
                  <p>Car Year:</p>
                  <p className="fw-500">
                    {data?.data?.serviceRequest?.vehicleYear}
                  </p>
                </div>
                <div className="flex gap-x-2">
                  <p>Car Color:</p>
                  <p className="fw-500">{data?.data?.serviceRequest?.color}</p>
                </div>
              </div>
              <div className="grid mt-5 lg:mt-0 gap-5 lg:col-span-2">
                <div className="flex gap-x-2">
                  <p>Service Location:</p>
                  <p className="fw-500">
                    {data?.data?.serviceRequest?.location}
                  </p>
                </div>
                <div className="flex gap-x-2">
                  <p>Servie Info:</p>
                  <p className="fw-500">
                    {data?.data?.serviceRequest?.requestNote}
                  </p>
                </div>
                <div className="flex gap-x-2">
                  <p>Request Time:</p>
                  <p className="fw-500">
                    {dayjs(data?.data?.serviceRequest?.createdAt).format(
                      "hh:mmA, ddd DD, MMMM YYYY",
                    )}
                  </p>
                </div>
                <div className="flex gap-x-2">
                  <p>Response Time:</p>
                  <p className="fw-500">
                    {dayjs(data?.data?.serviceRequest?.updatedAt).format(
                      "hh:mmA, ddd DD, MMMM YYYY",
                    )}
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
