import express from "express";
import dotenv from "dotenv"
import { connecDB } from "./lib/db.js";

import authRoutes from './routes/auth.route.js'

dotenv.config();

const app = express();

const PORT = process.env.PORT

app.use(express.json()) //extract json data out of body
app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log("Server is running on PORT "+ PORT);
    connecDB();
})