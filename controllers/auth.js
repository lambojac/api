import User from "../models/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const register=async (req,res,next)=>{
    try{
const salt=bcrypt.genSaltSync(10)
const hash=bcrypt.hashSync(req.body.password,salt)


const newUser=new User({
    username:req.body.username,
    email:req.body.email,
    password:hash
})
await newUser.save()
res.status(201).send("user has been created")
    }catch(err){
        next(err)
    }
}

//login func
export const login=async (req,res,next)=>{
    try{
const user=await User.findOne({username:req.body.username})
if(!user) return next(createError(404,"user not found"))
const isPasswordCorrect=await bcrypt.compare(req.body.password,user.password)
if(!isPasswordCorrect)return next(createError(400,"wrong password or username"))

const token=jwt.sign({id:user._id, isAdmin:user.isAdmin},"9FzHo+pFg4ckIP5jOn/n403ajJu2rieK9TbiTrw4VdA=")


const{password, isAdmin,...otherDetails}=user._doc
res.status(201).json({...otherDetails})
    }
    catch(err){
        next(err)
    }
}