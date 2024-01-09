import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/admin";
import HomePage from "./pages/landing/HomePage";
import AuthRouting from "./routes/auth";
import UsersDashboardWraper from "./routes/user";
import ProviderDashboardWraper from "./routes/provider";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/*" element={<AuthRouting />} />
        <Route path="/user/*" element={<UsersDashboardWraper />} />
        <Route path="/provider/*" element={<ProviderDashboardWraper />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
