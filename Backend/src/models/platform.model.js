import mongoose ,{Schema} from 'mongoose'

const platformSchema  = new Schema({
    addplatform: { 
        type: String, 
        required: true },
    platforms: { 
        type: String ,
        enum:["Etherum","Abbitrum","Vanar","Fantom","Bsc","Solana","Cardano"],
        required: true },

},{timestamps:true})


export const Platform = new mongoose.model("Platform",platformSchema )
