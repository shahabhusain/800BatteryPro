import express from 'express'
import { createSecondAppointment, deleteSecondAppointment, getAllSecondAppointment } from '../controller/appointmentController.js'
import { adminRoute, authMiddleware } from '../middleware/authMiddleware.js'


const router = express.Router()

router.post("/create-second-appointment", createSecondAppointment)
router.get("/get-all-second-appointment", authMiddleware, adminRoute, getAllSecondAppointment)
router.delete("/delete-second-appointment/:id", authMiddleware, adminRoute, deleteSecondAppointment)

export default router