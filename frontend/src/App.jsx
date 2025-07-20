import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar"
import Home from "../pages/Home"
import Footer from "../components/Footer";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import HowItWorks from "../pages/HowItWorks";
import Materials from "../pages/Materials";
import Pricing from "../pages/Pricing";
import Faq from "../pages/Faq";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
