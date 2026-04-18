import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import appointmentRoutes from "./routes/appintmentRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

app.use("/api/auth", authRoutes);
app.use("/api/appointment", appointmentRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});