import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors"



import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import { app,server } from "./lib/socket.js";

dotenv.config();


const PORT = process.env.PORT


app.use(express.json()) //extract json data out of body
app.use(cookieParser()) //allow us to parse the cookie
app.use(cors({
    origin: ["http://localhost:5173","https://chat-app-frontend-4h22.onrender.com"],
    credentials: true

}
))

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)


server.listen(PORT, () => {
    console.log("Server is running on PORT "+ PORT);
    connectDB();
})