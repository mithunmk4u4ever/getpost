const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
require("dotenv").config()
const port=5555

const app=express()

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://getpost-fu9a.vercel.app"
  ],
  methods:"GET,POST,PUT,PATCH,DELETE",
  credentials: true
}));
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB connected!"))
.catch(err=>console.log(err))

const mySchema=new mongoose.Schema({
    name:String,
    course:String
})
const Student=mongoose.model("student",mySchema)

app.post("/api/add",async(req,res)=>{
    try {
        const {name,course}=req.body
        const student=new Student({name,course})
        await student.save()
        res.status(201).send("added")
    } catch (error) {
        console.log(error)
    }
})

app.get("/api/data",async (req,res)=>{
    try {
        const students=await Student.find()
        res.send(students)
    } catch (error) {
        console.log(error)
    }
})

app.listen(port,()=>console.log(`server listening at port, ${port}`))