import { Link } from "react-router-dom";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { BiBell } from "react-icons/bi";

const ProviderNotifyDrop = () => {
  return (
    <>
      <Menu placement="bottom-end">
        <MenuHandler>
          <Button className="p-1 bg-transparent !shadow-none">
            <div className="relative cursor-pointer text-primary">
              <p className="w-5 h-5 flex items-center justify-center circle bg-[#B3561B] fs-200 text-white absolute -top-1 right-0">
                4
              </p>
              <BiBell className="text-4xl" />
            </div>
          </Button>
        </MenuHandler>
        <MenuList className="p-0 index-30">
          <MenuItem className="p-0 pb-4 w-64 lg:w-72">
            <p className="mb-3 text-white bg-primary py-2 pl-3 text-lg fw-600">
              Notifications
            </p>
            {/* {unread &&
                      !!unread.length &&
                      unread
                        .slice(0, 5)
                        .map((item: NotifyItem, index: number) => (
                          <div className="border-b border-gray-700 pb-2 px-4 mb-2">
                            <p className="pr-2 fs-300 fw-500">{formatName(item.message, 43)}</p>
                            <p className="italic fs-300 mt-1">
                              {dayjs(item.createdAt).fromNow()}
                            </p>
                          </div>
                        ))} */}
            <Link to="/admin/notify">
              <p className="text-center hover:text-orange-500">View All</p>
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default ProviderNotifyDrop;
