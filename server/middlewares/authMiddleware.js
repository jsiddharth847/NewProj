
const jwt = require('jsonwebtoken');

const generateToken = async(user) =>{
try{
    
    const{_id, _email , _isAdmin } = user;

    const jwtSecret = process.env.JWT_SECRET;

    if(!jwtSecret){
        throw new Error("JWT Secret not defined in env");

    }

    const token = jwt.sign({

        userID : _id.toString(),
        email: _email,  
        isAdmin : _isAdmin
    }, jwtSecret,{expiresIn: '1h'});


    return token;
}catch(e){
    console.error("Error Generating token",e);
    throw new Error('Failed to generate authentication token');
}}; 