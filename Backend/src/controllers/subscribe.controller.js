import { Subscribe } from "../models/subscribe.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import {
  mailTransport,
  SubscribeEmailTemplate
} from "../utils/mail.js";



const subscribe = asyncHandler(async(req,res)=>{
    const { name , email } = req.body;

    if ([name , email].some((field) => field?.trim() == "")) {
      throw new ApiError(400, "All Fields are Required");
    }
    const newSubscribe = await Subscribe.create({
      name,
      email,
    });
    if (!newSubscribe) {
        throw new ApiError(400, "Invalid newRequestQuote details");
      }

      await newSubscribe.save()
      // console.log("newSubscribe",newSubscribe)
      


      mailTransport().sendMail({
        to: process.env.email_username,
        from: newSubscribe.email,
        subject: "Subscribe",
        html: SubscribeEmailTemplate(name,
          email,
       ),
      });
    
      // console.log(typeof name, typeof email);


      return res
    .status(200)
    .json(new ApiResponse(200, newSubscribe, " newSubscribe fill  Successfully"));
})

export {subscribe}