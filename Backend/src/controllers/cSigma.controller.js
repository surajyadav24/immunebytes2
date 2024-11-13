import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { CSigma } from "../models/cSigma.model.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";


 const cSigma =asyncHandler(async (req, res) => {
    const data = req.body;
    console.log("data ::",data);


        // Transform company fields into a nested object
        if (data['company.handler1'] && data['company.handler2']) {
          data.company = {
              handler1: data['company.handler1'],
              handler2: data['company.handler2'],
          };
          // Optionally remove flat keys after transformation (not mandatory but cleaner)
          delete data['company.handler1'];
          delete data['company.handler2'];
      } else {
          throw new ApiError(401, "Company handlers are required");
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

    const auditDate = new Date(data.auditDate); // Ensure this is in a valid Date format
if (isNaN(auditDate)) {
  throw new ApiError(400, "Invalid date format forx auditDate.");
}
data.auditDate = auditDate;

    if(!data.company || !data.company.handler1 || !data.company.handler2) {
        throw new ApiError(401,"Issue while getting data/company handlers from frontend")
    }
    const result = await CSigma.create(data);
    if(!result) {
        throw new ApiError(401,"Issue while adding CSigma in create functionality")
    }
    return res
    .status(201)
    .json(new ApiResponse(201, {result}, " CSigma added Successfully"));
  }) ;

  export {cSigma}