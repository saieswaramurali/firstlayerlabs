import { Router } from "express";
import { GoogleAuth, Login, ResetPassword, SignOut, SignUp, VerifyEmail } from "../controllers/auth.controller.js";
import { RateLimiter } from "../middleware/rateLimiter.middleware.js";

const authRouter = Router() ; 

authRouter.post("/login", RateLimiter, Login) ; 

authRouter.post("/sign-up", RateLimiter, SignUp) ; 

authRouter.post("/sign-out", SignOut) ; 

authRouter.post("/google", GoogleAuth) ; 

authRouter.post("/reset-password/:token", RateLimiter, ResetPassword) ; 

authRouter.get("/verify-email/:token", VerifyEmail) ; 

export default authRouter ; 