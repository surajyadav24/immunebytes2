import { RequestQuote } from "../models/requestquote.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import {
  mailTransport,
  requestQuoteEmailTemplate
} from "../utils/mail.js";



const requestQuote = asyncHandler(async(req,res)=>{
    const { name ,username, email, projectwebsite,githublink,services,timeline } = req.body;

    if ([name ,username, email, projectwebsite,githublink,services,timeline].some((field) => field?.trim() == "")) {
      throw new ApiError(400, "All Fields are Required");
    }
    const newRequestQuote = await RequestQuote.create({
      name,
      username,
      email,
      projectwebsite,
      githublink,
      services,
      timeline,
    });
    if (!newRequestQuote) {
        throw new ApiError(400, "Invalid newRequestQuote details");
      }

      await newRequestQuote.save()

      mailTransport().sendMail({
        to: process.env.email_username,
        from: newRequestQuote.email,
        subject: "Request Quote",
        html: requestQuoteEmailTemplate(     name,
          username,
          email,
          projectwebsite,
          githublink,
          services,
          timeline,),
      });
    

      return res
    .status(200)
    .json(new ApiResponse(200, newRequestQuote, " newRequestQuote fill  Successfully"));
})

export {requestQuote}