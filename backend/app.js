import express from "express" ; 
import {PORT, API_BASE_URL} from './config/env.js' ; 
import cors from "cors" ; 
import authRouter from "./routes/auth.routes.js";
import emailRouter from "./routes/mail.route.js";
import connectToDatabase from "./database/connectToDatabase.js";

const app = express() ; 

app.use(cors({
  origin: "http://localhost:5173", // frontend origin
  credentials: true
}));

app.use(express.json()) ; 

app.get("/", (req, res) => {
    res.send("Welcome to the BACK-END") ; 
}) ; 

app.use(`${API_BASE_URL}/auth`, authRouter) ; 
app.use(`${API_BASE_URL}/mail`, emailRouter) ; 

app.listen(PORT, async () => {
    console.log(`server is running on http://localhost:${PORT}`) ; 
    await connectToDatabase() ; 
}) ; 

export default app ; 