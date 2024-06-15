import express from "express";
import mongoose from "mongoose";
import userRouter from './routes/user.route.js'

import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();


app.use('/api/user', userRouter);


const port = 3000;
app.listen(port, () => {
  console.log(`server is running on part ${port}`);
});
