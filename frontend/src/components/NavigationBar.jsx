import { useLocation, useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button
} from "@heroui/react";
import TprintsLogo from "./TprintsLogo.jsx";

export default function NavigationBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    if (location.pathname !== "/") {
      navigate("/#contact");
    } else {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <Navbar
      shouldHideOnScroll
      className="mx-auto mt-4 max-w-6xl rounded-full shadow-md bg-white/90 backdrop-blur-lg px-6 py-2"
    >
      <NavbarBrand
        onClick={() => navigate("/")}
        className="items-center gap-2 cursor-pointer"
      >
        <TprintsLogo />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <button onClick={() => navigate("/")} className="font-medium text-inherit bg-transparent border-none outline-none cursor-pointer">
            Home
          </button>
        </NavbarItem>
        <NavbarItem>
          <button onClick={() => navigate("/services")} className="font-medium text-inherit bg-transparent border-none outline-none cursor-pointer">
            Services
          </button>
        </NavbarItem>
        <NavbarItem>
          <button onClick={() => navigate("/how-it-works")} className="font-medium text-inherit bg-transparent border-none outline-none cursor-pointer">
            How It Works
          </button>
        </NavbarItem>
        <NavbarItem>
          <button onClick={() => navigate("/pricing")} className="font-medium text-inherit bg-transparent border-none outline-none cursor-pointer">
            Pricing
          </button>
        </NavbarItem>
        <NavbarItem>
          <button
            onClick={handleContactClick}
            className="font-medium text-inherit bg-transparent border-none outline-none cursor-pointer"
          >
            Contact Us
          </button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            onClick={() => navigate("/login")}
            color="primary"
            variant="flat"
            radius="lg"
            className="font-medium text-inherit"
          >
            Login
          </Button>
        </NavbarItem>

        <NavbarItem className="hidden lg:flex">
          <Button
            onClick={() => navigate("/signup")}
            color="default"
            variant="flat"
            className="font-medium text-inherit"
          >
            Sign Up
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button
            onClick={() => navigate("/upload")}
            color="primary"
            variant="shadow"
            className="font-medium text-white"
          >
            Upload Model
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
