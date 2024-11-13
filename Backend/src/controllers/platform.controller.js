import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Platform } from "../models/platform.model.js";


 const platform =asyncHandler(async (req, res) => {
    const data = req.body;
    if(!data) {
        throw new ApiError(401,"Issue while getting data from frontend")
    }
    const result = await Platform.create(data);
    if(!result) {
        throw new ApiError(401,"Issue while adding book in create functionality")
    }
    return res
    .status(201)
    .json(new ApiResponse(201, {result}, " Platform added Successfully"));
  }) ;

  export {platform}