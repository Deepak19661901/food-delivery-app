import mongoose from "mongoose";

export const connectDB = async()=>{
  await mongoose.connect(`mongodb+srv://deepakkumarnieit:6TIcVWhWVDndcZZD@fooddelivery.zejonw6.mongodb.net/food-delivery`).then(()=>{
    console.log("DB Connected")
  })
}