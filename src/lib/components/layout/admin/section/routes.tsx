import {
  MdOutlineDashboard,
} from 'react-icons/md';
import { HiOutlineUsers } from "react-icons/hi2";
import { RiUserSettingsLine } from 'react-icons/ri';
import { BiCategoryAlt, BiGitPullRequest } from 'react-icons/bi';
import { LuServerCog } from 'react-icons/lu';
import { IoNotificationsCircleOutline } from "react-icons/io5";
export interface RouteType {
  name:string;
  icon: any;
  route:string;
  submenu: {
    name:string;
    icon: any;
    route:string;
  }[]
}
export const Routes = [
  {
    name: 'Dashboard',
    icon: <MdOutlineDashboard className="text-xl" />,
    route: '/admin',
    submenu: [],
  },
  {
    name: 'Users',
    icon: <HiOutlineUsers className="text-xl" />,
    route: '/admin/users',
    submenu: [],
  },
  {
    name: 'Providers',
    icon: <RiUserSettingsLine className="text-xl" />,
    route: '/admin/providers',
    submenu: [],
  },
  {
    name: 'Service List',
    icon: <BiCategoryAlt className="text-xl" />,
    route: '/admin/category',
    submenu: [],
  },
  {
    name: 'Pending Requests',
    icon: <BiGitPullRequest className="text-xl" />,
    route: '/admin/requests',
    submenu: [],
  },
  {
    name: 'Completed Services',
    icon: <LuServerCog className="text-xl" />,
    route: '/admin/services',
    submenu: [],
  },
  {
    name: 'Notifications',
    icon: <IoNotificationsCircleOutline className="text-xl" />,
    route: '/admin/notify',
    submenu: [],
  },
]