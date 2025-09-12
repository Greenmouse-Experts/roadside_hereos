import { useEffect, useState } from "react";
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

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#222",
        color: "#fff",
        padding: "1rem",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <span>
        We use cookies to improve your experience. By using our site, you agree
        to our{" "}
        <a
          href="/cookie"
          style={{ color: "#fff", textDecoration: "underline" }}
        >
          cookie policy
        </a>
        .
      </span>
      <button
        onClick={handleAccept}
        style={{
          marginLeft: "1rem",
          background: "#fff",
          color: "#222",
          border: "none",
          borderRadius: "4px",
          padding: "0.5rem 1rem",
          cursor: "pointer",
        }}
      >
        Accept
      </button>
    </div>
  );
}

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
        {/*<Route path="/request/:id" element={<RequestPage />} />*/}
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
      <CookieConsent />
    </>
  );
}

export default App;
