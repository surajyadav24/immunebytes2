// import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { AddPortfolio } from "../models/addPortfolio.model.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";


 const addportfolio =asyncHandler(async (req, res) => {
    const data = req.body
    // console.log("Data - addportfolio - body ::",data)
    // console.log("file:",req.file)
    
    if(!data) {
        throw new ApiError(401,"Issue while getting data from frontend")
    }
    
    const imageLocalPath = req.file?.path

    


    if(!imageLocalPath){
        throw new ApiError(401,"Image is required")
    }

    const image = await uploadOnCloudinary(imageLocalPath)
    if (image) {
        data.image = image.secure_url;  // Store the URL from Cloudinary
    }
   
    if (!image) {
        throw new ApiError(400, "Image file is required")
    }


    const result = await AddPortfolio.create(data);
    if(!result) {
        throw new ApiError(401,"Issue while adding book in create functionality")
    }

    return res
    .status(201)
    .json(new ApiResponse(200, {result}, " Portfolio added Successfully"))

  }) 

  export {addportfolio}