const PublisherModel= require("../models/publisherModel")

const createPublisher= async function(req,res){
    let data= req.body
    let savedData= await PublisherModel.create(data)
    res.send({data:savedData})
}

 module.exports={createPublisher}