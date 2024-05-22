import express from 'express'
import authMiddleWare from '../middleware/auth.middleware.js'
import { placeOrder,verifyOrder,userOrders,listOrders,updateStatus} from '../controllers/order.controller.js'

const orderRouter = express.Router()


orderRouter.post("/place",authMiddleWare,placeOrder)
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userorders",authMiddleWare,userOrders)
orderRouter.get("/list",listOrders)
orderRouter.post("/status",updateStatus)




export default orderRouter