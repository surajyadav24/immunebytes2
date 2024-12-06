import { SeverityFound } from "../models/severityFound.model.js";
import {ApiError} from "../utils/ApiError.js"; // Assuming you have a utility for API error handling
import {ApiResponse} from "../utils/ApiResponse.js"; // Assuming you have a utility for API response formatting

const severity = async (req, res, next) => {
  try {
    const data = req.body;
    if (!data || !data.counts) {
      throw new ApiError(400, "Invalid data from frontend");
    }

    const { counts } = data;

    // Check if an existing record is present (e.g., for the user or globally)
    let severityRecord = await SeverityFound.findOne().sort({ createdAt: -1 });

    if (severityRecord) {
      // Update existing severity record by adding new counts
      severityRecord.critical += counts.critical || 0;
      severityRecord.high += counts.high || 0;
      severityRecord.medium += counts.medium || 0;
      severityRecord.low += counts.low || 0;
      severityRecord.informational += counts.informational || 0;

      await severityRecord.save(); // Save the updated record
    } else {
      // Create a new record if no existing record is found
      severityRecord = await SeverityFound.create({
        critical: counts.critical,
        high: counts.high,
        medium: counts.medium,
        low: counts.low,
        informational: counts.informational,
      });
    }

    // Return a successful response
    return res.status(200).json(
      new ApiResponse(200, { severityRecord }, "Severity data updated successfully")
    );
  } catch (error) {
    next(error); // Pass errors to the error handling middleware
  }
};


const getseverity = async (req, res, next) => {
  try {
    // Fetch the latest severity record
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

    // Avoid division by zero
    if (total === 0) {
      return res.status(200).json(
        new ApiResponse(200, { severityRecord, percentages: {} }, "No data to calculate percentages")
      );
    }

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

export {
  severity,
  getseverity
}
