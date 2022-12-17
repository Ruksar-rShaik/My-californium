const BookModel=require('../models/bookModel')

const newBook=async function(req,res){
    let bookData=req.body
    let savedBookData= await BookModel.create(bookData)
    res.send({msg:savedBookData})
}

const showBooksData= async function(req,res){
    let allBooks= await BookModel.find()
    res.send({msg:allBooks})
}

module.exports.newBook=newBook
module.exports.showBooksData=showBooksData