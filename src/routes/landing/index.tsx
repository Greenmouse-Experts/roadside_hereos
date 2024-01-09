import { landingRoutes } from "./routes";
import { Route, Routes } from "react-router-dom";
import LandingLayout from "../../lib/components/layout/landing";

const LandingRouting = () => {
  return (
    <>
      {/* <LandingLayout> */}
          {landingRoutes.map((item) => {
            return <Route path={item.path} element={item.component} key={item.id} />;
          })}
      {/* </LandingLayout> */}
    </>
  );
};

export default LandingRouting;
