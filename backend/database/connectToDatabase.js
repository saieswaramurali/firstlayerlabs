import mongoose from "mongoose";
import { NODE_ENV, DB_URI } from "../config/env.js";

if(!DB_URI) {
    throw error("please define the DB_URI in config file") ; 
}

const connectToDatabase = async() => {
    try {
        await mongoose.connect(DB_URI) ; 
        console.log(`connected to database in ${NODE_ENV} mode`) ; 
    } catch(error) {
        console.error(err) ; 
        process.exit(1) ; 
    }
}

export default connectToDatabase ; 