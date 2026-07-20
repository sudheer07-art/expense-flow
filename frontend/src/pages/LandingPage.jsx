import Navbar from "../landing/Navbar";
import HeroSection from "../landing/HeroSection";
import Features from "../landing/Features";
import AppPreview from "../landing/AppPreview";
import { useNavigate } from "react-router-dom";
import LoginModal from "../components/auth/LoginModal";
import SignupModal from "../components/auth/SignupModal";
function LandingPage() {
    const navigate = useNavigate();

const [showLogin, setShowLogin] = useState(false);
const [showSignup, setShowSignup] = useState(false);
  return (
    <div className="min-h-screen bg-[#0F1117] text-white">
      <Navbar />
      <HeroSection />
      <Features />
      <AppPreview />
    </div>
  );
}

export default LandingPage;

