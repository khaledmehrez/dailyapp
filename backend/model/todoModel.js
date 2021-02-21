const mongoose= require('mongoose')

const todoSchema=mongoose.Schema(
    {
       title:{type:String,},
        time:{type:String},
        
    }
);


module.exports=mongoose.model('todo',todoSchema)