import express from "express";
import { createAppointment, getAllAppointment, deleteAppointment } from "../controller/appointmentController.js";
import { authMiddleware, adminRoute } from "../middleware/authMiddleware.js";
import { appointmentLimiter } from "../lib/appointmentLimiter.js";

const router = express.Router();

router.post("/", createAppointment);
router.get("/get-all", authMiddleware, adminRoute, getAllAppointment);
router.delete("/delete/:id", authMiddleware, adminRoute, deleteAppointment);

export default router;