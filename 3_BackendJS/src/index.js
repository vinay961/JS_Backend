// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import connectDB from "./db/dbConnection.js"
dotenv.config({
    path:'./env'
})

connectDB()




/*

import express from "express"
const app = express();

function connectDB(){
    // DB connection code
}
connectDB()

--> Above thing is also right but it can be improved also using iffe

(async()=>{
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error) => {
            console.log(error);
            throw error
        })

        app.listen(process.env.PORT , ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }catch(error){
        console.log(error);
        throw err
    }
})()

*/