import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, HowItWork, About } from "./pages";
import Signup from "./pages/home/Signup";
import Pricing from "./pages/pricing/Pricing";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import TermOfService from "./pages/termOfService/TermOfService";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/howitwork" element={<HowItWork />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermOfService />} />
      </Routes>
    </Router>
  );
}

export default App;
