import express from "express"
const router =express.Router();
router.get("/",(req,res)=>{
    res.send("hello this i an auth route")
})

export default router