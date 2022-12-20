const mongoose = require('mongoose');

const authorSchema= new mongoose.Schema({
author_name:{
    type:String,
    required:true
},
author_id:{
    type:Number,
    required:true
},
age:Number,
adress: String,


})

module.exports = mongoose.model('Author',authorSchema);
