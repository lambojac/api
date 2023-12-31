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
        await mongoose.connect('mongodb+srv://kennie:869480Ak@cluster0.zkjbfkp.mongodb.net/booking?retryWrites=true&w=majority')
        console.log("connected to database")
    }catch(error){
        throw error;
    }
}
app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)

app.use((err,req,res,next)=>{
    const errorStatus=err.status||500
    const errorMessage=err.message||"Something went wrong"
    return res.status(errorStatus).json({
success:false,
status:errorStatus,
message:errorMessage,
stack:err.stack,
    })
})
app.listen(8000,()=>{
    connect()
   console.log("connected to backend!") 
})
