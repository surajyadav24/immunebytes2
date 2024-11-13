import mongoose ,{Schema} from 'mongoose'

const addPortfolioSchema  = new Schema({
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
},{timestamps:true})


export const AddPortfolio = new mongoose.model("AddPortfolio",addPortfolioSchema )
