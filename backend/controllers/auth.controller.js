import User from '../models/user.model.js' ; 
import bcrypt from "bcryptjs" ; 
import jwt from "jsonwebtoken" ; 
import { JWT_EXPIRES_IN, JWT_SECRET, GOOGLE_CLIENT_ID } from '../config/env.js';
// to install this
import { OAuth2Client } from 'google-auth-library';


// this Login controller for logins with EMAIL.
export const Login = async (req, res) => {

    try {
        const {email, password} = req.body ; 

        // if lack of arguments ; 
        if(!email) return res.status(400).json({success: false, message: "Please provide the Email."}) ; 
        if(!password) return res.status(400).json({success: false, message: "Please provide the password."}) ; 
        
        const user = await User.findOne({email}).select("+password") ; 
        
        if(!user) return res.status(404).json({success: false, message: "No user is found on this email, kindly Sign-up."}) ; 
        
        //if the provider is google instead of email ; 
        if(user.provider != 'email') return res.status(409).json({success: false, message: "You have already used this email to login via Google"}) ; 

        const passwordCheck = await bcrypt.compare(password, user.password) ; 

        if(!passwordCheck) return res.status(400).json({success: false, message: "Invalid Credentials."}) ; 

        const token = jwt.sign({id: user._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN}) ; 

        return res.status(200).json({
            success: true, 
            message: "User logged in successfully", 
            User: user, 
            Token: token,
        }) ; 
        

    } catch(error) {
        res.status(500).json({success: false, error: error.message}) ; 
    }

}

// this Signup controller is for signup via EMAIL 
export const SignUp = async (req, res) => {
    try {
        const {name, email, password} = req.body ; 
        // if lack of arguments ; 
        if(!name) return res.status(400).json({success: false, message: "Please provide the Name."}) ; 
        if(!email) return res.status(400).json({success: false, message: "Please provide the Email."}) ; 
        if(!password) return res.status(400).json({success: false, message: "Please provide the password."}) ; 

        const existingUser = await User.findOne({email}) ; 

        if(existingUser) return res.status(409).json({success: false, message: `User already exists, kindly login using ${existingUser.provider}`}) ; 

        const salt = await bcrypt.genSalt(10) ; 
        const hashedPassword = await bcrypt.hash(password, salt) ; 
        const user = await User.create({name, email, password: hashedPassword}) ; 
        const token = jwt.sign({id: user._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN}) ; 

        return res.status(200).json({
            success: true, 
            message: "User created successfully.",
            User: user,
            Token : token, 
            
        }) ; 

    } catch (error) {
        return res.status(500).json({success: false, error : error.message}) ; 
    }
}

export const SignOut = (req, res) => {
    res.json({message: 'SignOut'})
}

// GOOGLE LOGIN 
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