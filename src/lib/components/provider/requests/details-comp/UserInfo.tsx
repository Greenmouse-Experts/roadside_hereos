import dayjs from "dayjs";
import { FaCar } from "react-icons/fa6";
import { MdLocationPin, MdOutlineStickyNote2 } from "react-icons/md";
import ProfileAvatar from "../../../ui/ProfileAvatar";
import { IoMdTime } from "react-icons/io";
import { HiCurrencyDollar } from "react-icons/hi2";
import { GiAutoRepair } from "react-icons/gi";
import { FC } from "react";
import { formatAsNgnMoney } from "../../../../utils";
import { format_time } from "../../../../../utils/utils";

interface Props {
  data: {
    id: string;
    ref: null | string;
    userId: string;
    userType: string;
    providerId: null | string;
    status: string;
    processStatus: null | string;
    serviceId: string;
    amount: null | number;
    vehicleMake: string;
    model: string;
    vehicleYear: string;
    color: string;
    location: string;
    zipcode: string;
    requestNote: string;
    createdAt: string;
    updatedAt: string;
    latitude: string;
    longitude: string;
    city: string;
    queryNote: null | string;
    userFcmToken: string;
    state: string;
    vehicleType: string;
    completionTime: null | string;
    serviceRequestId: string;
    quote: number;
    selected: number;
    paid: number;
    distance: string;
    timeTaken: string;
    fname: string;
    lname: string;
    name: string;
    email: string;
    phone: string;
    password: string;
    isActive: number;
    isSuspended: number;
    token: null | string;
    street: null | string;
    referralId: null | string;
    level: number;
    hasActiveSubscription: null | boolean;
    isAvailableForService: null | boolean;
    expiredAt: null | string;
    planId: null | string;
    invitationId: string;
    verified: number;
    companyId: string;
    reviewsAvg: number;
    serviceCharge: null | number;
    fcmToken: string;
    pendingBal: string;
    address: string;
    deletedAt: null | string;
    photo: null | string;
    last_login: string;
    walletBal: string;
    referralSource: null | string;
    service_area: null | string;
    driverOverallPendingBal: string;
    driverOverallWalletBal: string;
    sms_opt_in: number;
    slug: string;
    icon: string;
    isPublished: number;
    questionNote: string;
    minimumQuote: null | number;
    serviceRequestStatus: string;
    serviceRequestCreatedAt: string;
    customerId: string;
    driverQuoteId: string;
    customer: {
      id: string;
      fname: string;
      lname: string;
      name: null | string;
      email: string;
      address: string;
      phone: string;
      sms_opt_in: boolean;
      password: string;
      isActive: boolean;
      isSuspended: boolean;
      photo: null | string;
      hasActiveSubscription: null | boolean;
      isAvailableForService: null | boolean;
      verified: boolean;
      expiredAt: null | string;
      planId: null | string;
      token: null | string;
      state: null | string;
      city: null | string;
      zipcode: null | string;
      street: null | string;
      userType: string;
      level: number;
      referralId: null | string;
      invitationId: null | string;
      companyId: null | string;
      reviewsAvg: number;
      serviceCharge: null | number;
      last_login: string;
      fcmToken: string;
      walletBal: null | number;
      pendingBal: null | number;
      referralSource: null | string;
      driverOverallPendingBal: null | number;
      driverOverallWalletBal: null | number;
      createdAt: string;
      updatedAt: string;
      deletedAt: null | string;
    };
    company: {
      id: string;
      fname: null | string;
      lname: null | string;
      name: string;
      email: string;
      address: null | string;
      phone: string;
      sms_opt_in: boolean;
      password: string;
      isActive: boolean;
      isSuspended: boolean;
      photo: null | string;
      hasActiveSubscription: null | boolean;
      isAvailableForService: null | boolean;
      verified: boolean;
      expiredAt: null | string;
      planId: null | string;
      token: null | string;
      state: null | string;
      city: null | string;
      zipcode: null | string;
      street: null | string;
      userType: string;
      level: null | number;
      referralId: string;
      invitationId: null | string;
      companyId: null | string;
      reviewsAvg: number;
      serviceCharge: number;
      last_login: string;
      fcmToken: string;
      walletBal: string;
      pendingBal: string;
      referralSource: null | string;
      driverOverallPendingBal: string;
      driverOverallWalletBal: string;
      createdAt: string;
      updatedAt: string;
      deletedAt: null | string;
    };
  };
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
    company,
    completionTime,
    timeTaken,
  } = data;
  // return <>{JSON.stringify(data)}</>;
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

            {/*<div className="bg-light p-2 lg:p-4 rounded mt-2">
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
            </div>*/}

            <div className="mt-3 mb-2 grid gap-2">
              <p className="my-1 fw-500 flex gap-x-2 items-center">
                <IoMdTime className="text-lg lg:text-2xl text-gray-500" />
                Requested <span className="fw-600">{name}</span> at{" "}
                {/*{dayjs(serviceRequestCreatedAt).format(
                  "hh:mma dddd DD, MMMM YYYY",
                )}*/}
                {format_time(serviceRequestCreatedAt)}
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
              {completionTime && (
                <p className="my-1 fw-500 flex gap-x-2 items-center">
                  <IoMdTime className="text-lg lg:text-2xl text-gray-500" />
                  Completion Time:{" "}
                  <span className="fw-600">{format_time(completionTime)}</span>
                </p>
              )}
              {data.completionTime && (
                <p className="my-1 fw-500 flex gap-x-2 items-center">
                  <IoMdTime className="text-lg lg:text-2xl text-gray-500" />
                  Response Time:{" "}
                  <span className="fw-600">{format_time(completionTime)}</span>
                </p>
              )}
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
                    <span className="fw-500 text-gray-700">
                      {company?.name}
                    </span>
                  </p>
                  <p>
                    Email:{" "}
                    <span className="fw-500 text-gray-700">
                      {company?.email}
                    </span>
                  </p>
                  <p>
                    Phone Number:{" "}
                    <span className="fw-500 text-gray-700">
                      {company?.phone}
                    </span>
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
                    <span className="fw-500 text-gray-700">
                      {fname} {lname}
                    </span>
                  </p>
                  <p>
                    Email: {"  "}{" "}
                    <span className="fw-500 text-gray-700">{email}</span>
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
