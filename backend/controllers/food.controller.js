import foodModel from '../models/food.model.js'
import fs from 'fs'

// add food Item

export const addFood = async(req,res)=>{

      let image_fileName = `${req.file.filename}`

      const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_fileName
      })
      try {
        await food.save();
        res.json({
          success:true,
          message:"food added"
        })
      } catch (error) {
        console.log(error)
        res.json({
          success:false,
          message:"Error while Saving Product"
        })
      }
}

// all food List
export const listFood = async(req,res)=>{
 
  try {
    const foods = await foodModel.find({});
    if(foods){
      res.json({success:true,data:foods})
    }
  } catch (error) {
     console.log(error)
     res.json({success:false,message:"Error While Fetching list of food From DB"})
  }
}

// remove food Item

export const removeFood = async(req,res)=>{
  try {
    
  // step1 : to get the food which i have to delete
  // setp2 : is use to unlink the images which had been stored in the upload folder
  // step3 : finally delete that document
    const food = await foodModel.findById(req.body.id)
    fs.unlink(`uploads/${food.image}`,()=>{}) 
    await foodModel.findByIdAndDelete(req.body.id)
    res.json({success:true,message:"food Removed"})

  } catch (error) {
    console.log(error)
    res.json({
      success:false,
      message:"Error while deleting food Item"
    })
  }
}

