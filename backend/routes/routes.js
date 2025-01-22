const express = require("express")
const newController = require("../controller/controller")
const route = express.Router()


route.get("/",newController.getData)
route.get("/:id",newController.getDataById)
route.post("/",newController.postData)
route.delete("/:id",newController.deleteData)

module.exports = route