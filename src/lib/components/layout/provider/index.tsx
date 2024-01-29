import React from "react";
import SidebarLayout from "./section/sidebar";
import { RiArrowDropDownLine, RiMenu4Fill } from "react-icons/ri";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { BsGear } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import useModal from "../../../hooks/useModal";
import useAuth from "../../../hooks/authUser";
import LogoutModal from "../../auth/LogoutModal";
import ProfileAvatar from "../../ui/ProfileAvatar";
import ProviderNotifyDrop from "../../provider/home/NotifyDrop";

interface Props {
  children: React.ReactNode;
}
const ProviderDashboardLayout: React.FC<Props> = ({ children }) => {
  const { user } = useAuth();
  const { Modal, setShowModal } = useModal();
  return (
    <>
      <div className="flex bg-light">
        <div className="lg:w-[250px]">
          <SidebarLayout />
        </div>
        <div className="w-full lg:w-[calc(100%_-_256px)] min-h-screen bg-light py-4 lg:py-9">
          <div className="">
            <div className="h-[60px] relative index-30">
              <div className="fixed top-0 w-full lg:w-[calc(100%_-_250px)] pl-3 lg:pl-9 pr-5 py-4 lg:py-[26px] bg-light flex items-center justify-between">
              <RiMenu4Fill className='lg:hidden text-4xl' />
                <p className="fw-600 hidden lg:block">Company Dashboard</p>
                <div className="flex gap-x-5 items-center">
                  <ProviderNotifyDrop/>
                  <div className="hidden lg:flex gap-x-4 items-center">
                  <ProfileAvatar url={user.image} name={user.name} size={44} font={17}/>
                    <div className="flex gap-x-4 items-center cursor-pointer">
                    <p className="fw-500">{user.name}</p>
                      <Menu placement="bottom-start">
                        <MenuHandler>
                          <Button className="p-0 m-0 bg-transparent !shadow-none">
                            <RiArrowDropDownLine className="cursor-pointer text-black text-3xl" />
                          </Button>
                        </MenuHandler>
                        <MenuList className="index-30 text-black w-44">
                          <MenuItem className="flex gap-x-2 items-center fw-500">
                            <BsGear className="text-2xl" />
                            Settings
                          </MenuItem>
                          <MenuItem
                            className="flex gap-x-2 items-center fw-500"
                            // onClick={logout}
                          >
                            <IoLogOutOutline className="text-2xl" />
                            Logout
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 lg:px-9">{children}</div>
          </div>
        </div>
        <Modal title="" size="xs">
        <LogoutModal CloseModal={() => setShowModal(false)} />
      </Modal>
      </div>
    </>
  );
};

export default ProviderDashboardLayout;
