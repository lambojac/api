import mongoose from "mongoose";
const {Schema}=mongoose;

const HotelSchema=new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   type:{
    type:String,
    required:true,
   },
   city:{
type:String,
required:true,
   }
})