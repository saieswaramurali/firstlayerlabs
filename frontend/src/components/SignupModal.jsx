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
import { useState } from "react";

export default function SignupModal({ isOpen, onClose, onLoginClick }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5500/api/v1/auth/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (data.success) {
        alert("Sign up successful!");
        onClose();
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    alert("🧠 Google signup integration goes here!");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} backdrop="blur">
      <ModalContent>
        <ModalHeader className="text-xl font-bold text-gray-800">
          Create Your Account 🚀
        </ModalHeader>

        <ModalBody className="flex flex-col gap-4 text-gray-700">

          <form onSubmit={handleSignup} className="flex flex-col gap-4">
            <Input
              label="User Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="text-base"
              classNames={{ inputWrapper: "bg-white", label: "text-sm font-medium text-gray-700" }}
            />

            <Input
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="text-base"
              classNames={{ inputWrapper: "bg-white", label: "text-sm font-medium text-gray-700" }}
            />

            <Input
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              className="text-base"
              classNames={{ inputWrapper: "bg-white", label: "text-sm font-medium text-gray-700" }}
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

          <Button
            onPress={handleGoogleSignup}
            color="default"
            variant="bordered"
            fullWidth
            className="flex items-center justify-center gap-3 py-2 font-semibold text-gray-800"
          >
            <img
              src="/google-logo.png"
              alt="Google"
              className="w-5 h-5 object-contain"
              style={{ aspectRatio: "1 / 1" }}
            />
            Sign Up with Google
          </Button>
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
