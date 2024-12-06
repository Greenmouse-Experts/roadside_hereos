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
import RequestSuccess from "./pages/landing/RequestSuccess";
import DeleteAccount from "./pages/landing/DeleteAccount";
import ProvidersFaqPage from "./pages/landing/ProvidersFaqs";
import BlogPage from "./pages/landing/Blog";
import BlogDetail from "./pages/landing/BlogDetail";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/providers-faqs" element={<ProvidersFaqPage />} />
        <Route path="/request" element={<ServicesPage />} />
        <Route path="/request/:id" element={<RequestPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/join-us" element={<CareersPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookie" element={<CookiePage />} />
        <Route path="/privacy" element={<PolicyPage />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/success/:id" element={<RequestSuccess />} />
        <Route path="/auth/*" element={<AuthRouting />} />
        <Route path="/user/*" element={<UsersDashboardWraper />} />
        <Route path="/provider/*" element={<ProviderDashboardWraper />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
      <CookieModal />

    </>
  );
}

export default App;
