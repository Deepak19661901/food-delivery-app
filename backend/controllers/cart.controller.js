import userModel from '../models/user.model.js'


// add Item to User Cart

export const addToCart = async(req,res)=>{
    
  try {
      let userData = await userModel.findById(req.body.userId)
      // if(!userData){
      //   console.log("no user data found")
      // }
      let cartData = await userData.cartData
      console.log(cartData)
      if(!cartData[req.body.itemId]){
        cartData[req.body.itemId]=1;
      }
      else{
        cartData[req.body.itemId] +=1
      }
      await userModel.findByIdAndUpdate(req.body.userId,{cartData})
      res.json({success:true,message:"Added to cart"})
    } catch (error) {
      console.log("ERROE",error)
      res.json({success:false,message:"Error while upadting addTo cart"})
    }

}


// remove Item from userCart

export const removeFromCart = async(req,res)=>{

   try {
    let userData = await userModel.findById(req.body.userId)// find user 
    let cartData = await userData.cartData;

    if(cartData[req.body.itemId]>0){
        cartData[req.body.itemId] -=1   // decement the id of the product
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData})
    res.json({success:true,message:"Removed From cart"})
   
   } catch (error) {
      console.log(error)
      res.json({success:false,message:"Error while removing product from cart"})
   }
}

// fetch User cart Data
export const getCart = async(req,res)=>{

    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData
        res.json({success:true,cartData})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error while fetching data "})
    }

}