// const express = require('express');
import express from "express"
import { signup, login, logout } from '../controller/UserAuthController.js'; 
const UserAuthRouter = express.Router();
UserAuthRouter.post("/signup", signup);
UserAuthRouter.post("/login", login);
UserAuthRouter.post("/logout", logout);

export default UserAuthRouter;

