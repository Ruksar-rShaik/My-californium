const mongoose = require('mongoose');

const customerSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:String,
        unique:true
    },
    DOB:{
        type:Date
    },
    emailID:{
        type:String,
        required:true
    },
    adress:String,
    customerID:String,
    status:{
        type:String,
        enum:["ACTIVE","INACTIVE"]
    }


})

module.exports = mongoose.model('Customer', customerSchema);
