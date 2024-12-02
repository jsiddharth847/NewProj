const Contact = require("../model/contact-model");


const contactUs = async(req,res) =>{

    const {FirstName , LastName,email,Message} = req.body;

    if(!FirstName ||!LastName ||!email ||!Message){
        return res.status(400).json({error: "All fields are required"});
    }   
    const contact = await Contact.create({FirstName , LastName, email, Message});
    contact.save();

    if (!contact) {
        return res.status(400).json({
          error: "Failed to register user, please enter details properly.",
        });
      }
      console.log("Form Submitted Successfully!!!!, our team will contact you shortly.... ");
      return res.status(200).json({message:"Form Submitted Successfully!!!!, our team will contact you shortly...."});
    };
module.exports = {contactUs};