const mongoose = require("mongoose")


let newSchema = new mongoose.Schema({
    img: String,
    name: String,
    price: Number
})
let newModel = mongoose.model("shop", newSchema)

module.exports = newModel