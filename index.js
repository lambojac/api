import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
const app=express()
dotenv.config()
const connect=async()=>{
    try{
        await mongoose.connect('mongodb+srv://kennie:869480Ak@cluster0.zkjbfkp.mongodb.net/pevents?retryWrites=true&w=majority')
        
    }catch(error){
        throw error;
    }
}

app.use("/api/auth",authRoute)
app.use("/api/auth",usersRoute)
app.use("/api/auth",hotelsRoute)
app.use("/api/auth",roomsRoute)

app.listen(8000,()=>{
    connect()
   console.log("connected to backend!") 
})
