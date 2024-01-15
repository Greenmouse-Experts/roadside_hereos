import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/admin";
import HomePage from "./pages/landing/HomePage";
import AuthRouting from "./routes/auth";
import UsersDashboardWraper from "./routes/user";
import ProviderDashboardWraper from "./routes/provider";
import FaqPage from "./pages/landing/Faqs";
import ServicesPage from "./pages/landing/Services";
import ContactUsPage from "./pages/landing/Contact";
import CareersPage from "./pages/landing/Careers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/request" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/career" element={<CareersPage />} />
        <Route path="/auth/*" element={<AuthRouting />} />
        <Route path="/user/*" element={<UsersDashboardWraper />} />
        <Route path="/provider/*" element={<ProviderDashboardWraper />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
