import mongoose ,{Schema} from 'mongoose'

const cSigmaSchema  = new Schema({
    name:{
        type:String,
        required:true
    },
    image: { 
        type: String, 
        required: true },
    platform: { 
        type: String ,
        required: true },
    auditDate: { 
        type: Date,
        required: true },
    Errors: { 
        type: String },
    status:{
        type:String, 
        enum:['complete','In-Progress']},
    companyDiscription:{
        type: String ,
        required: true
    },
    uploadPdf:{
        type:String,
        required:true
    },
    company:{
        handler1: {
            type: String,
            enum: ['Handler1', 'Handler2', 'Handler3'], // Add more handlers as needed
            required: true
        },
        handler2: {
            type: String,
            enum: ['HandlerA', 'HandlerB', 'HandlerC'], // Add more handlers as needed
            required: true
        }
    },


},{timestamps:true})


export const CSigma = new mongoose.model("CSigma",cSigmaSchema )
