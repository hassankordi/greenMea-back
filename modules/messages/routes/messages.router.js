const messageRouter = require('express').Router()
const validationRequest = require('../../../common/middleware/validationRequest')
const { addMessageSchema } = require('../validations/messageValidation')
const {addMessage , getMessages} = require('../controllers/messages.controllers')

messageRouter.post('/sendMessage' , validationRequest(addMessageSchema) , addMessage)
messageRouter.get('/getMessages' , getMessages)

module.exports = messageRouter