const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({

    FirstName:{

        type: String,
        required: true
    },
    
    LastName:{

        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    Message:{

        type: String,
        required: true

    },
    createdAt: {
        type: Date,
        default: Date.now  
    },

});
const Contact = new mongoose.model("ContactUsForm",contactSchema);

module.exports = Contact;