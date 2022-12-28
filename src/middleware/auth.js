const jwt = require("jsonwebtoken");

const authenticate = async function(req,res,next) {
    //check the token in request header
    //validate this token
    let headerToken= req.headers["x-auth-token"];
    if(!headerToken) return res.send({msg:"Header Token Is Missing"})
    let tokenValidation= await jwt.verify(headerToken,"Californium Nov-14")
    if(!tokenValidation) return res.send({status:false, msg:"Invalid Token"})
    req.tokenValidation=tokenValidation
    next()
}


const authorise = function(req,res,next) {
    // comapre the logged in user's id and the id in request
    userid=req.params.userid
    validToken=req.tokenValidation
    if(validToken.userId!=userid) return res.send ({status:false,msg:"invalid user"})
    next()
}

module.exports={authenticate,authorise}