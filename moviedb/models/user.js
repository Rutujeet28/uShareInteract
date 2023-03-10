const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const ImageSchema=new mongoose.Schema({
    url:String,
    filename:String
})
const shareSchema=new mongoose.Schema({
    id:{
        type:Schema.Types.ObjectId,
        ref:'Post'
    },
    time:{
        type:Number
    }
})

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
        
    },
    bio:{
        type:String
    },
    
    profile_image:ImageSchema,
    cover_image:ImageSchema,
    followers:[{
        type:Schema.Types.ObjectId,
        ref:'User'
    }],
    following:[{
        type:Schema.Types.ObjectId,
        ref:'User'
    }],
    // shared:shareSchema
    shared:[{
        id:{
        type:Schema.Types.ObjectId,
        ref:'Post'
    },
    time:{
      type:Number
       }}]
    
})

const User=mongoose.model('User',userSchema);

module.exports=User;