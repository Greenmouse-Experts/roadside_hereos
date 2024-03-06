import { BsTelephone } from "react-icons/bs";
import UserAction from "../../lib/components/provider/details/userAction";
import { AiOutlineMail } from "react-icons/ai";
import ServiceCategory from "../../lib/components/provider/details/serviceCategory";
import ServiceBrands from "../../lib/components/provider/details/serviceBrands";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDriversDetail, getDriversKyc } from "../../lib/services/api/companyApi";
import CurveLoader from "../../lib/components/ui/loader/curveLoader/CurveLoader";
import ProfileAvatar from "../../lib/components/ui/ProfileAvatar";
import ServiceRendered from "../../lib/components/provider/details/serviceRendered";
import useModal from "../../lib/hooks/useModal";
import { approveDriverKyc } from "../../lib/services/api/kycApi";
import { toast } from "react-toastify";
import ReusableModal from "../../lib/components/ui/ReusableModal";
import DisapproveDriverKyc from "../../lib/components/provider/details/disapproveKyc";


const StaffDetail = () => {
  const { id } = useParams();
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["getProviders"],
    queryFn: () => getDriversDetail(`${id}`),
  });
  const { isLoading:loading, data:kyc, refetch:refetchKyc } = useQuery({
    queryKey: ["getDriverKyc"],
    queryFn: () => getDriversKyc(`${id}`),
  });
  const { Modal, setShowModal } = useModal();
  const { Modal: DisApproval, setShowModal: SetDisApproval } = useModal();
  const approveKyc = async () => {
    const payload = {
      approved: true,
      reason: "",
    };
    await approveDriverKyc(data?.data?.id, payload)
      .then((res) => {
        toast.success(res.message);
        setShowModal(false);
        refetch();
        refetchKyc()
      })
      .catch((err: any) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow min-h-[80vh]">
        {(isLoading || loading) && (
          <div className="py-12 flex justify-center items-center text-black">
            <div>
              <div className="flex justify-center"><CurveLoader /></div>
              <p className="text-center mt-5 fw-500">
                Fetching Staff Provider Details...
              </p>
            </div>
          </div>
        )}
        {isError && <p>There was an issue fetching this provider details</p>}
        {(!isLoading && !loading && data) && (
          <div>
            <div className="w-full h-[140px] bg-review border p-3 rounded-t-lg lg:px-5 flex items-center"></div>
            <div className="flex relative justify-end px-8">
              <div className="absolute left-10 -top-16">
                <ProfileAvatar name={`${data?.data.fname} ${data?.data.lname}`} url={data?.data.photo} size={140} font={27}/>
              </div>
              <div>
                <UserAction refetch={refetch} id={data?.data.id}/>
              </div>
            </div>
            <div className="px-6 realive mt-10 grid lg:grid-cols-3">
              <div>
                <p className="fw-600 text-lg lg:text-xl">{`${data?.data.fname} ${data?.data.lname}`}</p>
                <p className="fs-500 text-gray-500 fw-500 pl-3 mb-3">
                  Service Provider
                </p>
                { kyc?.data.verified === "0" &&
                  <div className="text-red-600 text-lg fw-600 flex items-center gap-x-2">
                  <span className="w-3 h-3 circle bg-red-600 block"></span>{" "}
                  Verified
                </div>
                }
                { kyc?.data.verified === "1" &&
                  <div className="text-green-600 text-lg fw-600 flex items-center gap-x-2">
                  <span className="w-3 h-3 circle bg-green-600 block"></span>{" "}
                  Verified
                </div>
                }
               {kyc?.data.verified === null && <div className="flex gap-x-2">
                  <button className="btn-like px-3 py-1 fs-400" onClick={() => setShowModal(true)}>Approve</button>
                  <button className="border border-gray-600 px-2 py-1 rounded-[4px] fs-400" onClick={() => SetDisApproval(true)}>Disapprove</button>
                </div>}
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
                  <ServiceBrands brands={kyc?.data?.brands}/>
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
                        <p className="w-3/12 text-gray-600 shrink-0">
                          Service Area:
                        </p>
                        <p className="fw-500">{kyc?.data?.service_area}</p>
                      </div>
                      <div className="flex items-center">
                        <p className="w-3/12 shrink-0 text-gray-600 ">
                          Account Name:
                        </p>
                        <p className="fw-500">{kyc?.data?.account_name}</p>
                      </div>
                      <div className="flex items-center">
                        <p className="w-3/12 shrink-0 text-gray-600 ">
                          Account Number:
                        </p>
                        <p className="fw-500">{kyc?.data?.account_number}</p>
                      </div>
                      <div className="flex items-center">
                        <p className="w-3/12 shrink-0 text-gray-600 ">
                          Bank Name:
                        </p>
                        <p className="fw-500">{kyc?.data?.bank_name}</p>
                      </div>
                      <div className="flex items-center">
                        <p className="w-3/12 shrink-0 text-gray-600 ">
                          Routing Number:
                        </p>
                        <p className="fw-500">{kyc?.data?.routing_number}</p>
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
    </>
  );
};

export default StaffDetail;
