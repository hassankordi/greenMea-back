const express = require('express');
const cors = require('cors');
const connection = require('./configration/config');
const messageRouter = require('./modules/messages/routes/messages.router');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000
connection()



app.use(express.json())
app.use(cors())
app.use(messageRouter)

app.get("/",(req , res)=>{
    res.send("hi ya broo")
})
app.get("/hi",(req , res)=>{
    res.send("hi ")
})

app.listen(port , ()=>{
    console.log(`server running at ${port}`);
})