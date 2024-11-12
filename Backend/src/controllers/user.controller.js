import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import bcrypt from "bcryptjs";
import { VerificationToken } from "../models/verificationToken.model.js";
import { isValidObjectId } from "mongoose";
import crypto from "crypto";
import {
  generateEmailTemplate,
  generateOTP,
  mailTransport,
  plainEmailTemplate,
} from "../utils/mail.js";
import { VerificationToken } from "../models/verificationToken.model.js";
import { isValidObjectId } from "mongoose";

// TOKEN ----------->
const generateAccessAndRefreshToken = async (userid) => {
  try {
    const user = await User.findById(userid);

    if (!user) {
      throw new ApiError(404, "User not found");
    }
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    // console.log(process.env.ACCESS_TOKEN_SECRET,process.env.REFRESH_TOKEN_SECRET)

    if (!accessToken || !refreshToken) {
      throw new Error("Token generation failed");
    }

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "something went wrong while generating access and refresh token"
    );
  }
};

// SIGNUP ---------------->
const signUp = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if ([username, email, password].some((field) => field?.trim() == "")) {
    throw new ApiError(400, "All Fields are Required");
  }

  const existedUser = await User.findOne({ username });

  if (existedUser) {
    throw new ApiError(400, " This Username already exist");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    username: username.toLowerCase(),
    email,
    password: hashedPassword,
  });

  const OTP = generateOTP();
  const verificationToken = new VerificationToken({
    owner: user._id,
    token: OTP,
  });
  await verificationToken.save();

  mailTransport().sendMail({
    from: "Immunebytes@gmail.com",
    to: user.email,
    subject: "Verify your email account",
    html: generateEmailTemplate(OTP),
  });

  if (!user) {
    throw new ApiError(400, "Invalid user details");
  }

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "something went wron while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, " User Signup  Successfully"));
});

// LOGIN ---------- >
const logIn = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ApiError(401, "username and password is required");
  }
  const user = await User.findOne({ username });
  if (!user) {
    throw new ApiError(401, "user doesn't exist");
  }

  const allowedEmails = [
    "chetnadigitalmolecule@gmail.com",
    "suraj@digitalmolecule.in",
  ];

  // Check if the user's email is in the allowed list
  if (!allowedEmails.includes(user.email)) {
    throw new ApiError(
      403,
      "Access denied. This email is not allowed to log in."
    );
  }
  const isPasswordCorrect = await bcrypt.compare(
    password,
    user?.password || ""
  );
  if (!isPasswordCorrect) {
    throw new ApiError(401, "Password is incorrect ");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  // console.log(accessToken, refreshToken)

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken "
  );

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser, accessToken, refreshToken },
        "User details fetched successfully"
      )
    );
});

// LOGOUT ------------------->
const logOut = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "user logged out successfully"));
});

// VERIFY EMAIL ----------->
const verifyEmail = asyncHandler(async (req, res) => {
  const { userId, otp } = req.body;
  if (!userId || !otp.trim()) {
    throw new ApiError(401, "Invalid request missing parameters !");
  }
  if (!isValidObjectId(userId)) {
    throw new ApiError(401, "Invalid UserId");
  }
  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(401, "Sorry! This userId doesn't exist");
  }
  // if (user.verified) {
  //   throw new ApiError(401, "This Account already verified");
  // }
  const token = await VerificationToken.findOne({ owner: user._id });
  if (!token) {
    throw new ApiError(401, "Sorry User Not Found");
  }

  user.verified = true;
  await VerificationToken.findByIdAndDelete(token._id);

  await user.save();
  mailTransport().sendMail({
    from: "Immunebytes@gmail.com",
    to: user.email,
    subject: "Verify your email account",
    html: plainEmailTemplate(
      "Email verified Successfully",
      "Thanks for contacting with us"
    ),
  });
});

export { signUp, logIn, logOut, verifyEmail };
