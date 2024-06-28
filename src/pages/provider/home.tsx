import { BiMoneyWithdraw } from "react-icons/bi";
import Alerts from "../../lib/components/provider/home/Alerts";
import useAuth from "../../lib/hooks/authUser";
import { formatAsNgnMoney } from "../../lib/utils";
import { getMe } from "../../lib/services/api/usersApi";
import { useEffect, useState } from "react";
import useDialog from "../../lib/hooks/useDialog";
import WithdrawModal from "../../lib/components/provider/home/WithdrawModal";

const ProviderHomePage = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState<any>()
  useEffect(() => {
    const handleFetch = async () => {
      await getMe('professional')
      .then((res) => {
        setUserData(res.user)
      })
    }
    handleFetch()
  },[])
  const {Dialog, setShowModal} = useDialog()
  return (
    <>
      <div>
        <div className="lg:flex items-stretch gap-6 flex-row-reverse">
          <div className="bg-review w-[500px] rounded-lg text-white p-4 lg:p-8">
            <div className="mb-2">
              <p>Pending Balance</p>
              <p className="fw-600 text-xl mt-1">
              {formatAsNgnMoney(userData?.pendingBal) || '$0'}.00
            </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="fw-500">Current Balance</p>
              <div className="flex gap-x-1 items-center cursor-pointer" onClick={() => setShowModal(true)}>
                <BiMoneyWithdraw />
                <p className="fs-500 fw-600">Withdraw</p>
              </div>
            </div>
            <p className="fw-600 text-3xl mt-3">
              {formatAsNgnMoney(userData?.walletBal)}.00
            </p>
          </div>
          <div className="w-full h-[140px] lg:h-auto bg-review rounded-lg border p-3 lg:px-5 flex items-center">
            <div className="w-full">
              <p className="fw-600 text-white text-lg uppercase">
                WELCOME BACK! {user.name}
              </p>
              <p className="lg:w-8/12 mt-3 text-gray-400 fw-500 fs-400 ">
                Your company have rendered a total of{" "}
                <span className="fw-500">0</span> services to ALLDRIVE SOS users
                this month.
              </p>
              <p className="lg:w-8/12 text-gray-400 fw-500 fs-400 ">
                We appreciate your contribution.
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-y-6 gap-x-6 dash-shade p-5 py-8 rounded-lg">
          <div className="flex items-center gap-x-3 border-r border-[#00000059]">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686663402/pikaboo/Group_46754_rum9nv.png"
              alt="fleet"
              width={80}
              height={80}
              className="circle w-[56px]"
            />
            <div>
              <p className="fs-700 fw-600">{formatAsNgnMoney(3400)}</p>
              <p className="fs-400 fw-500 text-primary">Total Amount Made</p>
            </div>
          </div>
          <div className="flex items-center gap-x-3 border-r border-[#00000059]">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686663402/pikaboo/Group_46755_way6dw.png"
              alt="fleet"
              width={80}
              height={80}
              className="circle w-[56px]"
            />
            <div>
              <p className="text-lg fw-600">56</p>
              <p className="fs-400 fw-500 text-primary">Total Services</p>
            </div>
          </div>
          <div className="flex items-center gap-x-3 border-r border-[#00000059] lg:border-none">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686663402/pikaboo/Group_46758_pfi4y0.png"
              alt="fleet"
              width={80}
              height={80}
              className="circle w-[56px]"
            />
            <div>
              <p className="text-lg fw-600">10</p>
              <p className="fs-400 fw-500 text-primary">Service Staff</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Alerts />
          </div>
        </div>
      </div>
      <Dialog title="Request Withdrawal" size="lg">
        <WithdrawModal close={() => setShowModal(false)} avail_bal={userData?.walletBal}/>
      </Dialog>
    </>
  );
};

export default ProviderHomePage;
