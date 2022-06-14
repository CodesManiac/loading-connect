import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, HowItWork, About} from "./pages";
import Signup from "./pages/home/Signup";
import Pricing from "./pages/pricing/Pricing";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/howitwork" element={<HowItWork />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;
