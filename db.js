const mongoose = require("mongoose")
const mongoUri = process.env.MONGO_URI

function connect() {

    mongoose.connect(mongoUri)
    mongoose.connection.once("open",()=>{
        console.log("connection with mongo OK")
    })
    mongoose.connection.on("error", (err)=>{
        console.log("something wen wrong!", err)
    })
    return mongoose.connection
}
module.exports ={connect}
