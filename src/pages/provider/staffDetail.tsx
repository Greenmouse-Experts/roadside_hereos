import { BsTelephone } from "react-icons/bs";
import UserAction from "../../lib/components/provider/details/userAction";
import { AiOutlineMail } from "react-icons/ai";
import ServiceCategory from "../../lib/components/provider/details/serviceCategory";
import ServiceBrands from "../../lib/components/provider/details/serviceBrands";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  getDriversDetail,
  getDriversKyc,
} from "../../lib/services/api/companyApi";
import CurveLoader from "../../lib/components/ui/loader/curveLoader/CurveLoader";
import ProfileAvatar from "../../lib/components/ui/ProfileAvatar";
import ServiceRendered from "../../lib/components/provider/details/serviceRendered";
import useModal from "../../lib/hooks/useModal";
import { approveDriverKyc } from "../../lib/services/api/kycApi";
import { toast } from "react-toastify";
import ReusableModal from "../../lib/components/ui/ReusableModal";
import DisapproveDriverKyc from "../../lib/components/provider/details/disapproveKyc";
import { Rating } from "@material-tailwind/react";
import useDialog from "../../lib/hooks/useDialog";
import ViewReviewsModal from "../../lib/components/admin/providers/staff/ViewReviewsModal";
import { MdLocationCity, MdSignpost } from "react-icons/md";
import { formatAsNgnMoney, formatPhoneNumber } from "../../lib/utils";
import ViewCityCodes from "../../lib/components/admin/providers/staff/ViewCityCodes";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { apiClient } from "../../lib/services/api/serviceApi";
import AdminServiceRenderd from "../admin/_components/AdminServiceRendered";
import VehicleInfo from "./_components/VehicleInfo";
import SuspensionLogs from "./_components/SuspensionLogs";

