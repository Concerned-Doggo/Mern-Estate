import express from "express";
import mongoose from "mongoose";

import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

import cookieParser from "cookie-parser";

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
app.use(express.json());

app.use(cookieParser());

const port = 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});


app.use('/api/user', userRouter);

app.use('/api/auth', authRouter);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

