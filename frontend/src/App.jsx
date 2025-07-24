import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ContactUs from "./components/ContactUs.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import Home from "./pages/Home.jsx";
import Services from './pages/Services.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import Pricing from './pages/Pricing.jsx';
import ResetPassword from './components/ResetPassword.jsx';
import VerifyEmail from './components/VerifyEmail.jsx';

// Create a wrapper to access location
const Layout = ({ children }) => {
  const location = useLocation();
  const [hideLayout, setHideLayout] = useState(false);

  useEffect(() => {
    // List of routes where nav/footer should be hidden
    const noLayoutRoutes = ['/reset-password', '/verify-email'];
    
    // Check if current route starts with a no-layout route
    const shouldHide = noLayoutRoutes.some(route =>
      location.pathname.startsWith(route)
    );

    setHideLayout(shouldHide);
  }, [location]);

  return (
    <>
      {!hideLayout && <NavigationBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />


        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
      </Routes>
      {!hideLayout && <ContactUs />}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
