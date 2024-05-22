import userModel from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'


//login user

export const loginUser = async(req,res)=>{

    const {email,password} = req.body
    try {
        const user = await userModel.findOne({email})
        // check the user is that already register or not 
        if(!user){
          return res.json({succes:false,message:"User Does not exist"})
        } 
        //after finding user , and his/her email now check password
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
          return res.json({succes:false,message:"invalid email and password"})
        }
        const token = createToken(user._id)
        res.json({success:true,token})

   } catch (error) {
      console.log(error)
      res.json({succes:false,message:"Error while login"})
   }

}
// create Token 
const createToken = (id)=>{
  return jwt.sign({id},process.env.JWT_SECRET)
}

// register user
export const registerUser = async(req,res)=>{
    const {name,password,email} = req.body;
    

    // if user already exists
    try {
          const exists = await userModel.findOne({email})
            if(exists){
              return res.json({success:false,message:"User already exists"})
        }
        //validating email formate and strong password
        if(!validator.isEmail(email)){
          return res.json({success:false,message:"Please Enter a valid email"})
        }
        if(password.length<8){
          return res.json({success:false,message:"Please enter a strong password"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password,salt)

        const newUser = await userModel({
          name:name,
          email:email,
          password:hashedpassword
        })
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token})

        } catch (error) {
            console.log(error)
            res.json({success:false,message:"Error while reggister user"})
    }
}
