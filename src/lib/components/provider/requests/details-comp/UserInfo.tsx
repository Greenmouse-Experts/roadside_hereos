import dayjs from "dayjs";
import { FaCar } from "react-icons/fa6";
import { MdLocationPin, MdOutlineStickyNote2 } from "react-icons/md";
import ProfileAvatar from "../../../ui/ProfileAvatar";
import { Link } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { HiCurrencyDollar } from "react-icons/hi2";
import { GiAutoRepair } from "react-icons/gi";

const UserInfo = () => {
  const item = {
    name: "Reslut Dish",
    createdAt: "",
    location: "2 Metalbox close ogba.",
    requestNote: "I need to change my two back tires",
    vehicleMake: "Audi",
    vehicleYear: "2002",
    model: "Camry",
    color: "Black",
  };
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
                  name="Reslut Dish"
                  url={""}
                  size={80}
                  font={20}
                />
              </div>
              <div>
                <p className="fw-600 lg:text-lg">{item?.name}</p>
                <p className="fw-500 opacity-80">Customer</p>
              </div>
            </div>
            <div className="mt-3 mb-2 grid gap-2">
              <p className="my-1 fw-500 flex gap-x-2 items-center">
                <IoMdTime className="text-lg lg:text-2xl text-gray-500" />
                Requested at <span className="fw-600">Tire Change</span> at{" "}
                {dayjs(item?.createdAt).format("hh:mma dddd DD, MMMM YYYY")}
              </p>
              <p className="my-1 fw-500 flex gap-x-2 items-center">
                <MdLocationPin className="text-lg lg:text-2xl text-gray-500" />
                {item?.location}
              </p>
              <p className="my-1 fw-500 flex gap-x-2 items-center">
                <MdOutlineStickyNote2 className="text-lg lg:text-2xl text-gray-500" />
                {item?.requestNote}
              </p>
              <p className="my-1 fw-500 flex gap-x-2 items-center">
                <HiCurrencyDollar className="text-lg lg:text-2xl text-gray-500" />
                Qouted fee <span className="fw-600">$300</span>
              </p>
              <p className="my-1 fw-500 flex gap-x-2 items-center">
                <GiAutoRepair className="text-lg lg:text-2xl text-gray-500" />
                Service Provider{" "}
                <Link to={""} className="fw-600">
                  Christain Messi
                </Link>
              </p>
            </div>
            <div className="bg-light p-2 lg:p-4 rounded mt-2">
              <p className="my-1 fw-500 flex gap-x-2 items-center fw-600 text-gray-600">
                <FaCar className="text-lg  text-gray-500" />
                Car Details
              </p>
              <div className="grid gap-3 lg:grid-cols-2 mt-2">
                <p>
                  Make:{" "}
                  <span className="fw-500 text-gray-700">
                    {item?.vehicleMake}
                  </span>
                </p>
                <p>
                  Model:{" "}
                  <span className="fw-500 text-gray-700">{item?.model}</span>
                </p>
                <p>
                  Year:{" "}
                  <span className="fw-500 text-gray-700">
                    {item?.vehicleYear}
                  </span>
                </p>
                <p>
                  Color:{" "}
                  <span className="fw-500 text-gray-700">{item?.color}</span>
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
