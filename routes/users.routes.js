const { Router } = require("express");
const { getAllUsersTranfer, userNewAcount, userLogin } = require("../controllers/users.controllers");

const router = Router()

//Peticiones http: 

router.get("/", getAllUsersTranfer)


router.post("/", userNewAcount)


router.post("/", userLogin)


module.exports = {
    usersRouter: router
}