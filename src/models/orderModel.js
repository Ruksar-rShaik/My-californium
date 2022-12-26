const mongoose = require('mongoose');
 const ObjectId = mongoose.Schema.Types.ObjectId



const orderSchema = new mongoose.Schema( {

        userId: {
            type:ObjectId,
            ref:"UserData"
        },
        productId:{
            type:ObjectId,
            ref:"Product"
        },
        amount: Number,
        isFreeAppUser: {
            type:Boolean,
            defaul:false
        }, 
        date: String
    })
    module.exports = mongoose.model('Order', orderSchema)