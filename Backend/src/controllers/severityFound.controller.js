import { SeverityFound } from "../models/severityFound.model.js";
import {ApiError} from "../utils/ApiError.js"; // Assuming you have a utility for API error handling
import {ApiResponse} from "../utils/ApiResponse.js"; // Assuming you have a utility for API response formatting

const severity = async (req, res, next) => {
  try {
    const data = req.body;
    if (!data || !data.counts) {
      throw new ApiError(400, "Invalid data from frontend");
    }

    // Extract counts from request data
    const { counts } = data;

    // Create and save the severity data in the database
    const severityRecord = await SeverityFound.create({
      critical: counts.critical,
      high: counts.high,
      medium: counts.medium,
      low: counts.low,
      informational: counts.informational,
    });

    // Check if the record creation was successful
    if (!severityRecord) {
      throw new ApiError(500, "Failed to create severity record");
    }

    // Return a successful response
    return res.status(200).json(
      new ApiResponse(200, { severityRecord }, "Severity data saved successfully")
    );
  } catch (error) {
    // Pass errors to the error handling middleware
    next(error);
  }
};

// New function to fetch and calculate severity percentages
const getseverity = async (req, res, next) => {
    try {
      // Fetch the latest severity record (assuming we are only interested in the latest one)
      const severityRecord = await SeverityFound.findOne().sort({ createdAt: -1 });
  
      if (!severityRecord) {
        throw new ApiError(404, "No severity data found");
      }
  
      // Calculate total count
      const total = 
        severityRecord.critical + 
        severityRecord.high + 
        severityRecord.medium + 
        severityRecord.low + 
        severityRecord.informational;
  
      // Calculate percentages
      const percentages = {
        critical: ((severityRecord.critical / total) * 100).toFixed(2),
        high: ((severityRecord.high / total) * 100).toFixed(2),
        medium: ((severityRecord.medium / total) * 100).toFixed(2),
        low: ((severityRecord.low / total) * 100).toFixed(2),
        informational: ((severityRecord.informational / total) * 100).toFixed(2),
      };
      // Return the severity data and percentages
      return res.status(200).json(
        new ApiResponse(200, { severityRecord, percentages }, "Severity data retrieved successfully")
      );
    } catch (error) {
      next(error);
    }
  };

export { severity,getseverity };