const StaffDetail = () => {
  const { id } = useParams();
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["getProviders", `${id}`],
    queryFn: () => getDriversDetail(`${id}`),
  });
  const [showReason, setShowReason] = useState(false);
  const {
    isLoading: loading,
    data: kyc,
    refetch: refetchKyc,
  } = useQuery({
    queryKey: ["getDriverKyc", id],
    queryFn: () => getDriversKyc(`${id}`),
    // queryFn: async () => {
    //   // https://api.alldrivesos.com/api/users/get-user/d3f455d6-3c5b-4903-8b61-5411d6313d00
    //   let resp = await apiClient.get("/users/get-user/" + id);
    //   return resp.data;
    // },
  });
  const { Modal, setShowModal } = useModal();
  const { Modal: DisApproval, setShowModal: SetDisApproval } = useModal();
  const { Dialog, setShowModal: ShowDialog } = useDialog();
  const { Dialog: CityCodes, setShowModal: ShowCityCode } = useDialog();
  const approveKyc = async () => {
    const payload = {
      approved: true,
      reason: "",
    };
    await approveDriverKyc(kyc?.data?.id, payload)
      .then((res) => {
        toast.success(res.message);
        setShowModal(false);
        refetch();
        refetchKyc();
      })
      .catch((err: any) => {
        toast.error(err.response.data.message);
      });
  };
  const exists =
    data?.data?.reason_for_suspension?.trim() ||
    data?.data?.reason_for_unsuspension?.trim();
  const isSuspended = data?.data.isSuspended;
  const modal = useModal();

  return (
    <>
      <div className="bg-white rounded-lg shadow min-h-[80vh]">
        {(isLoading || loading) && (
          <div className="py-12 flex justify-center items-center text-black">
            <div>
              <div className="flex justify-center">
                <CurveLoader />
              </div>
              <p className="text-center mt-5 fw-500">
                Fetching Staff Provider Details...
              </p>
            </div>
          </div>
        )}
        {isError && (
          <p className="py-24 text-center">
            There was an issue fetching this provider details
          </p>
        )}
        {!isLoading && <></>}
        {!isLoading && !loading && data && (
          <div>
            <div className="w-full h-[140px] flex justify-end bg-review border p-3 rounded-t-lg lg:px-5 items-center">
              <div className="text-white">
                <p>
                  {" "}
                  Pending Balance:{" "}
                  <span className="text-lg fw-600">
                    {formatAsNgnMoney(data.data.pendingBal) || "$0"}
                  </span>
                </p>
                <p>
                  {" "}
                  Available Balance:{" "}
                  <span className="text-lg fw-600">
                    {formatAsNgnMoney(data.data.walletBal) || "$0"}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex relative justify-end px-8">
              <div className="absolute left-10 -top-16">
                <ProfileAvatar
                  name={`${data?.data.fname} ${data?.data.lname}`}
                  url={data?.data.photo}
                  size={140}
                  font={27}
                />
              </div>
              <div className="lg:flex gap-x-2  mt-2 items-start">
                <UserAction
                  isActive={data?.data?.isActive}
                  refetch={refetch}
                  id={data?.data.id}
                  companyId={data.data.companyId}
                  suspended={data?.data.isSuspended}
                />
              </div>
            </div>
            <div className="px-6 relative mt-10 grid lg:grid-cols-3 gap-y-6">
              <div className="lg:row-span-2 flex flex-col gap-y-3">
                <p className="fw-600 text-2xl text-gray-800">{`${data?.data.fname} ${data?.data.lname}`}</p>
                <p className="text-sm text-gray-600 fw-500">
                  Service Provider (Technician)
                </p>

                {!data?.data.verified && (
                  <div className="text-red-600 fw-600 flex items-center gap-x-2">
                    <span className="w-2 h-2 rounded-full bg-red-600 block"></span>{" "}
                    Not Verified
                  </div>
                )}
                {data?.data.verified && (
                  <div className="text-green-600 fw-600 flex items-center ">
                    <span className="w-2 h-2 rounded-full bg-green-600 block"></span>{" "}
                    Verified
                  </div>
                )}
                <div className="flex items-center gap-x-2">
                  {data?.data?.reviewsAvg ? (
                    <Rating value={Number(data?.data?.reviewsAvg)} readonly />
                  ) : (
                    <Rating
                      value={5}
                      readonly
                      onClick={() => ShowDialog(true)}
                    />
                  )}
                  {data?.data?.reviewsAvg ? (
                    <p
                      className="text-sm fw-500 cursor-pointer text-gray-700"
                      onClick={() => ShowDialog(true)}
                    >
                      <span className="fw-600 text-base">
                        {data?.data?.reviewsAvg}
                      </span>
                      /5 Rating
                    </p>
                  ) : (
                    <p className="text-sm fw-500 text-gray-500">
                      No Rating Yet
                    </p>
                  )}
                </div>
                {!data?.data.verified && (
                  <div className="flex gap-x-3 mt-4">
                    <button
                      className="bg-primary text-white px-4 py-2 rounded-md text-sm fw-500 hover:bg-blue-700 transition-colors"
                      onClick={() => setShowModal(true)}
                    >
                      Approve
                    </button>
                    <button
                      className="border border-gray-400 text-gray-700 px-4 py-2 rounded-md text-sm fw-500 hover:bg-gray-100 transition-colors"
                      onClick={() => SetDisApproval(true)}
                    >
                      Disapprove
                    </button>
                  </div>
                )}
              </div>
              <div className="border-b pb-4 lg:border-none lg:pb-0">
                <p className="fw-500 text-gray-500 mb-2">Phone</p>
                <div className="flex gap-x-3 items-center">
                  <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white text-lg">
                    <BsTelephone />
                  </div>
                  <p className="fw-500 text-gray-800">
                    {formatPhoneNumber(data?.data.phone)}
                  </p>
                </div>
              </div>
              <div className="border-b pb-4 lg:border-none lg:pb-0">
                <p className="fw-500 text-gray-500 mb-2">Email</p>
                <div className="flex gap-x-3 items-center w-full overflow-x-auto scroll-pro">
                  <div className="bg-primary shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg">
                    <AiOutlineMail />
                  </div>
                  <p className="fw-500 text-gray-800">{data?.data.email}</p>
                </div>
              </div>
              <div className="border-b pb-4 lg:border-none lg:pb-0">
                <span className="flex justify-between items-center mb-2">
                  <p className="fw-500 text-gray-500">City (Service Areas)</p>
                  <p
                    className="fw-500 text-sm text-blue-600 cursor-pointer hover:underline"
                    onClick={() => ShowCityCode(true)}
                  >
                    View more
                  </p>
                </span>
                <div className="flex gap-x-3 items-center w-full overflow-x-auto scroll-pro">
                  <div className="bg-primary shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg">
                    <MdLocationCity />
                  </div>
                  <p className="fw-500 text-gray-800 uppercase">
                    {kyc?.data?.city}
                  </p>
                </div>
              </div>
              <div>
                <p className="fw-500 text-gray-500 mb-2">Postal Code</p>
                <div className="flex gap-x-3 items-center w-full overflow-x-auto scroll-pro">
                  <div className="bg-primary shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg">
                    <MdSignpost />
                  </div>
                  <p className="fw-500 text-gray-800">{kyc?.data?.zipcode}</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="border-r-2 h-fit  ">
                <p className="p-3 border-b-2 fw-500 text-gray-600">
                  Vehicle Info
                </p>
                <div className="px-4 py-3 ">
                  <VehicleInfo item={kyc.data} />
                </div>
              </div>
              <div className="border-r-2 h-full">
                <p className="p-3 border-b-2 fw-500 text-gray-600">
                  Service Category
                </p>
                <div className="px-4 py-3 h-[245px] overflow-y-auto">
                  <ServiceCategory cat={kyc?.data?.service_rendered} />
                </div>
              </div>
            </div>
            <div className="mt-10 lg:px-6 px-3">
              <p className="fw-600 lg:text-lg">Provider Extra Information</p>
              <div className="mt-6 pb-12 grid gap-3">
                <div className="flex items-center">
                  <p className="w-3/12 text-gray-600 shrink-0">Service Area:</p>
                  <p className="fw-500">{kyc?.data?.service_area}</p>
                </div>
                <div className="flex items-center">
                  <p className="w-3/12 shrink-0 text-gray-600 ">
                    Account Name:
                  </p>
                  <p className="fw-500 uppercase">{kyc?.data?.account_name}</p>
                </div>
                <div className="flex items-center">
                  <p className="w-3/12 shrink-0 text-gray-600 ">
                    Residential Address:
                  </p>
                  <p className="fw-500 uppercase">{kyc?.data?.address}</p>
                </div>
                <div className="flex items-center">
                  <p className="w-3/12 shrink-0 text-gray-600 ">
                    Account Number:
                  </p>
                  <p className="fw-500">{kyc?.data?.account_number}</p>
                </div>
                <div className="flex items-center">
                  <p className="w-3/12 shrink-0 text-gray-600 ">Bank Name:</p>
                  <p className="fw-500 uppercase">{kyc?.data?.bank_name}</p>
                </div>
                <div className="flex items-center">
                  <p className="w-3/12 shrink-0 text-gray-600 ">
                    Routing Number:
                  </p>
                  <p className="fw-500">{kyc?.data?.routing_number}</p>
                </div>
                <div className="flex items-center">
                  <p className="w-3/12 shrink-0 text-gray-600 ">
                    Car Description:
                  </p>
                  <p className="fw-500 uppercase">
                    {kyc?.data?.car_description}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="w-3/12 shrink-0 text-gray-600 ">
                    Plate Number:
                  </p>
                  <p className="fw-500 uppercase">{kyc?.data?.plate_number}</p>
                </div>
                <div className="flex gap-5 items-center">
                  <p className="w-3/12 shrink-0 text-gray-600 ">ID Card:</p>
                  <a
                    href={kyc?.data?.identityFront}
                    className="w-1/12 -ml-5"
                    target="_blank"
                  >
                    <img src={kyc?.data?.identityFront} />
                  </a>
                  <a
                    href={kyc?.data?.identityBack}
                    className="w-1/12"
                    target="_blank"
                  >
                    <img src={kyc?.data?.identityBack} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Modal title="" size="sm">
        <ReusableModal
          title="Are you sure you want to approve this request"
          action={() => approveKyc()}
          actionTitle="Approve"
          cancelTitle="Close"
          closeModal={() => setShowModal(false)}
          isBusy={false}
        />
      </Modal>
      <DisApproval title="Disapprove Driver Kyc" size="sm">
        <DisapproveDriverKyc
          id={kyc?.data?.id}
          close={() => SetDisApproval(false)}
          refetch={refetchKyc}
        />
      </DisApproval>
      <Dialog title="Driver Reviews" size="lg">
        <ViewReviewsModal id={`${id}`} />
      </Dialog>
      <CityCodes title="City (Service Areas)" size="lg">
        <ViewCityCodes codes={kyc?.data?.city} />
      </CityCodes>
      <div className="">
        <SuspensionLogs id={id} />
      </div>
      <div className="border-r-2 h-full">
        <p className="p-3 border-b-2 fw-500 text-gray-600">Service Rendered</p>
        <div className="px-4 py-3">
          {/*{JSON.stringify(kyc.data.serviceRequests)}*/}
          <AdminServiceRenderd serviceData={kyc?.data?.serviceRequests} />
        </div>
      </div>
      <modal.Modal title="Reason for Suspension/UnSuspension">
        <div className="p-6 bg-gray-50 rounded-lg shadow-inner">
          {data?.data?.reason_for_suspension && (
            <div className="mb-4 p-3 border border-red-300 bg-red-50 rounded-md">
              <h4 className="font-semibold text-red-700 mb-1">
                Suspension Reason:
              </h4>
              <p className="text-gray-800">
                {data?.data?.reason_for_suspension}
              </p>
            </div>
          )}
          {data?.data?.reason_for_unsuspension && (
            <div className="p-3 border border-green-300 bg-green-50 rounded-md">
              <h4 className="font-semibold text-green-700 mb-1">
                Unsuspension Reason:
              </h4>
              <p className="text-gray-800">
                {data?.data?.reason_for_unsuspension}
              </p>
            </div>
          )}
          {!data?.data?.reason_for_suspension &&
            !data?.data?.reason_for_unsuspension && (
              <p className="text-gray-600 italic">
                No suspension or unsuspension reason provided.
              </p>
            )}
        </div>
      </modal.Modal>
    </>
  );
};

export default StaffDetail;
