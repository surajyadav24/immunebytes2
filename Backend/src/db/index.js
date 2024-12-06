import mongoose  from "mongoose";
import {DB_NAME} from "../../constants.js"

const connectDB = async()=>{
    
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`,{
    
  useUnifiedTopology: true,
       })
        console.log(`\n MongoDB connected !! DB Host : ${connectionInstance.connection.host}`);
        console.log("MONGO_URI:", process.env.MONGODB_URI);

    } catch (error) {
        console.log("MONGODB CONNECTION ERROR : ",error);
        process.exit(1)
    }
}

export default connectDB