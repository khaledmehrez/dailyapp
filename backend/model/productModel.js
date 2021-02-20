const mongoose= require('mongoose')

const ProductSchema=mongoose.Schema(
    {
       title:{type:String,},
        date:{type:String},
        
    }
);


module.exports=mongoose.model('product',ProductSchema)