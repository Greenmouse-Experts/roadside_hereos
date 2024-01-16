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
import TermsPage from "./pages/landing/Terms";
import CookiePage from "./pages/landing/Cookie";
import PolicyPage from "./pages/landing/Policy";
import RequestPage from "./pages/landing/Request";
import ScrollToTop from "./lib/scrollTop";
import CookieModal from "./lib/components/landing/homepage/Cookie";

function App() {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/request" element={<ServicesPage />} />
        <Route path="/request/:id" element={<RequestPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/career" element={<CareersPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookie" element={<CookiePage />} />
        <Route path="/privacy" element={<PolicyPage />} />
        <Route path="/auth/*" element={<AuthRouting />} />
        <Route path="/user/*" element={<UsersDashboardWraper />} />
        <Route path="/provider/*" element={<ProviderDashboardWraper />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
      <CookieModal/>
    </>
  );
}

export default App;
