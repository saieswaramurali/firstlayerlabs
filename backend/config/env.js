import {config} from "dotenv" ; 

config( {path: `.env.${process.env.NODE_ENV || "development"}.local`} ) ; 

export const {
    PORT, 
    NODE_ENV,
    API_BASE_URL,
    DB_URI,
} = process.env ; 