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
    
    const imageLocalPath = req.files?.image?.[0].path;
    const pdfLocalPath = req.files?.pdf?.[0].path; 
    // console.log("pdflocalpath",pdfLocalPath)

    if(!pdfLocalPath){
        throw new ApiError(401,"pdf  is required -- pdflocalpath not available")

    }


    if(!imageLocalPath){
        throw new ApiError(401,"Image is required")
    }

    const image = await uploadOnCloudinary(imageLocalPath)
    if (image) {
        data.image = image.secure_url;  // Store the URL from Cloudinary
        console.log("image url ::",image.secure_url)

    }
   
    if (!image) {
        throw new ApiError(400, "Image file is required")
    }

        const pdf = await uploadOnCloudinary(pdfLocalPath);
        if (pdf) {
          data.pdf = pdf.secure_url; // Store the PDF URL from Cloudinary
          console.log("pdf url ::",pdf.secure_url)
        }
        if (!pdf) {
            throw new ApiError(400, "pdf file is required")
        }

    const result = await AddPortfolio.create(data);
    if(!result) {
        throw new ApiError(401,"Issue while adding book in create functionality")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, {result}, " Portfolio added Successfully"))

  }) 

  // Fetch all platforms
const getportfolio = asyncHandler(async (req, res) => {
    const Portfolio = await AddPortfolio.find();
    return res.status(200).json(new ApiResponse(200, { Portfolio }, "portfolio got successful"));
  });

  const selectportfolio = async(req,res)=>{
   
        // If a specific portfolio is requested
        const { selectedItemId } = req.params;
        let portfolio;
      
        if (selectedItemId) {
          portfolio = await AddPortfolio.findById(selectedItemId); // Fetch specific portfolio by ID
          if (!portfolio) {
            throw new ApiError(404, "Portfolio not found");
          }
        } else {
          // Fetch all portfolios
          portfolio = await AddPortfolio.find();
        }
      
        return res.status(200).json(new ApiResponse(200, { portfolio }, "Portfolios fetched successfully"));
  }

  export {addportfolio,getportfolio,selectportfolio}