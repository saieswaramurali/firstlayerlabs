import User from '../models/user.model.js' ; 
import bcrypt from "bcryptjs" ; 

// this Login controller for logins with email.
export const Login = async (req, res) => {

    try {
        const {email, password} = req.body ; 

        // if lack of arguments ; 
        if(!email) return res.status(400).json({success: false, message: "Please provide the Email."}) ; 
        if(!password) return res.status(400).json({success: false, message: "Please provide the password."}) ; 
        
        const user = await User.findOne({email}).select("+password") ; 
        
        if(!user) return res.status(404).json({success: false, message: "No user is found on this email, kindly Sign-up."}) ; 
        
        //if the provider is google instead of email ; 
        if(user.provider != 'email') return res.status(409).json({success: false, message: "You have used this email to login via Google"}) ; 

        const passwordCheck = await bcrypt.compare(password, user.password) ; 

        if(!passwordCheck) return res.status(400).json({success: false, message: "Invalid Credentials."}) ; 

        return res.status(200).json({
            success: true, 
            message: "User logged in successfully", 
            user
        }) ; 
        

    } catch(error) {
        res.status(500).json({success: false, error: error.message}) ; 
    }

}

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

        return res.status(200).json({
            success: true, 
            message: "User created successfully.",
            user
        }) ; 

    } catch (error) {
        return res.status(500).json({success: false, error : error.message}) ; 
    }
}

export const SignOut = (req, res) => {
    res.json({message: 'SignOut'})
}