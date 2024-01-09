import React from "react";
import { IoExpand } from "react-icons/io5";
import { MdCrisisAlert } from "react-icons/md";

const Alerts = () => {
  const alerts = [
    {
      title: "Service Request",
      desc: "Battery Charger request at oshodi underbrige fo a corolla 2015 model",
      time: "10:23pm August 24, 2024",
    },
    {
      title: "Service Request",
      desc: "Battery Charger request at oshodi underbrige fo a corolla 2015 model",
      time: "10:23pm August 24, 2024",
    },
    {
      title: "Service Request",
      desc: "Battery Charger request at oshodi underbrige fo a corolla 2015 model",
      time: "10:23pm August 24, 2024",
    },
    {
      title: "Service Payment",
      desc: "Battery Charger request at oshodi underbrige fo a corolla 2015 model",
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
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <MdCrisisAlert className="text-lg" />
            <p className="fs-700 fw-600">Alerts</p>
          </div>
          <div>
            <IoExpand className="text-xl cursor-pointer hover:scale-110 duration-100"/>
          </div>
        </div>
        <div className="mt-6">
          {alerts.map((item, index) => {
            const colorIndex = index % colors.length;
            const color = colors[colorIndex];
            return (
              <div
                className={`border-l-[5px] relative ${color} rounded-l-md p-3 mb-5`}
              >
                <p className="fw-600">{item.title}</p>
                <p>{item.desc}</p>
                <p className="absolute fs-300 top-2 fw-600 text-primary right-2">
                  {item.time}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Alerts;
