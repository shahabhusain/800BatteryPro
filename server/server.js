import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import secondAppointmentRoutes from './routes/secondAppoitmentRoutes.js'
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

app.use("/api/auth", authRoutes);
app.use("/api", secondAppointmentRoutes)
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});