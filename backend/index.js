
const express = require("express");


const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.routes");


const app = express()


app.use(express.json());


app.use(express.urlencoded({extended:true}))

app.use("/users",userRouter)
app.get(()=>(req,res)=>{
    res.send("HomePage")
})


app.listen(8080,async()=>{
    try {
        await connection
        console.log("connected to DB")
    } catch (error) {
        console.log(error);
    }
    console.log("server is running on port 8080")
})