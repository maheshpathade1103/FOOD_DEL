import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://maheshpathade010:Myfooddelpass@cluster0.f4pkl.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}