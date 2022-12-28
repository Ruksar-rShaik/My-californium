const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const CMmidware=require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createusers", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userid",CMmidware.authenticate, CMmidware.authorise, userController.getUserData)

router.put("/users/:userid",CMmidware.authenticate, CMmidware.authorise, userController.updateUser)

router.delete("/users/:userid", CMmidware.authenticate, CMmidware.authorise, userController.deleteUser)



module.exports = router;