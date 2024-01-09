import { Button, Tooltip } from "@material-tailwind/react";
import { IoCheckbox } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";

const RequestList = () => {
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
      <div>
        {alerts.map((item, index) => {
          const colorIndex = index % colors.length;
          const color = colors[colorIndex];
          return (
            <div
              className={`border-l-[8px] relative flex items-center justify-between ${color}  p-3 mb-5`}
            >
              <div>
                <p className="fw-600">{item.title}</p>
                <p>{item.desc}</p>
                <p className=" fs-300 fw-600 text-primary">
                  {item.time}
                </p>
              </div>
              <div className="flex gap-x-3 ">
                <Tooltip content="View Request Details">
                  <Button className="m-0 p-0 shadow-none hover:shadow-none bg-transparent text-black">
                    <TbListDetails className="text-3xl" />
                  </Button>
                </Tooltip>
                <Tooltip content="Accept Request">
                  <Button className="m-0 p-0 shadow-none hover:shadow-none bg-transparent text-black">
                    <IoCheckbox className="text-3xl text-green-600" />
                  </Button>
                </Tooltip>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RequestList;
