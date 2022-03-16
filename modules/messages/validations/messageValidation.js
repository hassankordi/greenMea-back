const Joi = require('joi');


module.exports ={
    addMessageSchema:{
        body:Joi.object().required().keys({
            name:Joi.string().required() ,
            email:Joi.string().required().email() ,
            phone:Joi.string().required() ,
            message:Joi.string().required() ,
           
        }) 
    },
   
}