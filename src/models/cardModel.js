const mongoose = require('mongoose');

const cardSchema= new mongoose.Schema({
    cardNumber:{
        type:String,
        required:true
    },
    cardType:{
        type:String,
        required:true,
        enum:["REGULAR","SPECIAL"]
    },
    customerName:{
        type:String,
        required:true
    },

    status:{
        type:String,
        enum:["ACTIVE","INACTIVE"],
        default:"ACTIVE"
    },
    customerID:{
        type:mongoose.Schema.Types.ObjectId,
        refer:'Customer'
    }


})

module.exports = mongoose.model('Card', cardSchema);
