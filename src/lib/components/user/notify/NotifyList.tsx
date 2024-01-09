import { FC, useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Menu,
  Button,
  MenuItem,
  MenuList,
  MenuHandler,
} from "@material-tailwind/react";
// import { toast } from "react-toastify";
// dayjs time format
// const dayjs = require("dayjs");
// const relativeTime = require("dayjs/plugin/relativeTime");
// dayjs.extend(relativeTime);

interface Props {
  status: string;
}
const NotifyList: FC<Props> = ({ status }) => {
  const [notify, setNotify] = useState<any[]>([]);
  const notice = [
    {
      text: "A mechanic is on the way to you",
      read: false,
      createdAt: "",
    },
    {
      text: "Payment for 5 litres of fuel is successful",
      read: false,
      createdAt: "",
    },
    {
      text: "A mechanic is on the way to you",
      read: false,
      createdAt: "",
    },
    {
      text: "A Battery repaire is on the way to you",
      read: true,
      createdAt: "",
    },
  ];

  useEffect(() => {
    if (status === "unread") {
      const filtered = notice.filter((where) => !where.read);
      setNotify(filtered);
    } else setNotify(notice);
  }, [status]);

  //   const { data, isLoading, refetch } = useGetAdminNotifyQuery(status);
  //   const [mark] = useLazyAdminMarkNotifyQuery()
  //   const MarkAsRead = async(item:string) => {
  //     await mark(item)
  //     .then((res) => {
  //         if(res.isSuccess){
  //             toast.success('Marked as read')
  //             refetch()
  //         }
  //     })
  //     .catch(() => {})
  //   }
  return (
    <>
      <div>
        {/* {isLoading && (
          <div className="py-12">
            <BoxTopLoader size={4} />
            <p className="text-center">Fetching...</p>
          </div>
        )} */}
        <div className="grid gap-4">
          {notify &&
            notify.length &&
            notify.map((item, i: number) => (
              <div
                key={i}
                className={`bg-primary p-3 rounded-[15px] text-white flex items-center justify-between hover:scale-105 duration-100 ${
                  !item.read && `border-[3px] border-blue-400`
                }`}
              >
                <div className="flex items-center gap-x-2">
                  <img
                    src={`https://i.pravatar.cc/280${i}`}
                    alt="profile"
                    width={100}
                    height={100}
                    className="w-10 circle"
                  />
                  <div>
                    <p className="">{item.text}</p>
                    <p className="text-[14px] text-[#808080]">
                      {/* {dayjs(item.createdAt).fromNow()} */} 2 mins ago
                    </p>
                  </div>
                </div>
                <div>
                  <Menu placement="bottom-end">
                    <MenuHandler>
                      <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none text-white capitalize">
                        <BsThreeDotsVertical className="text-xl" />
                      </Button>
                    </MenuHandler>
                    <MenuList className="bg-[#0D0D0D]">
                      <MenuItem className="my-1 fw-500 text-white bg-primary pt-1">
                        Mark as read
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default NotifyList;
