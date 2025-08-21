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
        <div className="lg:flex items-stretch gap-8 flex-row-reverse">
          {/* Wallet Card - leave as is */}
          <div className="bg-gradient-to-br bg-grad w-full mb-6 lg:mb-0 lg:max-w-[500px] rounded-2xl text-white p-6 shadow-2xl flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-white/10 rounded-full p-3 flex items-center justify-center">
                <SiCashapp className="text-3xl text-yellow-400" />
              </div>
              <div>
                <p className="text-gray-200 text-xs uppercase tracking-wider">
                  Profit Balance
                </p>
                <p className="fw-700 text-4xl mt-1 tracking-tight">
                  {formatAsNgnMoney(userData?.walletBal ?? 0)}.00
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-lg p-4 flex flex-col items-center">
                <p className="text-gray-300 text-xs mb-1">Pending Balance</p>
                <p className="fw-600 text-xl">
                  {formatAsNgnMoney(userData?.pendingBal ?? 0)}.00
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 flex flex-col items-center">
                <p className="text-gray-300 text-xs mb-1">Technician Pending</p>
                <p className="fw-600 text-xl">
                  {formatAsNgnMoney(userData?.driverOverallPendingBal ?? 0)}.00
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 flex flex-col items-center">
                <p className="text-gray-300 text-xs mb-1">
                  Technician Approved
                </p>
                <p className="fw-600 text-xl">
                  {formatAsNgnMoney(userData?.driverOverallWalletBal ?? 0)}.00
                </p>
              </div>
            </div>
            <button
              className="flex gap-x-2 bg-yellow-400 text-blue-900 items-center rounded-lg px-6 py-3 fw-700 hover:bg-yellow-300 transition-colors shadow-lg self-end mt-2"
              onClick={() => setShowModal(true)}
            >
              <BiMoneyWithdraw className="text-2xl" />
              <span className="text-lg">Withdraw</span>
            </button>
          </div>

          {/* Welcome Card */}
          <div className="w-full bg-gradient-to-br bg-grad rounded-2xl border border-blue-900 p-7 flex items-center shadow-2xl mb-6 lg:mb-0 min-h-[160px]">
            <div className="w-full flex flex-col gap-2">
              <h2 className="fw-800 text-2xl text-yellow-400 mb-1 flex items-center gap-2">
                👋 Welcome, <span className="capitalize">{user.name}</span>
              </h2>
              <p className="text-gray-100 fw-500 text-lg">
                This month, your company has completed&nbsp;
                <span className="fw-800 text-yellow-300 text-xl">
                  {stat?.data?.totalCompletedServiceForOneMonth || 0}
                </span>
                &nbsp;service
                {(stat?.data?.totalCompletedServiceForOneMonth || 0) === 1
                  ? ""
                  : "s"}{" "}
                for ALLDRIVE SOS users.
              </p>
              <div className="mt-2">
                <span className="inline-block bg-yellow-400/10 text-yellow-300 px-4 py-1 rounded-full fw-600 text-sm">
                  Thank you for your outstanding work!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid lg:grid-cols-3 gap-y-6 gap-x-8 dash-shade p-6 py-10 rounded-2xl mt-6 shadow-lg">
          <div className="flex items-center gap-x-4 border-r border-[#00000029] pr-6">
            <div className="circle h-[56px] w-[56px] bg-gradient-to-br from-yellow-400 to-yellow-600 text-white flex items-center justify-center shadow-lg">
              <SiCashapp className="text-2xl" />
            </div>
            <div>
              <p className="fs-700 fw-700 text-gray-900">
                {stat?.data?.totalAmount || "$0"}
              </p>
              <p className="fs-500 fw-500 text-primary">Total Amount Made</p>
            </div>
          </div>
          <div className="flex items-center gap-x-4 border-r border-[#00000029] pr-6">
            <div className="circle h-[56px] w-[56px] bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center shadow-lg">
              <BsTools className="text-2xl" />
            </div>
            <div>
              <p className="text-lg fw-700 text-gray-900">
                {stat?.data?.totalServices || "0"}
              </p>
              <p className="fs-500 fw-500 text-primary">Total Services</p>
            </div>
          </div>
          <div className="flex items-center gap-x-4 lg:border-none">
            <div className="circle h-[56px] w-[56px] bg-gradient-to-br from-green-500 to-green-700 text-white flex items-center justify-center shadow-lg">
              <GrUserWorker className="text-2xl" />
            </div>
            <div>
              <p className="text-lg fw-700 text-gray-900">
                {stat?.data?.totalDrivers || 0}
              </p>
              <p className="fs-500 fw-500 text-primary">Service Staff</p>
            </div>
          </div>
        </div>

        {/* Alerts Section */}
        <div className="mt-8">
          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Alerts data={stat?.data?.alerts || []} />
          </div>
        </div>
      </div>
      <Dialog title="Request Withdrawal" size="lg">
        <WithdrawModal
          close={() => setShowModal(false)}
          avail_bal={userData?.walletBal ?? ""}
        />
      </Dialog>
    </>
  );
};

export default ProviderHomePage;
