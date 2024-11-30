
const bcrypt = require('bcrypt');
const User = require('../model/user-model');
const jwt = require("jsonwebtoken");
const { generateToken } = require("../middleware/authMiddleware"); 

const home = async (req, res) => {
    try{
        res.status(200).send("Siddharth");

    }catch(err){
        console.log(err);
    }
};

const register = async (req, res) => {
    try{
        console.log(req.body);

        const{username , email, phone , password} = req.body;

        const userExist = await User.findOne({email});
        if(userExist){

            return res.status(400).json({error: "User already exists"});
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({username,email,phone ,password: hashedPassword});
    

        if(!user){
            return res.status(400).json({error: "Failed to register user , enter details properly."});
        }
        console.log(user);

        const token = await user.generateToken(user);

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                phone: user.phone
            },token: token});

        }catch(err){
        console.log(err);
    }
}; 
module.exports = { home , register };