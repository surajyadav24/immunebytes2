// -----------PLATFORM CONTROLLER ------
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { UserPlatform } from "../models/userPlatform.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";



// Add a new platform
const addPlatform = asyncHandler(async (req, res) => {
  const { platformName } = req.body;

  if (!platformName) {
    throw new ApiError(400, "Platform name is required");
  }

  const existingPlatform = await UserPlatform.findOne({ platformName });
  if (existingPlatform) {
    throw new ApiError(409, "Platform already exists");
  }

  const newPlatform = await UserPlatform.create({ platformName });
  return res
    .status(201)
    .json(new ApiResponse(200, { newPlatform }, "Platform added successful"));
});

// Fetch all platforms
const getPlatforms = asyncHandler(async (req, res) => {
  const platforms = await UserPlatform.find();
  return res.status(200).json(new ApiResponse(200, { platforms }, "Platform got successful"));
});

// Update a platform
// Update a platform
const updatePlatform = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { platformName } = req.body;

  if (!platformName) {
    throw new ApiError(400, "Platform name is required");
  }

  const updatedPlatform = await UserPlatform.findByIdAndUpdate(
    id,
    { platformName },
    { new: true, runValidators: true }
  );

  if (!updatedPlatform) {
    throw new ApiError(404, "Platform not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { platform: updatedPlatform }, "Platform updated successfully"));
});

// Delete a platform
const deletePlatform = asyncHandler(async (req, res) => {
  const { id } = req.params;

    // Define the allowed email ID
    const allowedEmail = ["chetnadigitalmolecule@gmail.com","aabhas@immunebytes.com"];
    // console.log(allowedEmail,"allowedEmail")
// console.log(req.user.email,"req.user.email")
    // Check if the authenticated user's email matches the allowed email
    if (!allowedEmail.includes(req.user.email)) {
      throw new ApiError(403, "You are not authorized to delete this platform.");
    }else{
      // console.log("equal -- email ")
    }

  const deletedPlatform = await UserPlatform.findByIdAndDelete(id)
;
// console.log(deletePlatform,"deleteplatform")

  if (!deletedPlatform) {
    throw new ApiError(404, "Platform not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { platform: deletedPlatform }, "Platform deleted successfully"));
});

export { addPlatform, getPlatforms, updatePlatform ,deletePlatform};