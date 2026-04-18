import express from "express";
import { register, login, getProfile, updateProfile } from "../controller/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", register);
router.post("/login", login);
router.get("/profile", authMiddleware, getProfile);
router.put("/update", authMiddleware, updateProfile);

export default router;