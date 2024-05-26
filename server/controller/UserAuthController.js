// const User = require("../models/User");
import User from "../models/User.js";
// import bcrypt from "bcrypt"
// const bcrypt = require("bcrypt");
// const jwt = require('jsonwebtoken');
import jwt from "jsonwebtoken"
export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            res.status(400).send({ message: "user already exists in the database" });
        }
        const salt = await bcrypt.genSalt();
        const hashedpassword = await bcrypt.hash(password, salt);

        const user = await User.create({ email: email, password: hashedpassword, username: username });
        return res.status(201).send({ user });
    } catch (error) {
        return res.status(500).send({ message: "error signing up!" });
    }
}
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email: email });

        if (!existingUser) {
            return res.status(400).send({ message: "User not found" });
        }

        const passwordMatched = await bcrypt.compare(
            password,
            existingUser.password
        );

        if (!passwordMatched) {
            return res.status(400).send({ message: "wrong password" });
        }
        const jwttoken = jwt.sign({
            _id: existingUser._id,
            email: existingUser.email
        }, "@Altruist7");
        res.cookie("token",jwttoken,{
            path:'/',
            httpOnly:true,
            sameSite:"lax",
            maxAge: 86400 * 1000
        });
        return res.status(200).send({ existingUser });
    }
    catch (error) {
        console.error("Error log in:", error);
        return res.status(500).send({ message: "Error log in!", error: error });
    }
} 
export const logout = async (req, res) => {
    try {
      res.clearCookie("token");
      return res.status(200).send({ message: "logged out successfully!" });
    } catch (error) {
      return res.status(500).send({ message: "Error logging out!", error });
    }
  };