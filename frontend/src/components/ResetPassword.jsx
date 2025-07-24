import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../config';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match.");
      setSuccess(false);
      return;
    }

    try {
      const res = await axios.post(
        `${API_BASE_URL}/auth/reset-password/${token}`,
        { password }
      );
      if (res.data.success) {
        setSuccess(true);
        setMessage("✅ Password reset successful! Redirecting to login...");
      }
    } catch (err) {
      setSuccess(false);
      setMessage(err.response?.data?.message || "❌ Something went wrong.");
    }
  };

  // Redirect after 3 seconds on success
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => navigate('/'), 2000);
      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white border rounded shadow-md">
        
        {/* Branding */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-extrabold text-blue-600">FirstLayerLabs</h1>
          <p className="text-sm text-gray-500">Reset your account password</p>
        </div>

        {/* Form */}
        <h2 className="text-lg font-semibold mb-4">Reset Password</h2>
        {message && (
          <p className={`mb-3 text-sm ${success ? "text-green-600" : "text-red-500"}`}>
            {message}
          </p>
        )}

        {!success && (
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="New password"
              className="w-full p-2 border rounded mb-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full p-2 border rounded mb-4"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
