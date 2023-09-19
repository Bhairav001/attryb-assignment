const express = require("express");
const { userModel } = require("../model/User.model");

const userRouter = express.Router();

userRouter.post("/register",async(req,res)=>{
    const payload = (req.body)
      try {
         const user = new userModel(payload)
         await user.save()
         res.send("registered successfully done")        
      } catch (error) {
        console.log(error)
      }
})


userRouter.post("/login",async(req,res)=>{
    const {email,pass} = (req.body)
      try {
         const user =await userModel.find({email,pass})
         if(user.length>0){
             res.send("login success")        
         }else{
            res.send("wrong credintials")
         }
      } catch (error) {
        console.log(error)
      }
})

module.exports={
    userRouter
}