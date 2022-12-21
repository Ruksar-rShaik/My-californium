const { count } = require("console")
const CustomerModel=require("../models/customerModel")
const CardModel=require("../models/cardModel")

const createCustomer= async function(req,res){
    let data =req.body
    let savedData= await CustomerModel.create(data)
    res.send({msg:savedData})
}

const createCard= async function(req,res){
    let data = req.body
    let savedData= await CardModel.create(data)
    res.send({msg:savedData})
}
module.exports={createCustomer,createCard}