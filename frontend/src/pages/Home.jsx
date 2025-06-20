import { useEffect } from "react";
import AboutUs from "../components/AboutUs.jsx";
import ConnectWithUs from "../components/ConnectWithUs.jsx";
import HeroSection from "../components/HeroSection.jsx";

function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Slight delay to allow full render
      }
    }
  }, []);

  return (
    <>
      <HeroSection />
      <AboutUs />
      <ConnectWithUs />
    </>
  );
}

export default Home;
