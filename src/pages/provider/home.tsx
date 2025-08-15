import { BiMoneyWithdraw } from "react-icons/bi";
import Alerts from "../../lib/components/provider/home/Alerts";
import useAuth from "../../lib/hooks/authUser";
import { formatAsNgnMoney } from "../../lib/utils";
import { getMe } from "../../lib/services/api/usersApi";
import { useEffect, useState } from "react";
import useDialog from "../../lib/hooks/useDialog";
import WithdrawModal from "../../lib/components/provider/home/WithdrawModal";
import { useQuery } from "@tanstack/react-query";
import { getProviderStat } from "../../lib/services/api/companyApi";
import { GrUserWorker } from "react-icons/gr";
import { BsTools } from "react-icons/bs";
import { SiCashapp } from "react-icons/si";

interface User {
  id: string;
  fname: string | null;
  lname: string | null;
  name: string;
  email: string;
  address: string | null;
  phone: string;
  sms_opt_in: boolean;
  password: string;
  isActive: boolean;
  isSuspended: boolean | null;
  photo: string | null;
  hasActiveSubscription: boolean | null;
  isAvailableForService: boolean | null;
  verified: boolean;
  expiredAt: string | null;
  planId: string | null;
  token: string | null;
  state: string | null;
  city: string | null;
  zipcode: string | null;
  street: string | null;
  userType: string;
  level: string | null;
  referralId: string;
  invitationId: string | null;
  companyId: string | null;
  reviewsAvg: number;
  serviceCharge: number;
  last_login: string;
  fcmToken: string | null;
  walletBal: string;
  pendingBal: string;
  referralSource: string;
  driverOverallPendingBal: string;
  driverOverallWalletBal: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  profile: {
    id: string;
    userId: string;
    userType: string;
    isVerified: boolean | null;
    company_address: string | null;
    company_state: string | null;
    company_city: string | null;
    company_street: string | null;
    company_name: string | null;
    years_of_experience: number | null;
    certificate_of_operation: string | null;
    tax_certificate: string | null;
    serviceTypeId: string;
    hasActiveSubscription: boolean | null;
    expiredAt: string | null;
    planId: string | null;
    rating: number | null;
    service_category: string | null;
  };
  rating: string;
}
const ProviderHomePage = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState<User>();
  const { data: stat } = useQuery({
    queryKey: ["get-provider-stat"],
    queryFn: getProviderStat,
  });
  useEffect(() => {
    const handleFetch = async () => {
      await getMe("professional").then((res) => {
        setUserData(res.user);
      });
    };
    handleFetch();
  }, []);
  const { Dialog, setShowModal } = useDialog();
  return (
    <>
      <div>
        <div className="lg:flex items-stretch gap-6 flex-row-reverse">
          <div className="bg-review w-[500px] rounded-lg text-white p-4 lg:p-8 shadow-xl">
            <div className="mb-4">
              <p className="text-gray-200 text-sm">Pending balance</p>
              <p className="fw-600 text-2xl mt-1">
                {formatAsNgnMoney(userData?.pendingBal) || "$0"}.00
              </p>
              <div className="mt-2">
                <p className="text-gray-200 text-sm">
                  Tecnhician Pending balance
                </p>
                <p className="fw-600 text-md mt-1">
                  {formatAsNgnMoney(userData?.driverOverallPendingBal) || "$0"}
                  .00
                </p>
              </div>
              <div>
                {" "}
                <p className="text-gray-200 text-sm">
                  Tecnhician Approved Balance
                </p>
                <p className="fw-600 md mt-1">
                  {formatAsNgnMoney(userData?.driverOverallWalletBal) || "$0"}
                  .00
                </p>
              </div>
              {/*{userData.driverOverallPendingBal}*/}
            </div>
            <div className="flex items-center justify-between mt-6">
              <p className="fw-500 text-gray-200 text-base">Current Balance</p>
            </div>
            <p className="fw-600 text-3xl  mb-6">
              {formatAsNgnMoney(userData?.walletBal)}.00
            </p>
            <button
              className="flex gap-x-2 bg-blue-900 items-center bg-all text-review rounded px-4 py-2 fw-600 hover:opacity-80 transition-opacity shadow-md"
              onClick={() => setShowModal(true)}
            >
              <BiMoneyWithdraw className="text-xl" />
              <p className="text-lg">Withdraw</p>
            </button>
          </div>
          <div className="w-full h-[140px] lg:h-auto bg-review rounded-lg border p-3 lg:px-5 flex items-center">
            <div className="w-full">
              <p className="fw-600 text-white text-lg uppercase">
                WELCOME BACK! {user.name}
              </p>
              <p className="lg:w-8/12 mt-3 text-gray-400 fw-500 fs-400 ">
                Your company have rendered a total of{" "}
                <span className="fw-500">
                  {stat?.data?.totalCompletedServiceForOneMonth || 0}
                </span>{" "}
                services to ALLDRIVE SOS users this month.
              </p>
              <p className="lg:w-8/12 text-gray-400 fw-500 fs-400 ">
                We appreciate your contribution.
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-y-6 gap-x-6 dash-shade p-5 py-8 rounded-lg">
          <div className="flex items-center gap-x-3 border-r border-[#00000059]">
            <div className="circle h-[56px] w-[56px] bg-review text-white place-center">
              <SiCashapp className="text-2xl" />
            </div>
            <div>
              <p className="fs-700 fw-600">{stat?.data?.totalAmount || "$0"}</p>
              <p className="fs-500 fw-500 text-primary">Total Amount Made</p>
            </div>
          </div>
          <div className="flex items-center gap-x-3 border-r border-[#00000059]">
            <div className="circle h-[56px] w-[56px] bg-review text-white place-center">
              <BsTools className="text-2xl" />
            </div>
            <div>
              <p className="text-lg fw-600">
                {stat?.data?.totalServices || "0"}
              </p>
              <p className="fs-500 fw-500 text-primary">Total Services</p>
            </div>
          </div>
          <div className="flex items-center gap-x-3 border-r border-[#00000059] lg:border-none">
            <div className="circle h-[56px] w-[56px] bg-review text-white place-center">
              <GrUserWorker className="text-2xl" />
            </div>
            <div>
              <p className="text-lg fw-600">{stat?.data?.totalDrivers || 0}</p>
              <p className="fs-500 fw-500 text-primary">Service Staff</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Alerts data={stat?.data?.alerts || []} />
          </div>
        </div>
      </div>
      <Dialog title="Request Withdrawal" size="lg">
        <WithdrawModal
          close={() => setShowModal(false)}
          avail_bal={userData?.walletBal}
        />
      </Dialog>
    </>
  );
};

export default ProviderHomePage;
