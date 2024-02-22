import { BsTelephone } from "react-icons/bs";
import UserAction from "../../lib/components/provider/details/userAction";
import { AiOutlineMail } from "react-icons/ai";
import ServiceCategory from "../../lib/components/provider/details/serviceCategory";
import ServiceBrands from "../../lib/components/provider/details/serviceBrands";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDriversDetail } from "../../lib/services/api/companyApi";
import CurveLoader from "../../lib/components/ui/loader/curveLoader/CurveLoader";
import ProfileAvatar from "../../lib/components/ui/ProfileAvatar";

const StaffDetail = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery({
    queryKey: ["getProviders"],
    queryFn: () => getDriversDetail(`${id}`),
  });
  return (
    <>
      <div className="bg-white rounded-lg shadow min-h-[80vh]">
        {isLoading && (
          <div className="py-12 flex justify-center items-center text-black">
            <div>
              <CurveLoader />
              <p className="text-center mt-5 fw-500">
                Fetching Staff Provider Details...
              </p>
            </div>
          </div>
        )}
        {isError && <p>There was an issue fetching this provider details</p>}
        {!isLoading && data && (
          <div>
            <div className="w-full h-[140px] bg-review border p-3 rounded-t-lg lg:px-5 flex items-center"></div>
            <div className="flex relative justify-end px-8">
              <div className="absolute left-10 -top-16">
                <ProfileAvatar name={`${data?.data.fname} ${data?.data.lname}`} url={data?.data.photo} size={140} font={27}/>
              </div>
              <div>
                <UserAction />
              </div>
            </div>
            <div className="px-6 realive mt-10 grid lg:grid-cols-3">
              <div>
                <p className="fw-600 text-lg lg:text-xl">{`${data?.data.fname} ${data?.data.lname}`}</p>
                <p className="fs-500 text-gray-500 fw-500 pl-3">
                  Service Provider
                </p>
              </div>
              <div>
                <p className="fw-500 text-gray-500 mb-4">Phone</p>
                <div className="flex gap-x-2 items-center">
                  <div className="bg-review w-10 h-10 circle place-center text-white">
                    <BsTelephone />
                  </div>
                  <p className="fw-500">{data?.data.phone}</p>
                </div>
              </div>
              <div>
                <p className="fw-500 text-gray-500 mb-4">Email</p>
                <div className="flex gap-x-2 items-center w-full overflow-x-auto scroll-pro">
                  <div className="bg-review shrink-0 w-10 h-10 circle place-center text-white">
                    <AiOutlineMail />
                  </div>
                  <p className="fw-500">{data?.data.email}</p>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 border h-[300px] bg-gray-50 mt-6">
              <div className="border-r-2 h-full">
                <p className="p-3 border-b-2 fw-500 text-gray-600">
                  Service Category
                </p>
                <div className="px-4 py-3">
                  <ServiceCategory />
                </div>
              </div>
              <div className="border-r-2 h-full">
                <p className="p-3 border-b-2 fw-500 text-gray-600">
                  Service Brands
                </p>
                <div className="px-4 py-3">
                  <ServiceBrands />
                </div>
              </div>
              <div className="border-r-2 h-full">
                <p className="p-3 border-b-2 fw-500 text-gray-600">
                  Service Rendered
                </p>
                <div className="px-4 py-3">
                  <ServiceCategory />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default StaffDetail;
