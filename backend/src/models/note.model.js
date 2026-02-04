const mongoose= require("mongoose")

const newSchema= new mongoose.Schema({
    title:String,
    description:String
})

const noteModel= mongoose.model("Note", newSchema)

module.exports= noteModel