import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
  Divider
} from "@heroui/react";
import { useState, useEffect, useRef } from "react";
import { API_BASE_URL } from "../config.js";
import { useUser } from "../contexts/UserContext.jsx";

export default function SignupModal({ isOpen, onClose, onLoginClick }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"
  const [showVerificationNotice, setShowVerificationNotice] = useState(false); // ✅ NEW
  const googleBtnRef = useRef(null);

  const { setUser, setToken } = useUser();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setShowVerificationNotice(false); // ✅ reset on attempt

    try {
      const res = await fetch(`${API_BASE_URL}/auth/sign-up`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      console.log("🟢 Signup response:", data);

      if (data.success) {
        setUser(data.User);
        setToken(data.Token);
        localStorage.setItem("user", JSON.stringify(data.User));
        localStorage.setItem("token", data.Token);

        setMessageType("success");
        setMessage("Signup successful! 🎉");

        // ✅ Show the verification notice
        setShowVerificationNotice(true);

        setTimeout(() => {
          setMessage("");
          onClose();
        }, 7000);
      } else {
        setMessageType("error");
        setMessage(data.message || "Signup failed");
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
    setShowVerificationNotice(false); // ✅ not relevant for Google flow
    try {
      const res = await fetch(`${API_BASE_URL}/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ credential: response.credential })
      });

      const data = await res.json();
      console.log("🔁 Google signup response:", data);

      if (data.success) {
        setUser(data.user);
        setToken(data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);

        setMessageType("success");
        setMessage("Google signup successful!");
        setTimeout(() => {
          setMessage("");
          onClose();
        }, 1200);
      } else {
        setMessageType("error");
        setMessage(data.message || "Google signup failed");
      }
    } catch (err) {
      setMessageType("error");
      setMessage("Something went wrong with Google signup!");
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
    <Modal isOpen={isOpen} onClose={onClose} backdrop="blur">
      <ModalContent>
        <ModalHeader className="text-xl font-bold text-gray-800">
          Create Your Account 🚀
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

          {/* ✅ Email verification notice */}
          {showVerificationNotice && (
            <div className="text-sm text-yellow-700 bg-yellow-50 border border-yellow-200 rounded p-3 flex items-start gap-2">
              <span className="text-lg">📧</span>
              Please check your email and verify your account to continue.
            </div>
          )}

          <form onSubmit={handleSignup} className="flex flex-col gap-4">
            <Input
              label="User Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="text-base"
              classNames={{
                inputWrapper: "bg-white",
                label: "text-sm font-medium text-gray-700"
              }}
            />

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

            <Button
              type="submit"
              color="primary"
              fullWidth
              isLoading={loading}
              className="font-semibold"
            >
              Sign Up
            </Button>
          </form>

          <Divider className="my-2" />

          <div ref={googleBtnRef} className="w-full flex justify-center"></div>
        </ModalBody>

        <ModalFooter className="justify-center text-sm text-gray-600">
          Already have an account?
          <span
            onClick={() => {
              onClose();
              if (onLoginClick) onLoginClick();
            }}
            className="ml-1 text-blue-700 font-medium cursor-pointer hover:underline"
          >
            Login
          </span>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
