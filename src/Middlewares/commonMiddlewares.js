const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");



let MidwareToken= async function(req,res,next){    
    let UserId=req.params.userId;
    let Id= await userModel.findById(UserId)
    if(!Id) return res.send({msg:"Invalid UserId"})

    let headerToken= req.headers["x-auth-token"]
    if(!headerToken) return res.send({msg:"Header Token Is Missing"})
    next()
}

module.exports={MidwareToken}

