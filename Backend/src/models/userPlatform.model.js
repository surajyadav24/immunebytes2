import mongoose, { Schema } from 'mongoose';

// Schema for user-defined platforms
const userPlatformSchema = new Schema(
  {
    platformName: {
      type: String,
      required: [true, "Platform name is required"],
      unique: true, // Ensures no duplicate platform names
      trim: true,
    },
  },
  { timestamps: true }
);

export const UserPlatform = mongoose.model("UserPlatform", userPlatformSchema);
