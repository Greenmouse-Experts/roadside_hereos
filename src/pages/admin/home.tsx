import { BiFilter } from "react-icons/bi";
import { BsBarChartLine } from "react-icons/bs";
import { formatNumber } from "../../lib/utils";
import RecentRequests from "../../lib/components/admin/home/RecentRequests";
import ActivityChart from "../../lib/components/admin/home/ActivityChart";
// import ColumnChart from "../../lib/components/admin/home/ActivityChart";

const AdminDashboardHome = () => {
  const serviceData = [
    {
      name: "Services Delivered",
      rate: "+15%",
      value: "53557",
    },
    {
      name: "Total Services",
      rate: "+115%",
      value: "81498",
    },
    {
      name: "Total Users",
      rate: "+55%",
      value: "35413",
    },
    {
      name: "Total Providers",
      rate: "+55%",
      value: "35513",
    },
  ];
  return (
    <>
      <div className="lg:flex gap-x-10">
        <div className="lg:w-[70%]">
          <div className="rounded-xl bg-review text-white p-5">
            <p>Total services amount</p>
            <p className="text-4xl fw-700 my-3">$7,456,097.00</p>
            <p>45 services providers has rendered 234 services</p>
          </div>
          <div>
            <div className="grid lg:grid-cols-2 gap-y-3 gap-x-4 mt-5 lg:mt-7">
              {serviceData &&
                !!serviceData.length &&
                serviceData.map((item, index) => (
                  <div
                    className="p-[22px] xl:grow cursor-default rounded-[10px] bg-white shadow hover:scale-x-105 duration-100"
                    key={index}
                  >
                    <div className="flex items-center justify-between">
                      <p className="uppercase fs-400 text-[#848484]">
                        {item.name}
                      </p>
                      <BiFilter className="text-[#848484] text-xl" />
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <p className="fw-900 text-xl">
                        {formatNumber(item.value)}
                      </p>
                      <div className="relative">
                        <BsBarChartLine className="text-[#0DA54E] absolute right-1" />
                        <p className="fs-300 text-[#0DA54E] fw-600 mt-4">
                          {item.rate}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="mt-6">
            <ActivityChart/>
          </div>
        </div>
        <div className="lg:w-[30%] mt-6 lg:mt-0">
            <RecentRequests/>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardHome;
