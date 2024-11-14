import { Router } from "express"
import { signUp,logOut,logIn, forgotPassword,resetPassword } from "../controllers/user.controller.js"
import { verifyJwt } from "../middlewares/auth.middleware.js"
import { verifyEmail } from "../controllers/user.controller.js"
import { addportfolio } from "../controllers/addPortfolio.controller.js"
import { platform } from "../controllers/platform.controller.js"
import { cSigma } from "../controllers/cSigma.controller.js"
import { upload } from "../middlewares/multer.middleware.js"

const router = Router()


router.route("/SignUp").post(signUp)
router.route("/login").post(logIn)
router.route("/Email-verify").post(verifyEmail)
router.route("/Forgot-Password").post(forgotPassword)
router.route("/Reset-Password/:resetPasswordToken").post(resetPassword)
router.route("/Add-Portfolio").post(upload.single('image'),addportfolio);
router.route("/Platform").post(platform);
router.route("/cSigma").post(upload.single('image'),cSigma);






//secure routes
router.route("/logout").post(verifyJwt, logOut)

export default router