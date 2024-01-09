import React from "react";
import { FaRegUser } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineLocationOn } from "react-icons/md";

const RecentRequests = () => {
  const requests = [
    {
      name: "Godson Ibinabo",
      service: "Battery Charger",
      location: "2, Acme road, Bussdown",
      time: "2 hours ago",
    },
    {
      name: "Godson Ibinabo",
      service: "Battery Charger",
      location: "2, Acme road, Bussdown",
      time: "2 hours ago",
    },
    {
      name: "Godson Ibinabo",
      service: "Battery Charger",
      location: "2, Acme road, Bussdown",
      time: "2 hours ago",
    },
    {
      name: "Godson Ibinabo",
      service: "Battery Charger",
      location: "2, Acme road, Bussdown",
      time: "2 hours ago",
    },
    {
      name: "Godson Ibinabo",
      service: "Battery Charger",
      location: "2, Acme road, Bussdown",
      time: "2 hours ago",
    },
    {
      name: "Godson Ibinabo",
      service: "Battery Charger",
      location: "2, Acme road, Bussdown",
      time: "2 hours ago",
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
      <div className="w-full rounded-xl">
        <div className="bg-primary text-white rounded-t-xl px-4 py-4">
          <p className="text-lg fw-600">Recent Requests</p>
        </div>
        <div className="p-4 bg-white rounded-b-xl">
          {requests.map((item, index) => {
            const colorIndex = index % colors.length;
            const color = colors[colorIndex];
            return (
              <div className={`border-l-[5px] ${color} cursor-pointer pl-2 py-2 mb-3 bg-gray-50 hover:scale-105 duration-100`}>
                <div className="flex items-center gap-x-2">
                  <FaRegUser className='text-gray-500'/>
                  <p className="fs-500">{item.name}</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <GrTransaction className='text-gray-500'/>
                  <p className="text-primary fw-600">{item.service}</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <MdOutlineLocationOn className='text-gray-500 text-lg'/>
                  <p className="fw-500 fs-500">{item.location}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RecentRequests;
