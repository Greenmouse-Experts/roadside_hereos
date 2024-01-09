import { Route, Routes } from "react-router-dom";
import { providerRoutes } from "./routes";
import ProviderDashboardLayout from "../../lib/components/layout/provider";

const ProviderDashboardWraper = () => {
  return (
    <>
      <ProviderDashboardLayout>
        <Routes>
          {providerRoutes.map((item) => {
            return (
              <Route path={item.path} element={item.component} key={item.id} />
            );
          })}
        </Routes>
      </ProviderDashboardLayout>
    </>
  );
};

export default ProviderDashboardWraper;
