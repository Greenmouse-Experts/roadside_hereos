import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import ServiceCategory from "../../lib/components/provider/details/serviceCategory";
import ServiceBrands from "../../lib/components/provider/details/serviceBrands";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { getProvidersDetails } from "../../lib/services/api/usersApi";
import ServiceRendered from "../../lib/components/provider/details/serviceRendered";
import CurveLoader from "../../lib/components/ui/loader/curveLoader/CurveLoader";
import ProfileAvatar from "../../lib/components/ui/ProfileAvatar";
import { FormatStatus } from "../../lib/utils";
import { formatPhoneNumber } from "react-phone-number-input";
import { Rating } from "@material-tailwind/react";
import useDialog from "../../lib/hooks/useDialog";
import ViewReviewsModal from "../../lib/components/admin/providers/staff/ViewReviewsModal";

const StaffDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, data } = useQuery({
    queryKey: ["getProviders"],
    queryFn: () => getProvidersDetails(`${id}`),
  });
  // const { data: kyc } = useQuery({
  //   queryKey: ["getStaffKyc"],
  //   queryFn: () => getDriverKyc(`${id}`),
  // });
  const {Dialog, setShowModal} = useDialog()
  return (
    <>
      <div>
        {isLoading && (
          <div className="py-12 flex justify-center items-center text-black">
            <div>
              <div className="flex justify-center">
                <CurveLoader />
              </div>
              <p className="text-center mt-5 fw-500">
                Fetching Provider Details...
              </p>
            </div>
          </div>
        )}
        {!isLoading && data && (
          <div>
            <div className="flex">
              <div
                className="flex gap-x-2 items-center cursor-pointer"
                onClick={() => navigate(-1)}
              >
                <FaLongArrowAltLeft />
                <p>Back to company</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow min-h-[80vh]">
              {!isLoading && data && (
                <div>
                  <div className="w-full h-[140px] bg-review border p-3 rounded-t-lg lg:px-5 flex items-center"></div>
                  <div className="lg:flex justify-between">
                    <div className="flex relative justify-end px-8">
                      <div className="absolute left-4 lg:left-10 border-[5px] w-[140px] h-[140px] circle -top-16">
                        <ProfileAvatar
                          name={`${data?.data?.fname} ${data?.data?.lname}`}
                          url={data?.data?.photo}
                          size={130}
                          font={35}
                        />
                      </div>
                      <div className="py-6"></div>
                    </div>
                    <div className="flex items-center gap-2 font-bold text-blue-gray-500 pt-10 lg:pt-0 px-2 lg:pr-4 cursor-pointer" onClick={() => setShowModal(true)}>
                      {4}.7
                      <Rating value={4} className="scale-120" readonly/>
                      <span className="underline">View</span>
                    </div>
                  </div>
                  <div className="px-2 lg:px-6 realive mt-4 lg:mt-10 grid lg:grid-cols-3">
                    <div>
                      <p className="fw-600 text-lg lg:text-xl">{`${data?.data?.fname} ${data?.data?.lname}`}</p>
                      <p className="fs-500 text-gray-500 fw-500 pl-3">
                        Service Provider
                      </p>
                      <div className="flex pl-7">
                        {data?.data?.isSuspended
                          ? FormatStatus["inactive"]
                          : FormatStatus["active"]}
                      </div>
                    </div>
                    <div className="mt-3 lg:mt-0">
                      <p className="fw-500 text-gray-500 mb-4">Phone</p>
                      <div className="flex gap-x-2 items-center">
                        <div className="bg-review w-10 h-10 circle place-center text-white">
                          <BsTelephone />
                        </div>
                        <p className="fw-500">
                          {formatPhoneNumber(data?.data?.phone)}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 lg:mt-0">
                      <p className="fw-500 text-gray-500 mb-4">Email</p>
                      <div className="flex gap-x-2 items-center">
                        <div className="bg-review w-10 h-10 circle place-center text-white">
                          <AiOutlineMail />
                        </div>
                        <p className="fw-500">{data?.data?.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid lg:grid-cols-3 border min-h-[300px] bg-gray-50 mt-6">
                    <div className="border-r-2 h-full">
                      <p className="p-3 border-b-2 fw-500 text-gray-600">
                        Service Category
                      </p>
                      <div className="px-4 py-3">
                        <ServiceCategory cat={data?.data?.service_rendered} />
                      </div>
                    </div>
                    <div className="border-r-2 h-full">
                      <p className="p-3 border-b-2 fw-500 text-gray-600">
                        Service Brands
                      </p>
                      <div className="px-4 py-3">
                        <ServiceBrands brands={data?.data?.brands} />
                      </div>
                    </div>
                    <div className="border-r-2 h-full">
                      <p className="p-3 border-b-2 fw-500 text-gray-600">
                        Service Rendered
                      </p>
                      <div className="px-4 py-3">
                        <ServiceRendered />
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 lg:px-6 px-3">
                    <p className="fw-600 lg:text-lg">
                      Provider Extra Information
                    </p>
                    <div className="mt-6 pb-12 grid gap-3">
                      <div className="flex items-center">
                        <p className="w-4/12 lg:w-3/12 text-gray-600 shrink-0">
                          Service Area:
                        </p>
                        <p className="fw-500">{data?.data?.service_area}</p>
                      </div>
                      <div className="flex items-center">
                        <p className="w-4/12 lg:w-3/12 shrink-0 text-gray-600 ">
                          Account Name:
                        </p>
                        <p className="fw-500">{data?.data?.account_name}</p>
                      </div>
                      <div className="flex items-center">
                        <p className="w-4/12 lg:w-3/12 shrink-0 text-gray-600 ">
                          Account Number:
                        </p>
                        <p className="fw-500">{data?.data?.account_number}</p>
                      </div>
                      <div className="flex items-center">
                        <p className="w-4/12 lg:w-3/12 shrink-0 text-gray-600 ">
                          Bank Name:
                        </p>
                        <p className="fw-500">{data?.data?.bank_name}</p>
                      </div>
                      <div className="flex items-center">
                        <p className="w-4/12 lg:w-3/12 shrink-0 text-gray-600 ">
                          Routing Number:
                        </p>
                        <p className="fw-500">{data?.data?.routing_number}</p>
                      </div>
                      {/* <div className="flex">
                        <p className="w-3/12 shrink-0 text-gray-600 ">
                          Service Fees:
                        </p>
                        <div className="fw-500 grid gap-2">
                          <p>E-Fuel - $45</p>
                          <p>Towing - $55</p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        <Dialog title="View Driver's Reviews" size="xl">
          <ViewReviewsModal id={`${id}`}/>
        </Dialog>
      </div>
    </>
  );
};

export default StaffDetail;
