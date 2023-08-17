import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
//////////////////////////////////////////////importing from my file
import userRouter from "./routes/userRoute.js";

const app = express();
app.use(express.json());
app.use(cookieParser())

dotenv.config();
const port = 3000;

app.use("/user", userRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(port, () => {
      console.log(`connected to db`);
      console.log("listning to port " + port);
    })
  )
  .catch((error) => console.log(`error occured at conneting mongo${error}`));
