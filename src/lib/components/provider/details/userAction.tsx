import {
    Button,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
  } from "@material-tailwind/react";
  import { BsArrowsExpand, BsThreeDotsVertical } from "react-icons/bs";

const UserAction = () => {
  return (
    <>
        <div>
        <Menu placement="bottom-end">
            <MenuHandler>
              <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none capitalize">
                <BsThreeDotsVertical className="text-xl text-black" />
              </Button>
            </MenuHandler>
            <MenuList className="">
              <MenuItem
                className="my-1 fw-500 flex items-center gap-x-2 pt-1"
                // onClick={() => gotoDetails(info.getValue())}
              >
                <BsArrowsExpand/> Suspend User
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
    </>
  )
}

export default UserAction