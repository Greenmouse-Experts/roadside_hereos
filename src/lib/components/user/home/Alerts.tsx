import { MdCrisisAlert } from "react-icons/md";
import { FormatStatus } from "../../../utils";
import { RxOpenInNewWindow } from "react-icons/rx";

const Alerts = () => {
  const alerts = [
    {
      title: "Service Request",
      desc: "The battery charger service provider is on the way to you",
      time: "10:23pm August 24, 2024",
    },
    {
      title: "Service Request",
      desc: "Success payment for a fuel purchase to be delivered to you",
      time: "10:23pm August 24, 2024",
    },
    {
      title: "Service Request",
      desc: "The battery charger service provider is on the way to you",
      time: "10:23pm August 24, 2024",
    },
    {
      title: "Service Payment",
      desc: "Success payment for a fuel purchase to be delivered to you",
      time: "10:23pm August 24, 2024",
    },
  ];
  const colors: string[] = [
    "border-purple-500",
    "border-blue-500",
    "border-yellow-500",
    "border-pink-500",
    "border-orange-500",
  ];
  return (
    <>
      <div className="bg-white rounded shadow p-5 mb-6">
        <div className="flex items-center gap-x-2">
        <MdCrisisAlert className="text-lg"/>
          <p className="fs-700 fw-600">Recent Requests</p>
        </div>
        <div className="mt-6">
          {alerts.map((item, index) => {
               const colorIndex = index % colors.length;
               const color = colors[colorIndex];
            return (
              <div className={`border-l-[5px] lg:flex justify-between relative ${color} rounded-l-md p-2 pb-2 lg:p-3 mb-5`}>
                <div>
                <div className="flex gap-x-2 items-center">
                <p className="fw-600">{item.title}</p>
                <RxOpenInNewWindow className="cursor-pointer"/>
                </div>
                <p className="mt-1 lg:mt-0">{item.desc}</p>
                </div>
                <div>
                <p className="fs-300 fw-600 text-primary ">{item.time}</p>
                <div className="flex justify-end mt-2">
                  {FormatStatus['ongoing']}
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Alerts;
