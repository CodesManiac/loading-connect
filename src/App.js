import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, HowItWork, About } from "./pages";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import OTP from "./pages/auth/otp";
import Reset  from "./pages/auth/forgotPasswordReset";
import ForgetPassword from "./pages/auth/forgotPassword";
import Pricing from "./pages/pricing/Pricing";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import TermOfService from "./pages/termOfService/TermOfService";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/howitwork" element={<HowItWork />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermOfService />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
