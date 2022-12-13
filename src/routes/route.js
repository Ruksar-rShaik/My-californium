const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule'); 
const req = require('express/lib/request');
const { route } = require('express/lib/application');
const { before } = require('underscore');


router.get("/profile-details", function(req, res){
    // Write the LOGIC here
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)
    console.log(`The mentor of the day is ${mentorModule.mentor1}`)

    res.send('any dummy text from route handler 1')
});


router.get('/test-me', function(req, res){
    console.log("I am here")
    res.send("any dummy text from route handler 2")
})

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

// PATH Param example
router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use many ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

// PATH Param example
router.get("/profile/:name", function(req, res){
    console.log('Printing the request to find out where name is stored',req.params)
    console.log('user name is',req.params.name)
    //console.log(`User requesting for profile is ${name}`)
    res.send("dummy details")
})

// Query Param example
router.get("/shoes", function(req, res){
    console.log("The filter options for shoes are -",req.query)
    //req.query.size
    //req.query.brand
    res.send("dummy shoes response")
})

//prblm1
router.get("/movies", function(req,res){
    arrMov=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    res.send(arrMov)
})

//prblm2

// router.get("/movies/:indexNumber", function(req,res){
//     let i=req.params.indexNumber
//     arrMov=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
//     res.send(arrMov[i])
// })

//prblm3

router.get("/movies/:indexNumber", function(req,res){
    let i=req.params.indexNumber
    arrMov=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
        if(i<arrMov.length){
            res.send(arrMov[i])
        }else res.send("Invalid index number") 
})

//prblm4

router.get("/GET/films", function(req,res){
    let arrMov=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }] 
       res.json(arrMov)
})

//prblm5

router.get("/GET/films/:filmid", function(req,res){
    let movieId=req.params.filmid
    let arrMov=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }] 
       if(movieId<arrMov.length){
    let filmObj=arrMov.find(i=>i.id==movieId)
        res.json(filmObj)
       } else res.json("No movie exist with this id")
})




     router.get("/sol1", function (req, res) {
	   //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
	   let arr= [1,2,4,5,6,7]
       let n=arr.length+1
      let sum=(n*(n+1)/2)
      const total=arr.reduce((a,b)=>a+b)
      const missingNumber=sum-total
	   res.send(  { data: missingNumber  }  );
 });


 router.get("/sol2", function (req, res) {
    let arr= [33, 35, 36, 37, 38]
    let total=arr.reduce((a,b)=>a+b)
    let n =arr.length+1
    let first=arr[0]
    let last=arr.pop()
    sum=(n*(first+last)/2)
    missingNumber=sum-total
    res.send({data: missingNumber})
 })




    



module.exports = router;