//we will create basic express server where we will use ES6 faatures...for that declare in package.json type:"module"

import express from "express";
import cors from "cors" ;
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";



//App config
const app = express()
const port = 4000 


//Middleware
app.use(express.json())   //request from frontend to backend will be parsed using this json file
app.use(cors()) //using this we can accss backend from any frontend

//DB connection
connectDB();

//API end points
app.use("/api/food", foodRouter) ;
app.use("/images", express.static('uploads'))


//to request data from server
app.get("/", (req, res)=>{
    res.send("API Working")
}) 

//while server will be running 
app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`)
})


//mongodb+srv://maheshpathade010:Myfooddelpass@cluster0.f4pkl.mongodb.net/?