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

const StaffDetail = () => {
  const { id } = useParams();
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["getProviders", `${id}`],
    queryFn: () => getDriversDetail(`${id}`),
  });
  const {
    isLoading: loading,
    data: kyc,
    refetch: refetchKyc,
  } = useQuery({
    queryKey: ["getDriverKyc"],
    queryFn: () => getDriversKyc(`${id}`),
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
    data.data?.reason_for_suspension?.trim() ||
    data.data?.reason_for_unsuspension?.trim();

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
              <div className="lg:flex gap-x-2 items-start">
                <div className="pt-2">
                  {data?.data?.avgRating ? (
                    <Rating value={Number(data?.data?.avgRating)} readonly />
                  ) : (
                    <Rating
                      value={0}
                      readonly
                      onClick={() => ShowDialog(true)}
                    />
                  )}
                  <div className="text-center">
                    {data?.data?.avgRating ? (
                      <p
                        className="fs-400 inline fw-500 cursor-pointer"
                        onClick={() => ShowDialog(true)}
                      >
                        <span className="fw-600 text-lg">
                          {data?.data?.avgRating}
                        </span>
                        /5 Rating
                      </p>
                    ) : (
                      <p className="fs-400 fw-500">No Rating Yet</p>
                    )}
                  </div>
                </div>
                <UserAction
                  refetch={refetch}
                  id={data?.data.id}
                  companyId={data.data.companyId}
                  suspended={data?.data.isSuspended}
                />
              </div>
            </div>
            <div className="px-6 realive mt-10 grid lg:grid-cols-3 gap-y-3">
              <div className="lg:row-span-2">
                <p className="fw-600 text-lg lg:text-xl">{`${data?.data.fname} ${data?.data.lname}`}</p>
                <p className="fs-500 text-gray-500 fw-500 pl-3 mb-3">
                  Service Provider (Technician)
                </p>
                {!data?.data.verified && (
                  <div className="text-red-600 fw-600 flex items-center gap-x-2">
                    <span className="w-3 h-3 circle bg-red-600 block"></span>{" "}
                    Not Verified
                  </div>
                )}
                {data?.data.verified && (
                  <div className="text-green-600 fw-600 flex items-center gap-x-2">
                    <span className="w-3 h-3 circle bg-green-600 block"></span>{" "}
                    Verified
                  </div>
                )}
                {!data?.data.verified && (
                  <div className="flex gap-x-2 mt-2">
                    <button
                      className="btn-like px-3 py-1 fs-400"
                      onClick={() => setShowModal(true)}
                    >
                      Approve
                    </button>
                    <button
                      className="border border-gray-600 px-2 py-1 rounded-[4px] fs-400"
                      onClick={() => SetDisApproval(true)}
                    >
                      Disapprove
                    </button>
                  </div>
                )}
              </div>
              <div>
                <p className="fw-500 text-gray-500 mb-4">Phone</p>
                <div className="flex gap-x-2 items-center">
                  <div className="bg-review w-10 h-10 circle place-center text-white">
                    <BsTelephone />
                  </div>
                  <p className="fw-500">
                    {formatPhoneNumber(data?.data.phone)}
                  </p>
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
              <div>
                <span className="flex justify-between">
                  <p className="fw-500 text-gray-500 mb-4">
                    City (Service Areas)
                  </p>
                  <p
                    className="fw-500 text-sm mx-4 text-blue-500 cursor-pointer"
                    onClick={() => ShowCityCode(true)}
                  >
                    View more
                  </p>
                </span>
                <div className="flex gap-x-2 items-center w-full overflow-x-auto scroll-pro">
                  <div className="bg-review shrink-0 w-10 h-10 circle place-center text-white">
                    <MdLocationCity />
                  </div>
                  <p className="fw-500 text-black uppercase">
                    {kyc?.data?.city}
                  </p>
                </div>
              </div>
              <div>
                <p className="fw-500 text-gray-500 mb-4">Postal Code</p>
                <div className="flex gap-x-2 items-center w-full overflow-x-auto scroll-pro">
                  <div className="bg-review shrink-0 w-10 h-10 circle place-center text-white">
                    <MdSignpost />
                  </div>
                  <p className="fw-500 text-black">{kyc?.data?.zipcode}</p>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 border h-[300px] bg-gray-50 mt-6">
              <div className="border-r-2 h-full">
                <p className="p-3 border-b-2 fw-500 text-gray-600">
                  Service Category
                </p>
                <div className="px-4 py-3 h-[245px] overflow-y-auto">
                  <ServiceCategory cat={kyc?.data?.service_rendered} />
                </div>
              </div>
              <div className="border-r-2 h-full">
                <p className="p-3 border-b-2 fw-500 text-gray-600">
                  Service Brands
                </p>
                <div className="px-4 py-3 h-[245px] overflow-y-auto">
                  <ServiceBrands brands={kyc?.data?.brands} />
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
                {data.data?.reason_for_suspension && (
                  <div className="flex items-center">
                    <p className="w-3/12 shrink-0 text-gray-600 ">
                      Reason for Suspension:
                    </p>
                    <p className="fw-500">{data.data.reason_for_suspension}</p>
                  </div>
                )}
                {data.data?.reason_for_unsuspension && (
                  <div className="flex items-center">
                    <p className="w-3/12 shrink-0 text-gray-600 ">
                      Reason for Unsuspension:
                    </p>
                    <p className="fw-500">
                      {data.data.reason_for_unsuspension}
                    </p>
                  </div>
                )}
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
    </>
  );
};

export default StaffDetail;
