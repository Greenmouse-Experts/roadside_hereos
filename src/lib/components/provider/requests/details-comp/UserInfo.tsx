import dayjs from "dayjs";
import { FaCar } from "react-icons/fa6";
import { MdLocationPin, MdOutlineStickyNote2 } from "react-icons/md";
import ProfileAvatar from "../../../ui/ProfileAvatar";
import { IoMdTime } from "react-icons/io";
import { HiCurrencyDollar } from "react-icons/hi2";
import { GiAutoRepair } from "react-icons/gi";
import { FC } from "react";
import { formatAsNgnMoney } from "../../../../utils";

interface Props {
  data: any;
}
const UserInfo: FC<Props> = ({ data }) => {
  const {
    fname,
    lname,
    address,
    email,
    phone,
    location,
    color,
    name,
    model,
    serviceRequestCreatedAt,
    requestNote,
    vehicleMake,
    vehicleYear,
    quote,
    customer,
    company
  } = data;

  return (
    <div className="bg-white shadow mt-6 rounded-lg p-4">
      <div>
        <div className="flex justify-between">
          <p className="fw-500 flex items-center gap-x-1 text-lg">
            <span className="block w-4 h-4 circle bg-primary"></span> Service
            Information
          </p>
        </div>
      </div>
      <div className="mt-6">
        <div className="text-black">
          <div>
            <div className="flex items-center gap-x-2">
              <div>
                <ProfileAvatar
                  name={`${customer.fname} ${customer.lname}`}
                  url={""}
                  size={80}
                  font={20}
                />
              </div>
              <div>
                <p className="fw-600 lg:text-lg">{`${customer.fname} ${customer.lname}`}</p>
                <p className="fw-500 opacity-80">Customer</p>
              </div>
            </div>

            <div className="bg-light p-2 lg:p-4 rounded mt-2">
              <p className="my-1 fw-500 flex gap-x-2 items-center fw-600 text-gray-600">
                User Details
              </p>
              <div className="grid gap-3 lg:grid-cols-2 mt-2">
                <p>
                  Address:{" "}
                  <span className="fw-500 text-gray-700">{customer.address}</span>
                </p>
                <p>
                  Email: <span className="fw-500 text-gray-700">{customer.email}</span>
                </p>
                <p>
                  Phone Number:{" "}
                  <span className="fw-500 text-gray-700">{customer.phone}</span>
                </p>
              </div>
            </div>

            <div className="mt-3 mb-2 grid gap-2">
              <p className="my-1 fw-500 flex gap-x-2 items-center">
                <IoMdTime className="text-lg lg:text-2xl text-gray-500" />
                Requested <span className="fw-600">{name}</span> at{" "}
                {dayjs(serviceRequestCreatedAt).format("hh:mma dddd DD, MMMM YYYY")}
              </p>
              <p className="my-1 fw-500 flex gap-x-2 items-center">
                <MdLocationPin className="text-lg lg:text-2xl text-gray-500" />
                {location}
              </p>
              <p className="my-1 fw-500 flex gap-x-2 items-center">
                <MdOutlineStickyNote2 className="text-lg lg:text-2xl text-gray-500" />
                {requestNote}
              </p>
              <p className="my-1 fw-500 flex gap-x-2 items-center">
                <HiCurrencyDollar className="text-lg lg:text-2xl text-gray-500" />
                Quoted fee{" "}
                <span className="fw-600">{formatAsNgnMoney(quote)}</span>
              </p>
            </div>

            <div className="border p-2 lg:p-4 rounded mt-2">
              <p className="my-1 fw-500 flex gap-x-2 items-center fw-600 text-gray-600">
                <GiAutoRepair className="text-lg lg:text-2xl text-gray-500" />
                Service Provider
              </p>

              <div className="p-2 lg:p-4 mt-2">
                <p className="my-1 fw-500 flex gap-x-2 items-center fw-600 text-gray-600">
                  Company Details
                </p>
                <div className="grid gap-3 lg:grid-cols-2 mt-4">
                  <p>
                    Name:{" "}
                    <span className="fw-500 text-gray-700">{company.name}</span>
                  </p>
                  <p>
                    Email: {" "} <span className="fw-500 text-gray-700">{company.email}</span>
                  </p>
                  <p>
                    Phone Number: {" "}
                    <span className="fw-500 text-gray-700">{company.phone}</span>
                  </p>
                </div>
              </div>

              <div className="p-2 lg:p-4 mt-2">
                <p className="my-1 fw-500 flex gap-x-2 items-center fw-600 text-gray-600">
                  Technician
                </p>
                <div className="grid gap-3 lg:grid-cols-2 mt-4">
                  <p>
                    Name:{" "}
                    <span className="fw-500 text-gray-700">{fname} {lname}</span>
                  </p>
                  <p>
                    Email: {"  "} <span className="fw-500 text-gray-700">{email}</span>
                  </p>
                  <p>
                    Phone Number:{"  "}
                    <span className="fw-500 text-gray-700">{phone}</span>
                  </p>
                  <p>
                    Address:{"  "}
                    <span className="fw-500 text-gray-700">{address}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-light p-2 lg:p-4 rounded mt-2">
              <p className="my-1 fw-500 flex gap-x-2 items-center fw-600 text-gray-600">
                <FaCar className="text-lg  text-gray-500" />
                Car Details
              </p>
              <div className="grid gap-3 lg:grid-cols-2 mt-2">
                <p>
                  Make:{" "}
                  <span className="fw-500 text-gray-700">{vehicleMake}</span>
                </p>
                <p>
                  Model: <span className="fw-500 text-gray-700">{model}</span>
                </p>
                <p>
                  Year:{" "}
                  <span className="fw-500 text-gray-700">{vehicleYear}</span>
                </p>
                <p>
                  Color: <span className="fw-500 text-gray-700">{color}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
