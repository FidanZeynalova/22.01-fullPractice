const express = require("express")
const newModel = require("../model/model")
const app = express()

app.use(express.json())


const newController = {
    getData: async (req, res) => {
        let datas = await newModel.find()
        res.send(datas)
    },
    getDataById: async (req, res) => {
        let { id } = req.params
        let data = await newModel.findById(id)
        res.send(data)
    },
    postData: async (req, res) => {
        let newData =  newModel(req.body)
        await newData.save()
        res.send({
            message: "Succes Post",
            data: req.body
        })
    },
    deleteData: async (req, res) => {
        let { id } = req.params
        await newModel.findByIdAndDelete(id)
        res.send("Succes Delete")
    }
}
module.exports = newController