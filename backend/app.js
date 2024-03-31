import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

config({
    path:".env"
});


const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}))

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true})); // for extended object as input
app.use(express.static("public"));
app.use(cookieParser());



export default app;