
const { type } = require("express/lib/response")
const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")



const createProduct= async function (req, res) {
    let data = req.body;
    let proCreate = await productModel.create(data);
    res.send({productInfo : proCreate});
}



const createUser= async function (req, res) {
    let data = req.body;
    let userCreate = await userModel.create(data);
    res.send({productInfo : userCreate});
}


const createOrder= async function (req, res) {
    let data= req.body
    if(!(data.userId)) return res.send("user id missing")
    if(!(data.productId)) return res.send("product id missing")
    let validUser = await userModel.findOne({_id : req.body.userId}) 
    if(!validUser) return res.send("User not present")
    let validProduct = await productModel.findOne({_id : req.body.productId})
    if(!validProduct) return res.send("Product not present")

    if(data.isFreeAppUser=="true"){
        let createOrder = await orderModel.create(data)
       return res.send(createOrder);
    }else{
        let proId = await productModel.findOne({_id : data.productId });
        let price = proId.price;
        data.amount = price;
        let userLimit = await userModel.findOne({_id : data.userId}).select({balance : 1 , _id : 0})
        if(userLimit.balance < price) {
           return res.send("Insufficient Balance!")
        }
        let createOrder = await orderModel.create(data);

        await userModel.findOneAndUpdate({_id : data.userId},{$inc :{balance : -price}})
        res.send(createOrder)
    }
        
    }


module.exports.createOrder= createOrder
module.exports.createUser= createUser
module.exports.createProduct= createProduct













// const basicCode= async function(req, res) {
    
//     let contentTypeHeader = req.headers.content-type
//     console.log("The headers received in this request are: ", req.headers)
//     console.log("The content type header is: ", contentTypeHeader)


//     req.headers.month = "December"
//     req.batch = "Californium"

//     console.log("The headers modified from this request are: ", req.headers)
//     // let tokenDataInHeaders= req.headers.token
//     // console.log(tokenDataInHeaders)
//     res.header("year", "2022")
//     console.log( "HEADER DATA ABOVE")
//     console.log( "hey man, congrats you have reached the Handler")

//     console.log("The request object looks like this: ", req)
//     res.send({ msg: "This is coming from controller (handler)"})
    
//     }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

// module.exports={createProduct,createUser}
