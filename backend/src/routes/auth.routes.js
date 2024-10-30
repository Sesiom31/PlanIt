import { loginSchema, registerSchema } from "../validators/auth.validator.js";
import {
  loginUser,
  logoutUser,
  registerUser,
  verifyUser,
} from "../controllers/auth.controller.js";

import { Router } from "express";
import { validateSchema } from "../middlewares/authValidator.middleware.js";
import { verifyToken } from "../middlewares/verifyToken.js";

export const router = Router();

router.post("/register", validateSchema(registerSchema), registerUser);
router.post("/login", validateSchema(loginSchema), loginUser);
router.post("/logout", logoutUser);
router.get("/verify", verifyToken, verifyUser);
