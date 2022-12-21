const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")

const createBook= async function(req,res){
    let data= req.body
   let savedData= await BookModel.create(data)
    res.send({msg: savedData})

}

const createAuthor= async function(req,res){
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

const bookbyCB= async function(req,res){
    let result1 =await AuthorModel.findOne({author_name:"Chetan Bhagat"})
    console.log(result1)
    let book =await find({authoBookModelr_id:result1.author_id})
    console.log(book)
    res.send({msg:book})
}

const bookUpdte= async function(req,res){
    let twostates= await BookModel.findOneAndUpdate(
        {name:"Two states"},
        {$set:{price:100}},
        {new:true},)

        let updtedData= await AuthorModel.find({author_id:twostates.author_id})
        res.send({msg:updtedData,twostates})
}

const fndBookWithAuthName= async function(req,res){
    let bookPrice= await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
    console.log(bookPrice)
   let result =bookPrice.map(a=>(a.author_id))
    let author = await AuthorModel.find({author_id:result})
    res.send({msg:author})

}















const getAuthor= async function(req,res){
    let savedData= await AuthorModel.find()
    res.send({msg: savedData})
}


module.exports={createBook,createAuthor,getAuthor,bookbyCB,bookUpdte,fndBookWithAuthName}


























// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
