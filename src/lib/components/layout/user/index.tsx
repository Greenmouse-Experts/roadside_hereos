import React from "react";
import SidebarLayout from "./section/sidebar";
import { BiBell } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Tooltip, Button } from "@material-tailwind/react";
import { MdHomeRepairService } from "react-icons/md";
import UserRequests from "../../user/UserRequests";

interface Props {
  children: React.ReactNode;
}
const UserDashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex bg-primary">
        <div className="lg:w-[250px] border-r-2 bg-gray-50">
          <SidebarLayout />
        </div>
        <div className="w-full lg:w-[calc(100%_-_256px)] min-h-screen flex">
          <div className="w-full lg:w-[70%] bg-gray-50 lg:rounded-r-[40px] h-screen overflow-y-auto scroll-pro">
            <div className="h-[60px] relative index-30">
              <div className="fixed top-0 w-full lg:w-[calc(100%_-_250px)]">
                
              <div className="bg-gray-50 rounded-tr-[40px] lg:w-[69%] pl-9 pr-5 py-[26px] flex items-center justify-between">
                <div>
                  <p className="fw-600">Hello Benjamin</p>
                  <p className="fs-300 text-grya-400">
                    Today is Monday, 26, October 2021
                  </p>
                </div>
                <div className="hidden lg:flex gap-x-5 items-center">
                  <div className="flex gap-x-6">
                    <Tooltip content="Services Category">
                      <Button className="m-0 p-0 shadow-none hover:shadow-none bg-transparent text-black"><MdHomeRepairService className="text-3xl"/></Button>
                    </Tooltip>
                    <Button className="bg-primary fs-400 fw-500 text-white shadow-md px-5 py-2 rounded">
                      Request a service
                    </Button>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="px-3 lg:px-9 mt-8 lg:mt-12">{children}</div>
          </div>
          <div className="bg-primary hidden lg:block w-[30%] h-screen overflow-y-hidden">
            <UserRequests/>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboardLayout;
