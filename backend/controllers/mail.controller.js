import crypto from 'crypto';
import User from '../models/user.model.js';
import nodemailer from "nodemailer" ; 
import {EMAIL_PASSWORD, EMAIL_USER} from "../config/env.js" ; 

//FORGOT-PASSWORD
export const ForgotPassword = async (req, res) => {
  try {

    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ success: false, message: 'No user found with this Email' });

    if (user.provider === 'google')
      return res.status(400).json({ success: false, message: 'Login using Google for this account.' });

    // Generate a secure token
    const resetToken = crypto.randomBytes(32).toString('hex');

    // Save the token and expiry to the user model
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 30 * 60 * 1000; // 30 minutes
    await user.save();

    // Create reset URL
    const resetURL = `http://localhost:5173/reset-password/${resetToken}`; // You can change to production URL

    // Setup transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASSWORD,
        },
    });

    // Email content
    const mailOptions = {
        from: `"Support" <${EMAIL_USER}>`,
        to: user.email,
        subject: 'Password Reset Request',
        html: `
            <p>Hello ${user.name || 'User'},</p>
            <p>You requested a password reset. Click the link below to set a new password:</p>
            <a href="${resetURL}" target="_blank">${resetURL}</a>
            <p>This link expires in 30 minutes.</p>
        `,
    };

    // send the mail 
    await transporter.sendMail(mailOptions);

    // Temporary response (until we set up nodemailer)
    res.status(200).json({ success: true, message: 'Reset link generated', resetURL });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }

};
