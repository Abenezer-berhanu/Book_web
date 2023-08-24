import path from "path";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors'
//////////////////////////////////////////////importing from my file
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js"
import uploadRoutes from './routes/uploadsRoutes.js'
import connectDB from "./config/db.js";

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors())
app.use(express.static(path.join('/uploads')))

dotenv.config();
const port = 3000;
app.use("/products", productRouter)
app.use("/user", userRouter);
app.use('/product/upload', uploadRoutes)


const __dirname = path.resolve()

connectDB()

app.listen(port, () => {
  console.log("listning to port " + port);
})
