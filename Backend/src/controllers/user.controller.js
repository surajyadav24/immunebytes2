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
  forgotPasswordTemplate,
  resetPasswordTemplate,
} from "../utils/mail.js";


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
  // console.log(user.email)

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

  const OTP = generateOTP();
  
  // Hash the OTP before saving in the database
  const hashedOTP = await bcrypt.hash(OTP, 10);

  // Save the hashed OTP in VerificationToken collection
  const verificationToken = new VerificationToken({
    owner: user._id,
    token: hashedOTP,
  });
  await verificationToken.save();

  // mailTransport().sendMail({
  //   from: "Immunebytes@gmail.com",
  //   to: user.email,
  //   subject: "Verify your email account",
  //   html: generateEmailTemplate(OTP),
  // });

  mailTransport().sendMail({
    from: "chetnachetna8585@gmail.com",  // Set your sender email here
    to: user.email,  // This is dynamically set to the user's email
    subject: "Verify your email account",
    html: generateEmailTemplate(OTP),  // Use the template for the email content
  });
  // console.log(user.email)

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

  return res
  .status(200)
  .json(
    new ApiResponse(
      200,
      { user },
      "Email verified successfully"
    )
  );
});



// VERIFY OTP ----------->

// const verifyOTP = asyncHandler(async(req, res) => {
//   const { userId, otp } = req.body;
//   if (!userId || !otp.trim()) {
//     throw new ApiError(401, "Invalid request missing parameters !");
//   }

//   const user = await User.findById(userId);
//   if (!user) {
//     throw new ApiError(401, "Sorry! This userId doesn't exist");
//   }

//   const token = await VerificationToken.findOne({ owner: user._id });
//   if (!token) {
//     throw new ApiError(401, "OTP not found or expired");
//   }

//   // Compare the hashed OTP stored in the token with the OTP provided by the user
//   const isOTPValid = await bcrypt.compare(otp, token.token);
//   if (!isOTPValid) {
//     throw new ApiError(401, "Invalid OTP");
//   }

//   // OTP is valid, proceed with email verification or other actions
//   user.verified = true;
//   await VerificationToken.findByIdAndDelete(token._id);
//   await user.save();

//   mailTransport().sendMail({
//     from: "Immunebytes@gmail.com",
//     to: user.email,
//     subject: "Email Verified",
//     html: plainEmailTemplate(
//       "Email verified Successfully",
//       "Thanks for verifying your email"
//     ),
//   });

//   return res
//     .status(200)
//     .json(new ApiResponse(200, { user }, "User details fetched successfully"));
// });

// VERIFY OTP ------------>
const verifyOTP = asyncHandler(async (req, res) => {
  const { userId, otp } = req.body;

  if (!userId || !otp.trim()) {
    throw new ApiError(401, "Invalid request missing parameters!");
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(401, "Sorry! This userId doesn't exist");
  }

  const token = await VerificationToken.findOne({ owner: user._id });
  if (!token) {
    throw new ApiError(401, "OTP not found or expired");
  }

  // Compare the hashed OTP stored in the token with the OTP provided by the user
  const isOTPValid = await bcrypt.compare(otp, token.token);
  if (!isOTPValid) {
    throw new ApiError(401, "Invalid OTP");
  }

  // OTP is valid, proceed with email verification or other actions
  user.verified = true;
  await VerificationToken.findByIdAndDelete(token._id);
  await user.save();

  mailTransport().sendMail({
    from: "Immunebytes@gmail.com",
    to: user.email,
    subject: "Email Verified",
    html: plainEmailTemplate(
      "Email verified Successfully",
      "Thanks for verifying your email"
    ),
  });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { user },
        "Email verified successfully"
      )
    );
});




// FORGOT PASSWORD -------------->
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new ApiError(401, "user doesn't exist");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(401, "username and password is required");
  }

  // Generate reset token
  const resetPasswordToken = crypto.randomBytes(20).toString("hex");
  const resetTokenExpiresAt = new Date(Date.now() + 2 * 60 * 60 * 1000);
  const day = resetTokenExpiresAt.getDate();
  const month = resetTokenExpiresAt.getMonth() + 1; // Adding 1 as months are 0-indexed
  const year = resetTokenExpiresAt.getFullYear();
  const hours = resetTokenExpiresAt.getHours();
  const mins = resetTokenExpiresAt.getMinutes();

  const formattedDate = `${day}-${month}-${year}-${hours}-${mins}`;
  console.log(formattedDate); // Example: 12-11-2024

  user.resetPasswordToken = resetPasswordToken;
  user.resetPasswordExpiresAt = resetTokenExpiresAt;

  await user.save();

  // send email
  // await sendPasswordResetEmail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetToken}`);
  mailTransport().sendMail({
    from: "Immunebytes@gmail.com",
    to: user.email,
    subject: "Forgot-Password",
    html: forgotPasswordTemplate(
      "forgot password Successfully",
      "Thanks for contacting with us"
    ),
  });

  return res
    .status(200)
    .json(
      new ApiResponse(200, { user }, "Password reset link sent to your email")
    );
});

// RESET PASSWORD -------------->
const resetPassword = asyncHandler(async (req, res) => {
  const { resetPasswordToken } = req.params;
  console.log("TOKEN :", resetPasswordToken);
  const { password } = req.body;

  const user = await User.findOne({
    resetPasswordToken: resetPasswordToken,
    resetPasswordExpiresAt: { $gt: new Date() },
  });

  if (!user) {
    throw new ApiError(401, "User doesn't exist");
  }

  // update password
  const hashedPassword = await bcrypt.hash(password, 10);

  user.password = hashedPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpiresAt = undefined;
  await user.save();

  // await sendResetSuccessEmail(user.email);

  mailTransport().sendMail({
    from: "Immunebytes@gmail.com",
    to: user.email,
    subject: "Reset-Password",
    html: resetPasswordTemplate(
      "Password Reset successfully",
      "Thanks for contacting with us"
    ),
  });
  return res
    .status(200)
    .json(new ApiResponse(200, { user }, "Password reset successful"));
});

export { signUp, logIn, logOut, verifyEmail, forgotPassword, resetPassword ,verifyOTP};
