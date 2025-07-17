import { Router } from "express";
import { GoogleAuth, Login, SignOut, SignUp } from "../controllers/auth.controller.js";

const authRouter = Router() ; 

authRouter.post("/login", Login) ; 

authRouter.post("/sign-up", SignUp) ; 

authRouter.post("/sign-out", SignOut) ; 

authRouter.post("/google-auth", GoogleAuth) ; 

export default authRouter ; 