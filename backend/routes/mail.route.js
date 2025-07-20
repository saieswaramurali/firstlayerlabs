import {Router} from "express" ; 
import { ForgotPassword } from "../controllers/mail.controller.js";
import { RateLimiter } from "../middleware/rateLimiter.middleware.js";

const emailRouter = Router() ; 

emailRouter.post('/forgot-password', RateLimiter, ForgotPassword) ; 

export default emailRouter ; 