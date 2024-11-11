import mongoose,{Schema} from "mongoose";

const otpSchema = new Schema({
    name:{
        type:String,
        required:true,

    },
    username:{
            type:Schema.Types.ObjectId,
            ref:"User",
            required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    isverified:{

    }
},{timestamps:true})


