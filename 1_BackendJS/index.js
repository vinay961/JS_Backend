require('dotenv').config()
const express = require('express')
const app = express()

const port = 3000

app.get('/',(req,res)=>{
    res.send("Vinay Rai")
})
app.get('/app',(req,res)=>{
    res.send("I am fullStack Developer");
})
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})