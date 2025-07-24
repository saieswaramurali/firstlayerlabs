import { useEffect, useState, useRef, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_BASE_URL } from "../config";
import FirstLayerLabLogo from "./FirstLayerLabsLogo.jsx";

const VerifyEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("Verifying your email...");

  // Ref to track if verification has already been initiated/completed
  const hasVerifiedRef = useRef(false);
  // Ref for timeouts for cleanup
  const timeoutRef = useRef(null);

  // Memoize the verifyEmail function to ensure it's stable and doesn't trigger
  // unnecessary re-runs if it's passed down or used in dependencies.
  const verifyEmail = useCallback(async () => {
    // Prevent multiple executions if already initiated
    if (hasVerifiedRef.current) {
      console.log("Verification already initiated or completed. Aborting new attempt.");
      return;
    }
    hasVerifiedRef.current = true; // Mark as initiated

    const startTime = Date.now();
    const MIN_DISPLAY_TIME = 2000; // Minimum time in ms to display "Verifying..." or result

    let finalStatus = "error"; // Default to error
    let finalMessage = "Something went wrong. Please try again.";

    if (!token) {
      finalStatus = "error";
      finalMessage = "Invalid verification link. Redirecting to home...";
      // Set status/message immediately for invalid token, then redirect
      setMessage(finalMessage);
      setStatus(finalStatus);
      timeoutRef.current = setTimeout(() => navigate("/"), 3000);
      return;
    }

    setMessage("Verifying your email...");
    setStatus("loading");

    try {
      const res = await fetch(`${API_BASE_URL}/auth/verify-email/${token.trim()}`);
      const data = await res.json();

      console.log("Full Backend Response (res):", res);
      console.log("Parsed JSON Data (data):", data);
      console.log("res.ok (HTTP status 200-299):", res.ok);
      console.log("data.success:", data.success);

      if (res.ok && data.success === true) {
        finalStatus = "success";
        finalMessage = "✅ Verified! Redirecting you...";
      } else {
        finalStatus = "error";
        // Handle specific error cases for better UX
        if (res.status === 400 && data.message) {
          // Token expired or invalid - don't show backend technical details
          if (data.message.toLowerCase().includes('expired')) {
            finalMessage = "⏰ Verification link has expired. Please request a new one.";
          } else if (data.message.toLowerCase().includes('invalid') || data.message.toLowerCase().includes('not found')) {
            finalMessage = "❌ Invalid verification link. Please check your email for the correct link.";
          } else {
            finalMessage = "❌ Verification failed. Please try again or request a new verification email.";
          }
        } else {
          // Generic error message for other cases
          finalMessage = "❌ Verification failed. Please try again or request a new verification email.";
        }
      }
    } catch (error) {
      console.error("Network or parsing error during email verification:", error);
      finalStatus = "error";
      finalMessage = "🌐 Connection error. Please check your internet and try again.";
    }

    // Calculate remaining time to meet MIN_DISPLAY_TIME
    const elapsedTime = Date.now() - startTime;
    const timeToWait = Math.max(0, MIN_DISPLAY_TIME - elapsedTime);

    // Set the final status and message after the minimum display time
    timeoutRef.current = setTimeout(() => {
      setMessage(finalMessage);
      setStatus(finalStatus);

      // Only redirect automatically on success or after a longer delay for errors
      if (finalStatus === "success") {
        // Redirect faster on success
        timeoutRef.current = setTimeout(() => {
          navigate("/");
        }, 2000); // 2 seconds for success
      } else {
        // For errors, give user time to read the message
        timeoutRef.current = setTimeout(() => {
          navigate("/");
        }, 5000); // 5 seconds for errors
      }
    }, timeToWait);

  }, [token, navigate]); // Dependencies for useCallback

  useEffect(() => {
    // Ensure this effect runs only once or when token/navigate changes significantly
    verifyEmail();

    // Cleanup function: clear any pending timeouts on component unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      // Reset hasVerifiedRef if the component unmounts.
      // Important if this component could be remounted with the same token
      // e.g., if it's part of a dynamic route where parent rerenders.
      // If it's a dedicated page only for verification, might not be strictly needed.
      hasVerifiedRef.current = false;
    };
  }, [verifyEmail]); // Dependency is the memoized verifyEmail function

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div
        className={`p-6 max-w-md w-full rounded shadow-md border text-center text-lg font-medium mb-6 ${
          status === "loading"
            ? "text-gray-600"
            : status === "success"
            ? "text-green-600"
            : "text-red-500"
        }`}
      >
        {status === "loading" ? (
          <span className="animate-pulse">🔄 Verifying your email...</span>
        ) : (
          message
        )}
      </div>

      <div className="text-center text-sm text-gray-600 max-w-md">
        <div className="flex justify-center mb-2">
          <FirstLayerLabLogo className="w-12 h-12" />
        </div>
        <p>
          This service is provided by <strong>FirstLayerLabs</strong> — a secure,
          privacy-first platform for modern web experiences.
        </p>
        <p className="mt-1">
          <Link to="/" className="text-blue-600 hover:underline">
            Learn more about us
          </Link>
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;