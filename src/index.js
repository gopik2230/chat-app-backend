import express from "express";
import dotenv from "dotenv"
import { connecDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'

dotenv.config();

const app = express();

const PORT = process.env.PORT

app.use(express.json()) //extract json data out of body
app.use(cookieParser()) //allow us to parse the cookie

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)

app.listen(PORT, () => {
    console.log("Server is running on PORT "+ PORT);
    connecDB();
})