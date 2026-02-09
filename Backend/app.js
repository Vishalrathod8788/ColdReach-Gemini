import "dotenv/config";
import express from "express";
import cors from "cors";
import { corsOption } from "./middleware/cors.js";
import { ConnectDB } from "./config/db.js";
import generateRoutes from "./routes/generateRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

ConnectDB();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to ColdReach-Gemini Server! 🚀");
});

app.use("/api/auth", authRoutes);
app.use("/api/generator", generateRoutes);

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});
