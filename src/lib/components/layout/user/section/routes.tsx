import {
  MdOutlineDashboard,
} from 'react-icons/md';
import { BiGitPullRequest } from 'react-icons/bi';
import { LuServerCog } from 'react-icons/lu';
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { BsGear } from 'react-icons/bs';
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
    route: '/user',
    submenu: [],
  },
  {
    name: 'My Requests',
    icon: <BiGitPullRequest className="text-xl" />,
    route: '/user/requests',
    submenu: [],
  },
  {
    name: 'Services',
    icon: <LuServerCog className="text-xl" />,
    route: '/user/services',
    submenu: [],
  },
  {
    name: 'Notifications',
    icon: <IoNotificationsCircleOutline className="text-xl" />,
    route: '/user/notify',
    submenu: [],
  },
  
  {
    name: 'Settings',
    icon: <BsGear className="text-xl" />,
    route: '/user/settings',
    submenu: [],
  },
]