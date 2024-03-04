import Alerts from "../../lib/components/user/home/Alerts";
import { formatAsNgnMoney } from "../../lib/utils";

const UsersHome = () => {
  return (
    <>
      <div>
        <div className="w-full h-[140px] bg-review border"></div>
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
              <p className="fs-700 fw-600">{formatAsNgnMoney(0)}</p>
              <p className="fs-400 fw-500 text-primary">Total Amount Spent</p>
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
              <p className="text-lg fw-600">0</p>
              <p className="fs-400 fw-500 text-primary">Total Service Request</p>
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
              <p className="text-lg fw-600">0</p>
              <p className="fs-400 fw-500 text-primary">Completed Services</p>
            </div>
          </div>
        </div>
        <div>
            <div>
                <Alerts/>
            </div>
        </div>
      </div>
    </>
  );
};

export default UsersHome;
