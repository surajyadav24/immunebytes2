import mongoose ,{Schema} from 'mongoose'

const severityFoundSchema  = new Schema({
    critical:{
        type:Number,
        required:true
    },
    high: { 
        type: Number, 
        required: true },
    medium: { 
        type: Number ,
        required: true },
    low: { 
        type: Number,
        required: true },
    informational: { 
        type: Number ,
    required:true},
    
},{timestamps:true})


export const SeverityFound = new mongoose.model("SeverityFound",severityFoundSchema )