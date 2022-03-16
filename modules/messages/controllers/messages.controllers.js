const Messages = require('../model/messages.model')





const addMessage = async (req , res)=>{
    let {name , email , message , phone} = req.body;
    
    try {
        const myMessage = await Messages.insertMany({name , email , message , phone})
        res.json({msg:`success` , myMessage})
        
    } catch (error) {
        res.json({msg: 'error in add message',error})   
    }
}

const getMessages =async (req , res)=>{
    
   
    try {
        const messages = await Messages.find()
        res.json({msg:`success`,messages})
       
        
        
    } catch (error) {
        res.json({msg: 'error in get message',error})
        
    }
}


module.exports = {
    addMessage ,
    getMessages
}