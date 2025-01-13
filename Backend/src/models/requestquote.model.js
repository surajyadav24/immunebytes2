
import mongoose, { Schema } from "mongoose";


// Update the schema to include errorEntries
const requestQuoteSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: true,
      },
      projectwebsite: {
        type: String,
        required: true,
      },
      githublink: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
      services: {
        type: String,
        required: true,
      },
      auditdeadline: {
        type: String,
        required: true,
      },



  },
  { timestamps: true }
);

export const RequestQuote = mongoose.model("RequestQuoteSchema", requestQuoteSchema);