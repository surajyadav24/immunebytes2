import { Router } from "express"
import { signUp,logOut,logIn } from "../controllers/user.controller.js"
import { verifyJwt } from "../middlewares/auth.middleware.js"
import { verifyEmail } from "../controllers/user.controller.js"

const router = Router()


router.route("/SignUp").post(signUp)
router.route("/Login").post(logIn)
router.route("/Email-verify").post(verifyEmail)



//secure routes
router.route("/logout").post(verifyJwt, logOut)

export default router