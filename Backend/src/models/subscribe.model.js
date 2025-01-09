
import mongoose, { Schema } from "mongoose";


// Update the schema to include errorEntries
const subscribeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: true,
      },

  },
  { timestamps: true }
);

export const Subscribe = mongoose.model("SubscribeSchema", subscribeSchema);