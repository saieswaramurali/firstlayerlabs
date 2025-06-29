import { Router } from "express";
import { Login, SignOut, SignUp } from "../controllers/auth.controller.js";

const authRouter = Router() ; 

authRouter.post("/login", Login) ; 

authRouter.post("/sign-up", SignUp) ; 

authRouter.post("/sign-out", SignOut) ; 

export default authRouter ; 