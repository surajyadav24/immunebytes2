// -----------USER ROUTE -----------BACKEND
import { Router } from "express"
import { signUp,logOut,logIn, forgotPassword,resetPassword,resendOtp ,getCurrentUser} from "../controllers/user.controller.js"
import { verifyJwt } from "../middlewares/auth.middleware.js"
import { verifyOTP } from "../controllers/user.controller.js"
import { addPortfolio, getPortfolio ,selectPortfolio,updatePortfolio,deletePortfolio,getAuditStats,updatePortfolioStatus } from "../controllers/addPortfolio.controller.js"
import { addPlatform, deletePlatform, getPlatforms, updatePlatform } from "../controllers/platform.controller.js"
import { cSigma } from "../controllers/cSigma.controller.js"
import { upload } from "../middlewares/multer.middleware.js"
import { severity,getseverity } from "../controllers/severityFound.controller.js"
import {requestQuote}  from '../controllers/requestQuote.controller.js'
import {subscribe}  from '../controllers/subscribe.controller.js'



const router = Router()

// UN SECURE ROUTES
router.route("/SignUp").post(signUp)
router.route("/login").post(logIn)
router.route("/requestquote").post(requestQuote)
router.route("/subscribe").post(subscribe)


router.route("/getportfolio/:selectedItemId").post(selectPortfolio);
router.route("/getportfolio").post(getPortfolio);
router.route("/getseverity").post(getseverity);
router.route("/getplatforms").post(getPlatforms);
router.route("/Forgot-Password").post(forgotPassword)


//secure routes
router.route("/logout").post(verifyJwt, logOut)
router.route("/resend-otp").post(verifyJwt, resendOtp);
router.route("/updateplatform/:id").post(verifyJwt,updatePlatform);
router.route("/Platform").post(verifyJwt,addPlatform);
router.route("/deleteplatform/:id").post(verifyJwt,deletePlatform);


router.route("/me").post(verifyJwt,getCurrentUser);
router.route("/severity").post(verifyJwt,severity);
router.route("/updateportfolio/:selectedItemId").post(upload.fields([{ name: 'image' }, { name: 'pdf' }]),verifyJwt,updatePortfolio);
router.route("/Add-Portfolio").post(upload.fields([{ name: 'image' }, { name: 'pdf' }]),verifyJwt,addPortfolio);
router.route("/deleteportfolio/:id").delete(verifyJwt, deletePortfolio);

router.route("/audit-stats").post(getAuditStats); // Fetch stats
router.put("/portfolio/:id/status", updatePortfolioStatus); // Update status

router.route("/Reset-Password/:resetPasswordToken").post(resetPassword)
router.route("/email-verify").post(verifyJwt,verifyOTP)

// un used routes
router.route("/cSigma").post(upload.single('image'),cSigma);


export default router