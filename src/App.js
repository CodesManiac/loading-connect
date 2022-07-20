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
import Dashboard from "./pages/app/Dashboard";
import Settings from "./pages/app/Settings/profile";
import Messages from "./pages/app/Messages";
import DriverSignup from "./pages/auth/DriverSignup";
import DriverLogin from "./pages/auth/DriverLogin";
import EditProfile from "./pages/app/Settings/profile";
import SavedTruck from "./pages/app/Settings/savedtruck/SavedTruck";
import RecentTruck from "./pages/app/Settings/recenttruck/RecentTruck";
import Tools from "./pages/app/Settings/tools/Tools";
import RateCal from "./pages/app/Settings/tools/rate/RateCal";
import MilageCal from "./pages/app/Settings/tools/milage/MilageCal";
import Notification from "./pages/app/Settings/notification/Notification";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HowItWork />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/driversignup" element={<DriverSignup />} />
        <Route path="/driverlogin" element={<DriverLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/howitwork" element={<Home  />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermOfService />} />
        <Route path="/app/dashboard" element={<Dashboard/>} />
        <Route path="/app/settings" element={<Settings/>} />
        <Route path="/app/settings/profile" element={<EditProfile />} />
        <Route path="/app/settings/saved-truck" element={<SavedTruck />} />
        <Route path="/app/settings/recent-truck" element={<RecentTruck />} />
        <Route path="/app/settings/tools" element={<Tools />} />
        <Route path="/app/settings/tools/rate" element={<RateCal />} />
        <Route path="/app/settings/tools/milage" element={<MilageCal />} />
        <Route path="/app/settings/notification" element={<Notification />} />
        <Route path="/app/messages" element={<Messages/>} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
