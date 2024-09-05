import express from 'express'
import cors from 'cors'
import {connectDB} from './config/db.js'
import foodRouter from './routes/food.route.js'
import userRouter from './routes/user.route.js'
import 'dotenv/config' 
import cartRouter from './routes/cart.route.js'
import orderRouter from './routes/order.routes.js'

//app config
const app = express()
const PORT = process.env.PORT||4000;


// middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB()


// api endPoint
app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(PORT,()=>{
  console.log(`server started on http://localhost:${PORT}`)
})

// mongodb+srv://deepakkumarnieit:6TIcVWhWVDndcZZD@fooddelivery.zejonw6.mongodb.net/?