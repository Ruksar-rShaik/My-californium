const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")
const ObjectId=require('mongoose').Types.ObjectId

const createBook= async function (req, res) {
    if(!(req.body.author_id && req.body.publisher_id)){
        res.send("author_id/publisher-id is required")
    }else if(!(ObjectId.isValid(req.body.author_id) && ObjectId.isValid(req.body.publisher_id))){
        res.send("author/publisher is not present");
    }else{
        let bookCreated = await bookModel.create(req.body)
        res.send({data: bookCreated})
    }
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({data: books})
}

const updatekey= async function(req,res){
    let publishedBook= await publisherModel.find({name:{$in:['penguin','HarperCollins']}})
    let publisherID= publishedBook.map(publisher=>publisher.publisher_id)
    let bookname= await bookModel.updateMany(
        {publisher:publisherID},
        {$set:{isHardcovered:true}},
        {new:true}
        )
        res.send({data:bookname})
}

const updatePrice= async function(req,res){
    let book= await authorModel.find({rating:{$gt:3.5}})
    let arr=[]
    for(let i=0; i<book.length; i++){
        let price= await bookModel.updateMany({author_id:book[i]._id}, {$inc:{price:10}}, {new:true})
        arr.push(price)
    }
    res.send(arr)
}


module.exports={getBooksData,createBook,updatekey,updatePrice}

