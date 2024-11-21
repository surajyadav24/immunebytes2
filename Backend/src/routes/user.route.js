import { Router } from "express"
import { signUp,logOut,logIn, forgotPassword,resetPassword,resendOtp } from "../controllers/user.controller.js"
import { verifyJwt } from "../middlewares/auth.middleware.js"
import { verifyOTP } from "../controllers/user.controller.js"
import { addPortfolio, getPortfolio ,selectPortfolio,updatePortfolio } from "../controllers/addPortfolio.controller.js"
import { addPlatform, getPlatforms, updatePlatform } from "../controllers/platform.controller.js"
import { cSigma } from "../controllers/cSigma.controller.js"
import { upload } from "../middlewares/multer.middleware.js"
import { severity,getseverity } from "../controllers/severityFound.controller.js"

const router = Router()


router.route("/SignUp").post(signUp)
router.route("/login").post(logIn)
router.route("/email-verify").post(verifyJwt,verifyOTP)
router.route("/Forgot-Password").post(forgotPassword)
router.route("/Reset-Password/:resetPasswordToken").post(resetPassword)
router.route("/Add-Portfolio").post(upload.fields([{ name: 'image' }, { name: 'pdf' }]),addPortfolio);
router.route("/getportfolio/:selectedItemId").post(selectPortfolio);
router.route("/updateportfolio/:selectedItemId").post(upload.fields([{ name: 'image' }, { name: 'pdf' }]),updatePortfolio);


router.route("/getportfolio").post(getPortfolio);
// router.route("/updateportfolio/:portfolioId").post(upload.fields([{ name: 'image' }, { name: 'pdf' }]), updatePortfolio);



router.route("/severity").post(severity);
router.route("/getseverity").post(getseverity);




router.route("/Platform").post(addPlatform);
router.route("/getplatforms").post(getPlatforms);
router.route("/updateplatform/:id").post(updatePlatform);


router.route("/cSigma").post(upload.single('image'),cSigma);
router.route("/resend-otp").post(verifyJwt, resendOtp);









//secure routes
router.route("/logout").post(verifyJwt, logOut)

export default router