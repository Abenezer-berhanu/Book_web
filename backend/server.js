import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors'
//////////////////////////////////////////////importing from my file
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js"
import connectDB from "./config/db.js";

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors())

dotenv.config();
const port = 3000;
app.use("/products", productRouter)
app.use("/user", userRouter);


app.get("/", (req, res) => {
    console.log(req.header())
})

connectDB()

app.listen(port, () => {
  console.log("listning to port " + port);
})
