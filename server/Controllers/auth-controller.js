
const User = require('../model/user-model');

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

        const user = await User.create({username,email,phone ,password});
        if(!user){
            return res.status(400).json({error: "Failed to register user , enter details properly."});
        }
        console.log(user);

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                phone: user.phone
            }});
        }catch(err){
        console.log(err);
    }
}; 
module.exports = { home , register };