import express from "express"
import UserAuthRouter from "./routes/UserAuthRouter.js";
import dbConnect from "./lib/dbConnect.js"
// const express = require('express');
// const UserAuthRouter = require('./routes/UserAuthRouter');
// const dbConnect = require('./lib/dbConnect');
const app = express();
//base64--to send img,video
//iske bina koi data fetch nhi kar payga
app.use(express.json());
app.use("/user", UserAuthRouter);
app.listen(4000, () => {
    console.log("connected");
})
dbConnect();