import { FaCarCrash } from "react-icons/fa";
import { formatAsNgnMoney } from "../../../utils"
import { PiCoins } from "react-icons/pi";
import { FaCarOn } from "react-icons/fa6";

const UserStats = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-3 lg:gap-6">
        <div className="h-[100px] lg:h-[140px] relative overflow-hidden bg-review border flex items-center">
            <div className="pl-4">
                <div className="text-white">
                    <p className="fw-700 text-2xl lg:text-3xl">{formatAsNgnMoney(15000)}</p>
                    <p className="fw-500 mt-3">Total Amount Spent</p>
                </div>
            </div>
            <PiCoins className="text-white opacity-55 text-[90px] lg:text-[140px] absolute -right-8"/>
        </div>
        <div className="h-[100px] lg:h-[140px] relative overflow-hidden bg-review border flex items-center">
        <div className="pl-4">
                <div className="text-white">
                    <p className="fw-700 text-2xl lg:text-3xl">{3}</p>
                    <p className="fw-500 mt-3">Total Service Request</p>
                </div>
            </div>
            <FaCarCrash className="text-white opacity-55 text-[90px] lg:text-[140px] absolute -right-8"/>
        </div>
        <div className="h-[100px] lg:h-[140px] relative overflow-hidden bg-review border flex items-center">
        <div className="pl-4">
                <div className="text-white">
                    <p className="fw-700 text-2xl lg:text-3xl">0</p>
                    <p className="fw-500 mt-3">Completed services</p>
                </div>
            </div>
            <FaCarOn className="text-white opacity-55 text-[90px] lg:text-[140px] absolute -right-8"/>
        </div>
    </div>
  )
}

export default UserStats