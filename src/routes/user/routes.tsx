import UsersHome from "../../pages/user/home";
import UserNotification from "../../pages/user/notify";
import UserPayments from "../../pages/user/payment";
import UserRequests from "../../pages/user/requests";
import ServiceDetails from "../../pages/user/serviceDetails";
import UserServices from "../../pages/user/services";
import UserSettings from "../../pages/user/settings";
import UserRefunds from "../../pages/user/user-refunds";

export const userRoutes = [
  {
    id: "user1",
    path: "",
    component: <UsersHome />,
  },
  {
    id: "user2",
    path: "requests",
    component: <UserRequests />,
  },
  {
    id: "user8",
    path: "requests/:id",
    component: <ServiceDetails />,
  },
  {
    id: "refund-request",
    path: "refund-request",
    component: <UserRefunds />,
  },
  {
    id: "user3",
    path: "services",
    component: <UserServices />,
  },
  {
    id: "user4",
    path: "notify",
    component: <UserNotification />,
  },
  {
    id: "user8",
    path: "Payments",
    component: <UserPayments />,
  },
  {
    id: "user5",
    path: "settings",
    component: <UserSettings />,
  },
];
