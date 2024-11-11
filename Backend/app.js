import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
    origin:["http://localhost:8000"],
    methods:["GET","POST"],
    credentials:true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send("hello")
})

import userRouter from './src/routes/user.route.js'
import Cookies from "cookies"
app.use("/api/v1/users",userRouter)






export { app }