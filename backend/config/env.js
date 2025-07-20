import {config} from "dotenv" ; 

config( {path: `.env.${process.env.NODE_ENV || "development"}.local`} ) ; 

export const {

    PORT, 
    NODE_ENV,
    API_BASE_URL,
    DB_URI,
    JWT_SECRET, 
    JWT_EXPIRES_IN,
    GOOGLE_CLIENT_ID,
    EMAIL_PASSWORD,
    EMAIL_USER,

} = process.env ; 