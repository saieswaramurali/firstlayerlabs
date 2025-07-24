import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
  Divider,
  Link
} from "@heroui/react";
import { useState, useEffect, useRef } from "react";
import { API_BASE_URL } from "../config.js";
import { useUser } from "../contexts/UserContext.jsx";
import ForgotPasswordModal from "./ForgotPasswordModal.jsx"; // ⬅️ import it

export default function LoginModal({ isOpen, onClose, onSignupClick }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false); // ⬅️ state to toggle

  const googleBtnRef = useRef(null);
  const { setUser, setToken } = useUser();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password })
      });

      const data = await res.json();
      if (data.success) {
        setUser(data.User);
        setToken(data.Token);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);

        setMessageType("success");
        setMessage("Login successful!");
        setTimeout(() => {
          setMessage("");
          onClose();
        }, 1200);
      } else {
        setMessageType("error");
        setMessage(data.message || "Login failed");
      }
    } catch (err) {
      setMessageType("error");
      setMessage("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleResponse = async (response) => {
    setMessage("");
    try {
      const res = await fetch(`${API_BASE_URL}/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ credential: response.credential })
      });

      const data = await res.json();
      if (data.success) {
        setUser(data.user);
        setToken(data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);

        setMessageType("success");
        setMessage("Google Login successful!");
        setTimeout(() => {
          setMessage("");
          onClose();
        }, 1200);
      } else {
        setMessageType("error");
        setMessage(data.message || "Google Login failed");
      }
    } catch (err) {
      setMessageType("error");
      setMessage("Something went wrong with Google login!");
    }
  };

  useEffect(() => {
    if (window.google && googleBtnRef.current) {
      window.google.accounts.id.initialize({
        client_id:
          "427702363634-elrhnbleslfhjvgsu9tls08ohqs1mo3h.apps.googleusercontent.com",
        callback: handleGoogleResponse
      });

      window.google.accounts.id.renderButton(googleBtnRef.current, {
        theme: "outline",
        size: "large",
        width: "100%"
      });
    }
  }, [isOpen]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} backdrop="blur">
        <ModalContent>
          <ModalHeader className="text-xl font-bold text-gray-800">
            Welcome Back 👋
          </ModalHeader>

          <ModalBody className="flex flex-col gap-4 text-gray-700">
            {message && (
              <div
                className={`rounded px-3 py-2 text-sm mb-2 ${
                  messageType === "error"
                    ? "bg-red-100 text-red-700 border border-red-300"
                    : "bg-green-100 text-green-700 border border-green-300"
                }`}
              >
                {message}
              </div>
            )}

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <Input
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="text-base"
                classNames={{
                  inputWrapper: "bg-white",
                  label: "text-sm font-medium text-gray-700"
                }}
              />
              <Input
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
                className="text-base"
                classNames={{
                  inputWrapper: "bg-white",
                  label: "text-sm font-medium text-gray-700"
                }}
              />

              <div className="text-left text-sm">
                <Link
                  className="text-blue-700 font-medium hover:underline cursor-pointer"
                  onClick={() => {
                    onClose(); // close login modal
                    setTimeout(() => setShowForgotPassword(true), 300); // open forgot modal
                  }}
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                color="primary"
                fullWidth
                isLoading={loading}
                className="font-semibold"
              >
                Login
              </Button>
            </form>

            <Divider className="my-2" />
            <div ref={googleBtnRef} className="w-full flex justify-center"></div>
          </ModalBody>

          <ModalFooter className="justify-center text-sm text-gray-600">
            Don’t have an account?
            <span
              onClick={() => {
                onClose();
                if (onSignupClick) onSignupClick();
              }}
              className="ml-1 text-blue-700 font-medium cursor-pointer hover:underline"
            >
              Create one
            </span>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <ForgotPasswordModal
          isOpen={showForgotPassword}
          onClose={() => setShowForgotPassword(false)}
        />
      )}
    </>
  );
}
