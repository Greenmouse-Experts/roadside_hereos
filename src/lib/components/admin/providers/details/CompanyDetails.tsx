import {
  MdOutlineContactPhone,
  MdOutlineGroupAdd,
  MdOutlineHomeRepairService,
  MdOutlineMailOutline,
} from "react-icons/md";
import { UserItemType } from "../../../../types/auth";
import { FC } from "react";
import dayjs from "dayjs";
import { FaRegAddressCard } from "react-icons/fa6";
import { BsCalendar4Week } from "react-icons/bs";

interface Props {
  data: UserItemType;
}
const CompanyDetails: FC<Props> = ({ data }) => {
  return (
    <>
      <div className="bg-white p-6 shadow rounded">
        <div className="grid gap-4">
          <div className="flex items-center gap-x-4 lg:gap-x-12">
            <div className="lg:w-2/12 flex bg-primary text-white p-3 items-center gap-x-2">
              <MdOutlineGroupAdd className="text-xl" />
              <p>Name</p>
            </div>
            <div>
              <p className="fw-600">{data.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-x-4 lg:gap-x-12">
            <div className="lg:w-2/12 flex bg-primary text-white p-3 items-center gap-x-2">
              <MdOutlineMailOutline className="text-xl" />
              <p>Email</p>
            </div>
            <div>
              <p className="fw-600">{data?.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-x-4 lg:gap-x-12">
            <div className="lg:w-2/12 flex bg-primary text-white p-3 items-center gap-x-2">
              <MdOutlineContactPhone className="text-xl" />
              <p>Contact Phone</p>
            </div>
            <div>
              <p className="fw-600">{data?.phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-x-4 lg:gap-x-12">
            <div className="lg:w-2/12 flex bg-primary text-white p-3 items-center gap-x-2">
              <FaRegAddressCard className="text-xl" />
              <p>Address</p>
            </div>
            <div>
              <p className="fw-600">N/A</p>
            </div>
          </div>
          <div className="flex items-center gap-x-4 lg:gap-x-12">
            <div className="lg:w-2/12 flex bg-primary text-white p-3 items-center gap-x-2">
              <MdOutlineHomeRepairService className="text-xl" />
              <p>Services</p>
            </div>
            <div>
              <p className="fw-600">N/A</p>
            </div>
          </div>
          <div className="flex items-center gap-x-4 lg:gap-x-12">
            <div className="lg:w-2/12 border-l-2 border-orange-400 flex bg-primary text-white p-3 items-center gap-x-2">
              <BsCalendar4Week className="text-xl" />
              <p>Joined At</p>
            </div>
            <div>
              <p className="fw-600">
                {dayjs(data.createdAt).format("dddd DD, MMMM YYYY")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
