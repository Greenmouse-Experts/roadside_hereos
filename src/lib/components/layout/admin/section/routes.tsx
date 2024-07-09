import {
  MdOutlineDashboard, MdOutlineRateReview,
} from 'react-icons/md';
import { HiOutlineUsers } from "react-icons/hi2";
import { RiCarWashingFill, RiSecurePaymentFill, RiUserSettingsLine } from 'react-icons/ri';
import { BiCategoryAlt, BiGitPullRequest } from 'react-icons/bi';
import { LuServerCog } from 'react-icons/lu';
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { BsCashCoin } from 'react-icons/bs';
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
    name: 'Service Requests',
    icon: <BiGitPullRequest className="text-xl" />,
    route: '/admin/requests',
    submenu: [],
  },
  {
    name: 'Fulfilled Services',
    icon: <RiCarWashingFill className="text-xl" />,
    route: '/admin/fulfilled-services',
    submenu: [],
  },
  {
    name: 'Completed Services',
    icon: <LuServerCog className="text-xl" />,
    route: '/admin/services',
    submenu: [],
  },
  {
    name: 'Service Reviews',
    icon: <MdOutlineRateReview className="text-xl" />,
    route: '/admin/reviews',
    submenu: [],
  },
  {
    name: 'Notifications',
    icon: <IoNotificationsCircleOutline className="text-xl" />,
    route: '/admin/notify',
    submenu: [],
  },
  {
    name: 'Payouts',
    icon: <RiSecurePaymentFill className="text-xl" />,
    route: '/admin/payouts',
    submenu: [],
  },
  {
    name: 'Payments',
    icon: <BsCashCoin className="text-xl" />,
    route: '/admin/payments',
    submenu: [],
  },
]