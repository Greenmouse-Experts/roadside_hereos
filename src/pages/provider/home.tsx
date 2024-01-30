import Alerts from "../../lib/components/provider/home/Alerts";
import useAuth from "../../lib/hooks/authUser";
import { formatAsNgnMoney } from "../../lib/utils";

const ProviderHomePage = () => {
  const { user} = useAuth()
  return (
    <>
      <div>
        <div className="w-full h-[140px] bg-review border p-3 lg:px-5 flex items-center">
          <div className="w-full">
            <p className="fw-600 text-white text-lg uppercase">WELCOME BACK! {user.name}</p>
            <p className="lg:w-8/12 mt-3 text-gray-400 fw-500 fs-400 ">Your company have rendered a total of <span className="fw-500">0</span> services to ALLDRIVE SOS users this month.</p>
            <p className="lg:w-8/12 text-gray-400 fw-500 fs-400 ">We appreciate your contribution.</p>
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
    </>
  );
};

export default ProviderHomePage;
