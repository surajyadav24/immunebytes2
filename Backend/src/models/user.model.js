import mongoose ,{Schema} from 'mongoose'

const userSchema = new Schema({
    username:{
        type:String,
        required:true ,
        unique:true,
        lowercase:true,
        trim:true,
      },
      email:{
        type:String,
        required:true ,
      },
      password:{
        type:String,
        required:true,
        minlength:6
      },
},{timestamps:true})

export const User = new mongoose.model("User",userSchema)
