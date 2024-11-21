
import mongoose, { Schema } from "mongoose";


// Update the schema to include errorEntries
const addPortfolioSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
    auditDate: {
      type: Date,
      required: true,
    },
    errorBags: {
      type: String,
    },
    status: {
      type: String,
      required: true,
    },
    pdf: {
      type: String,
      required: true,
    },
    companyDescription: {
      type: String,
      required: true,
    },
    // Dynamic error entries as an array
    errorEntries: [
      {
        errorType: {
          type: String,
          required: true,
        },
        errorStatus: {
          type: String,
          required: true,
        },
        errorDescription: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const AddPortfolio = mongoose.model("AddPortfolio", addPortfolioSchema);