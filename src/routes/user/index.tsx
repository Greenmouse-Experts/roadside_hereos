import { Route, Routes } from "react-router-dom";
import UserDashboardLayout from "../../lib/components/layout/user";
import { userRoutes } from "./routes";

const UsersDashboardWraper = () => {
  return (
    <>
      <UserDashboardLayout>
        <Routes>
          {userRoutes.map((item) => {
            return (
              <Route path={item.path} element={item.component} key={item.id} />
            );
          })}
        </Routes>
      </UserDashboardLayout>
    </>
  );
};

export default UsersDashboardWraper;
