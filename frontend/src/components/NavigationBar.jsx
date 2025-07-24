import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Avatar,
} from "@heroui/react";

import { User } from "lucide-react";
import FirstLayerLabsLogo from "./FirstLayerLabsLogo.jsx";
import LoginModal from "./LoginModal.jsx";
import SignupModal from "./SignUpModal.jsx";
import { useUser } from "../contexts/UserContext.jsx"; // ⬅️ import user context

export default function NavigationBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const { user, setUser, setToken } = useUser(); // ⬅️ get user and logout method

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

  const logoutUser = () => {
      setUser() ; 
      setToken() ; 
      navigate("/") ; 
  } ;

  return (
    <>
      <Navbar
        shouldHideOnScroll
        className="mx-auto mt-4 max-w-6xl rounded-full shadow-md bg-white/90 backdrop-blur-lg px-6 py-2"
      >
        <NavbarBrand
          onClick={() => navigate("/")}
          className="items-center gap-2 cursor-pointer"
        >
          <FirstLayerLabsLogo />
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
          {!user ? (
            <>
              <NavbarItem className="hidden lg:flex">
                <Button
                  onClick={() => setShowLogin(true)}
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
                  onClick={() => setShowSignup(true)}
                  color="default"
                  variant="flat"
                  className="font-medium text-inherit"
                >
                  Sign Up
                </Button>
              </NavbarItem>
            </>
          ) : (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors shadow-sm ring-2 ring-primary">
                  <User className="w-5 h-5 text-gray-600" />
                </button>

              </DropdownTrigger>
              <DropdownMenu aria-label="User menu" className="w-52">
                <DropdownItem key="profile" onClick={() => navigate("/profile")}>
                  Profile
                </DropdownItem>
                <DropdownItem key="orders" onClick={() => navigate("/my-orders")}>
                  My Orders
                </DropdownItem>
                <DropdownItem key="settings" onClick={() => navigate("/settings")}>
                  Settings
                </DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={logoutUser}>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}

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

      {/* 🔐 Auth Modals */}
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onSignupClick={() => {
          setShowLogin(false);
          setShowSignup(true);
        }}
      />

      <SignupModal
        isOpen={showSignup}
        onClose={() => setShowSignup(false)}
        onLoginClick={() => {
          setShowSignup(false);
          setShowLogin(true);
        }}
      />
    </>
  );
}
