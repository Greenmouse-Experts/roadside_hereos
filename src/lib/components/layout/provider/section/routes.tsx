import {
  MdOutlineDashboard, MdOutlineHomeRepairService,
} from 'react-icons/md';
import {  BiGitPullRequest } from 'react-icons/bi';
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
    route: '/provider',
    submenu: [],
  },
  {
    name: 'Service Requests',
    icon: <MdOutlineHomeRepairService className="text-xl" />,
    route: '/provider/request',
    submenu: [],
  },
  {
    name: 'My Services',
    icon: <BiGitPullRequest className="text-xl" />,
    route: '/provider/services',
    submenu: [],
  },
  {
    name: 'Notifications',
    icon: <IoNotificationsCircleOutline className="text-xl" />,
    route: '/provider/notify',
    submenu: [],
  },
  {
    name: 'Payments',
    icon: <LuServerCog className="text-xl" />,
    route: '/provider/payments',
    submenu: [],
  },
  {
    name: 'Settings',
    icon: <BsGear className="text-xl" />,
    route: '/provider/settings',
    submenu: [],
  },
]