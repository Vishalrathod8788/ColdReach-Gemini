import "dotenv/config";
import express from "express";
import cors from "cors";
import { corsOption } from "./middleware/cors.js";
import { ConnectDB } from "./config/db.js";
import generateRoutes from "./routes/generateRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let isConnected = false;

const connectToDatabase = async () => {
  if (isConnected) {
    console.log("=> Using existing database connection");
    return;
  }

  try {
    await ConnectDB();
    isConnected = true;
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
};

app.use(async (req, res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (error) {
    res.status(500).json({ error: "Database connection failed" });
  }
});

app.get("/", (req, res) => {
  res.status(200).send("Welcome to ColdReach-Gemini Server! 🚀");
});

app.use("/api/auth", authRoutes);
app.use("/api/generator", generateRoutes);

// Sirf tab listen karo jab hum local machine par ho (Production/Vercel par nahi)
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
  });
}

// Vercel ko apna app de do
export default app;
