import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import EmptyState from "../../../ui/EmptyState";
import CurveLoader from "../../../ui/loader/curveLoader/CurveLoader";
import { getAdminRefunds } from "../../../../services/api/adminApi";
import RefundTable from "../components/refundTable";

interface User {
  id: string;
  fname: string;
  lname: string;
  name: string | null;
  email: string;
  address: string;
  phone: string;
  sms_opt_in: boolean;
  password?: string;
  isActive: boolean;
  isSuspended: boolean;
  photo: string | null;
  hasActiveSubscription: null;
  isAvailableForService: null;
  verified: boolean;
  expiredAt: null;
  planId: null;
  token: null;
  state: null;
  city: string | null;
  zipcode: string | null;
  street: string | null;
  userType: string;
  level: number;
  referralId: null;
  invitationId: null;
  companyId: null;
  reviewsAvg: number;
  serviceCharge: null;
  last_login: string;
  fcmToken: string;
  walletBal: null;
  pendingBal: null;
  referralSource: null;
  driverOverallPendingBal: null;
  driverOverallWalletBal: null;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
}

interface ServiceRequest {
  id: string;
  ref: null;
  userId: string;
  userType: string;
  providerId: null;
  status: string;
  processStatus: null;
  serviceId: string;
  amount: null;
  vehicleMake: string;
  model: string;
  vehicleYear: string;
  color: string;
  location: string;
  zipcode: string;
  requestNote: string;
  longitude: string;
  latitude: string;
  city: string;
  state: null;
  queryNote: null;
  userFcmToken: string;
  createdAt: string;
  updatedAt: string;
}

interface RefundRequest {
  id: string;
  userId: string;
  serviceRequestId: string;
  disapprovalReason: string | null;
  adminDisapprovalReason: string | null;
  refundType: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  serviceRequest: ServiceRequest;
}

interface RefundResponse {
  refundRequests: RefundRequest[];
  total: number;
}

const RefundApprovedRequest = () => {
  const [params, setParams] = useState({
    page: 1,
    status: "approved",
  });

  const { data, isLoading, refetch } = useQuery<RefundResponse>({
    queryKey: ["admin-refund-request", params],
    queryFn: () => getAdminRefunds(params),
  });

  const refundRequests = data?.data?.refundRequests || [];
  const totalRefunds = data?.data?.total || 0;

  const handleNext = () => {
    if (refundRequests.length >= 10 && params.page * 10 < totalRefunds) {
      setParams((prevParams) => ({ ...prevParams, page: prevParams.page + 1 }));
    }
  };

  const handlePrev = () => {
    if (params.page > 1) {
      setParams((prevParams) => ({ ...prevParams, page: prevParams.page - 1 }));
    }
  };

  // return <>{JSON.stringify(data.data.refundRequests)}</>;
  return (
    <div>
      <div className="">
        {!isLoading && refundRequests.length === 0 && (
          <div>
            <EmptyState msg="You currently do not have any refund record on the system." />
          </div>
        )}
        {isLoading && (
          <div className="py-12 flex justify-center items-center text-black">
            <div>
              <div className="place-center">
                <CurveLoader />
              </div>
              <p className="text-center mt-5 fw-500">
                Fetching Refund Requests...
              </p>
            </div>
          </div>
        )}
        {refundRequests.length > 0 && (
          <RefundTable
            isLoading={isLoading}
            data={refundRequests}
            page={params.page}
            next={handleNext}
            prev={handlePrev}
            count={totalRefunds}
            refetch={refetch}
            status={params.status}
          />
        )}
      </div>
    </div>
  );
};

export default RefundApprovedRequest;
