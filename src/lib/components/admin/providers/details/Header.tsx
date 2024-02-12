import { FC } from "react";
import {
    Button,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
  } from "@material-tailwind/react";
import ProfileAvatar from "../../../ui/ProfileAvatar";
import { FormatStatus } from "../../../../utils";

interface Props {
  id: string;
  name: string;
  picture: string;
  status: string;
  email: string;
}
const ProviderDetailsHeader: FC<Props> = ({ id, picture, status, email, name }) => {
  return (
    <>
      <div className="relative">
        <div className="bg-primary flex justify-end gap-x-3 p-8 w-full rounded-lg">
          <div className="text-end">
            <div className="flex items-center gap-x-5">
              <p className="text-white fw-600 lg:text-lg">{name}</p>
              <Menu placement="bottom-end">
            <MenuHandler>
              <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none capitalize">
              <>
                {status? FormatStatus['active'] : FormatStatus['Inactive']}
              </>
              </Button>
            </MenuHandler>
            <MenuList className="">
              <MenuItem
                className="my-1 fw-500 flex items-center gap-x-2 pt-2"
                // onClick={() => gotoDetails(info.getValue())}
              >
                Suspend Provider
              </MenuItem>
            </MenuList>
          </Menu>
            </div>
            <div>
              <p className="text-gray-300 italic">{email}</p>
            </div>
          </div>
        </div>
        <div className="absolute top-16 left-6">
            <ProfileAvatar url={picture} name={name} size={130} font={35}/>
        </div>
      </div>
    </>
  );
};

export default ProviderDetailsHeader;
