import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import studentRoute from './routes/studentRoutes.js'
const app=express()
app.use(cors())
app.use(express.json())
app.use("/student",studentRoute)
app.get("/", async (req, res) => {
    res.send("Api Running on vercel");s
})

mongoose.connect("mongodb+srv://anandh:anandh1234@cluster0.hjcdzwx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Database Connected...")
})
.catch((err)=>{
    console.log("the database not Connected..")
})
app.listen(7000,(req,res)=>{
    console.log("the Server Is Running in Port :7000")
})
