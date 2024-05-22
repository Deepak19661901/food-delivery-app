import jwt from 'jsonwebtoken'


const authMiddleWare = async(req,res,next)=>{
    const {token} = req.headers    // taken the token from the user

    if(!token){
      return res.json({success:false,message:"Not Authorized Login Again"})
    }
    // now if we have token now its time to decode the token
    try {
      const token_decode = jwt.verify(token,process.env.JWT_SECRET) 
      // token coverted into User Id using that user id we can add remove from the cart
      req.body.userId = token_decode.id
      next()
    } catch (error) {
      console.log(error)
      res.json({success:false, message:"Error while decoding token"})
    }
}

export default authMiddleWare