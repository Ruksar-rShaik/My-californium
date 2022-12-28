const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const CMmidware=require("../Middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createusers", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",CMmidware.MidwareToken, userController.getUserData)

router.put("/users/:userId",CMmidware.MidwareToken, userController.updateUser)

router.delete("/users/:userId", CMmidware.MidwareToken, userController.deleteUser)

module.exports = router;