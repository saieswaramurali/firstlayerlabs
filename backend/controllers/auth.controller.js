import User from '../models/user.model.js' ; 
import bcrypt from "bcryptjs" ; 
import jwt from "jsonwebtoken" ; 
import { JWT_EXPIRES_IN, JWT_SECRET, GOOGLE_CLIENT_ID, EMAIL_PASSWORD, EMAIL_USER } from '../config/env.js';
import { OAuth2Client } from 'google-auth-library';
import nodemailer from "nodemailer"; 
import crypto from "crypto" ; 

// EMAIL-AUTHENTICATION
// this Login controller for logins with EMAIL.
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email)
      return res.status(400).json({ success: false, message: "Please provide the Email." });
    if (!password)
      return res.status(400).json({ success: false, message: "Please provide the password." });

    const user = await User.findOne({ email }).select("+password");

    if (!user)
      return res.status(404).json({ success: false, message: "No user is found on this email, kindly Sign-up." });

    if (user.provider !== 'email')
      return res.status(409).json({ success: false, message: "You have already used this email to login via Google" });

    // ✅ Check if email is verified
    if (!user.emailVerified)
      return res.status(403).json({
        success: false,
        message: "Please verify your email before logging in. Check your inbox for the verification link."
      });

    const passwordCheck = await bcrypt.compare(password, user.password);

    if (!passwordCheck)
      return res.status(400).json({ success: false, message: "Invalid Credentials." });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      User: user,
      Token: token,
    });

  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// this Signup controller is for signup via EMAIL 
export const SignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) return res.status(400).json({ success: false, message: "Please provide the Name." });
    if (!email) return res.status(400).json({ success: false, message: "Please provide the Email." });
    if (!password) return res.status(400).json({ success: false, message: "Please provide the password." });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(409).json({
        success: false,
        message: `User already exists, kindly login using ${existingUser.provider}`
      });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Generate a secure token for email verification
    const emailVerificationToken = crypto.randomBytes(32).toString('hex');
    const emailVerificationExpires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      emailVerificationToken,
      emailVerificationExpires,
    });

    // Send verification email
    const verificationLink = `http://localhost:5173/verify-email/${emailVerificationToken}`; // Change for prod

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Support" <${EMAIL_USER}>`,
      to: user.email,
      subject: 'Verify your email',
      html: `
        <p>Hi ${user.name},</p>
        <p>Thanks for signing up! Please verify your email by clicking the link below:</p>
        <a href="${verificationLink}" target="_blank">${verificationLink}</a>
        <p>This link is valid for 24 hours.</p>
      `,
    });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    return res.status(200).json({
      success: true,
      message: "Signup successful. Please check your email to verify your account.",
      user,
      token,
    });

  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

export const SignOut = (req, res) => {
    res.json({message: 'SignOut'})
}

// GOOGLE-AUTHENTICATION
const client = new OAuth2Client(GOOGLE_CLIENT_ID);
export const GoogleAuth = async (req, res) => {
    try {
        const { credential } = req.body;
        if (!credential) return res.status(400).json({ success: false, message: "Missing credential" });

        // Verify token with Google
        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: GOOGLE_CLIENT_ID
        });

        const payload = ticket.getPayload();
        const { sub, email, name, picture } = payload;
        console.log("Google Login Payload:", payload);
        // Try to find user by email
        let user = await User.findOne({ email });

        if (!user) {
            // Create a new user with Google as provider
            user = await User.create({
                name,
                email,
                provider: 'google',
                avatar: picture // optional
            });
        }

        // If user exists but not from Google
        if (user.provider !== 'google') {
            return res.status(409).json({ success: false, message: `Please login using ${user.provider}` });
        }

        // Generate your own JWT
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        return res.status(200).json({
            success: true,
            message: "User logged in via Google",
            user,
            token
        });

    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

// RESET-PASSWORD-> for email logins
export const ResetPassword = async (req, res) => {
  try {
    const { token } = req.params; // Reset token from the URL
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ success: false, message: 'Password is required.' });
    }

    // Find user with matching token and valid expiry
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid or expired token.' });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Clear the reset token and expiry
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;

    await user.save();

    return res.status(200).json({ success: true, message: 'Password reset successful.' });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// VERIFY-EMAIL-ACCOUNT-> for email logins
export const VerifyEmail = async (req, res) => {
  try {
    const { token } = req.params;

    const user = await User.findOne({
      emailVerificationToken: token,
      emailVerificationExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification token",
      });
    }

    user.emailVerified = true;
    user.emailVerificationToken = null;
    user.emailVerificationExpires = null;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Email verified successfully. You may now log in.",
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};