const mongoose = require("mongoose")


function connectToData(){
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB Database")
    })
}
module.exports = connectToData