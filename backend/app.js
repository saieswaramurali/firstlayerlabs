import express from "express" ; 
import {PORT, API_BASE_URL} from './config/env.js' ; 
import authRouter from "./routes/auth.routes.js";
import connectToDatabase from "./database/connectToDatabase.js";

const app = express() ; 

app.use(express.json()) ; 

app.get("/", (req, res) => {
    res.send("Welcome to the BACK-END") ; 
}) ; 

app.use(`${API_BASE_URL}/auth`, authRouter) ; 

app.listen(PORT, async () => {
    console.log(`server is running on http://localhost:${PORT}`) ; 
    await connectToDatabase() ; 
}) ; 

export default app ; 