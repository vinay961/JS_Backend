import express from "express";
const app = express()

app.get('/',(req,res)=>{
    res.send("<h1 style = text-align:center >Server is ready</h1>")
})

// Sets of jokes
const jokes = [
    {
        id:1,
        title:"1st joke",
    },
    {
        id:2,
        title:"2st joke",
    },
    {
        id:3,
        title:"3st joke",
    },
    {
        id:4,
        title:"4st joke",
    },
    {
        id:5,
        title:"5st joke",
    },
]

app.get('/api/jokes',(req,res)=>{
    res.send(jokes)
})

const port =  3000

app.listen(port,()=>{
    console.log(`Server is running on PORT: ${port}`);
})