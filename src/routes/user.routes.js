// routes/user.routes.js
import { Router } from "express";
import {registerUser} from "../controllers/user.controller.js";
import { loginUser } from "../controllers/user.controller.js";
import { logoutUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { refreshAccessToken } from "../controllers/user.controller.js";

const userRouter = Router();
userRouter.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ]),
    registerUser
);

userRouter.route("/login").post(loginUser)

userRouter.route('/refresh-token').post(refreshAccessToken)

// Secured routes
userRouter.route("/logout").post(verifyJWT, logoutUser)

export default userRouter;
