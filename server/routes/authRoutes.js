import express from "express";
import { 
  register, 
  login, 
  getProfile, 
  updateProfile, 
  getAllUser,
  updateUserRole,
  deleteUser 
} from "../controller/authController.js";
import { adminRoute, authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.post("/signup", register);
router.post("/login", login);

// Protected routes (requires authentication)
router.get("/profile", authMiddleware, getProfile);
router.put("/update", authMiddleware, updateProfile);

// Admin only routes
router.get("/get-all", authMiddleware, adminRoute, getAllUser);
router.put("/update-role/:userId", authMiddleware, adminRoute, updateUserRole);
router.delete("/delete-user/:userId", authMiddleware, adminRoute, deleteUser);

export default router;