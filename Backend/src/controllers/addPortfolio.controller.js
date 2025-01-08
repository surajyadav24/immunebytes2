// import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { AddPortfolio } from "../models/addPortfolio.model.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";


// Create portfolio handler
const addPortfolio = asyncHandler(async (req, res) => {
  const data = req.body;

  if (!data) {
    throw new ApiError(401, "Issue while getting data from frontend");
  }

  const imageLocalPath = req.files?.image?.[0]?.path;
  const pdfLocalPath = req.files?.pdf?.[0]?.path;

  if (!imageLocalPath) {
    throw new ApiError(401, "Image is required");
  }
  if (!pdfLocalPath) {
    throw new ApiError(401, "PDF is required");
  }

  const image = await uploadOnCloudinary(imageLocalPath);
  const pdf = await uploadOnCloudinary(pdfLocalPath);

  if (image) data.image = image.secure_url;
  if (pdf) data.pdf = pdf.secure_url;

  // Validate and parse errorEntries
  if (!Array.isArray(data.errorEntries) || data.errorEntries.length === 0) {
    throw new ApiError(400, "Error entries are required");
  }

  data.errorEntries = data.errorEntries.map((entry) => {
    if (!entry.errorType || !entry.errorStatus || !entry.errorDescription) {
      throw new ApiError(
        400,
        "Each error entry must include errorType, errorStatus, and errorDescription"
      );
    }
    return entry;
  });

  const result = await AddPortfolio.create(data);

  if (!result) {
    throw new ApiError(401, "Issue while adding portfolio");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { result }, "Portfolio added successfully"));
});

// Fetch all portfolios
const getPortfolio = asyncHandler(async (req, res) => {
  const portfolios = await AddPortfolio.find();
  return res
    .status(200)
    .json(new ApiResponse(200, { portfolios }, "Portfolios fetched successfully"));
});

// Fetch a single or all portfolios
const selectPortfolio = asyncHandler(async (req, res) => {
  const { selectedItemId } = req.params;
  let portfolio;

  if (selectedItemId) {
    portfolio = await AddPortfolio.findById(selectedItemId);
    if (!portfolio) {
      throw new ApiError(404, "Portfolio not found");
    }
  } else {
    portfolio = await AddPortfolio.find();
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { portfolio }, "Portfolio fetched successfully"));
});

// Update portfolio handler
const updatePortfolio = asyncHandler(async (req, res) => {
  const {selectedItemId} = req.params;
  const data = req.body;
  

  // Validate portfolio existence
  const portfolio = await AddPortfolio.findById(selectedItemId);
  if (!portfolio) {
    throw new ApiError(404, "Portfolio not found");
  }

  // Handle file uploads
  const imageLocalPath = req.files?.image?.[0]?.path;
  const pdfLocalPath = req.files?.pdf?.[0]?.path;

  if (imageLocalPath) {
    const image = await uploadOnCloudinary(imageLocalPath);
    data.image = image.secure_url;
  }

  if (pdfLocalPath) {
    const pdf = await uploadOnCloudinary(pdfLocalPath);
    data.pdf = pdf.secure_url;
  }

  // Update error entries if provided
  if (data.errorEntries) {
    data.errorEntries = data.errorEntries.map((entry) => {
      if (!entry.errorType || !entry.errorStatus || !entry.errorDescription) {
        throw new ApiError(
          400,
          "Each error entry must include errorType, errorStatus, and errorDescription"
        );
      }
      return entry;
    });
  }

  // Merge and save updates
  Object.assign(portfolio, data);
  const updatedPortfolio = await portfolio.save();

  return res
    .status(200)
    .json(new ApiResponse(200, { updatedPortfolio }, "Portfolio updated successfully"));
});


const deletePortfolio = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const portfolio = await AddPortfolio.findById(id);
  if (!portfolio) {
    throw new ApiError(404, 'Portfolio not found');
  }

  await portfolio.deleteOne();
  res.status(200).json(new ApiResponse(200, {}, 'Portfolio deleted successfully'));
});


export { addPortfolio, getPortfolio, selectPortfolio, updatePortfolio,deletePortfolio };