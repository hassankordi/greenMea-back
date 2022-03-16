const mongoose = require ('mongoose')

const messagesSchema = new mongoose.Schema({
    // userId: {type:mongoose.Schema.Types.ObjectId , ref:'user'} , 
    name: {type:String} , 
    email: {type:String} , 
    phone: {type:String} , 
    message: {type:String} , 
})

module.exports = messagesSchema