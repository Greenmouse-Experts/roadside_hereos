import {
  MdInsertInvitation,
  MdOutlineCrisisAlert,
  MdOutlineDashboard, MdOutlineHomeRepairService,
} from 'react-icons/md';
import {  BiGitPullRequest } from 'react-icons/bi';
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
    route: '/provider',
    submenu: [],
  },
  {
    name: 'Invites',
    icon: <MdInsertInvitation className="text-xl" />,
    route: '/provider/invite',
    submenu: [],
  },
  {
    name: 'Staffs',
    icon: <MdOutlineHomeRepairService className="text-xl" />,
    route: '/provider/staff',
    submenu: [],
  },
  {
    name: 'Services',
    icon: <BiGitPullRequest className="text-xl" />,
    route: '/provider/services',
    submenu: [],
  },
  {
    name: 'Services Alerts',
    icon: <MdOutlineCrisisAlert className="text-xl" />,
    route: '/provider/services-alerts',
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
]