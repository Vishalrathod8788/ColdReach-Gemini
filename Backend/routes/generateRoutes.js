import { Router } from "express";
import { userData } from "../controller/generateController.js";
import { protect } from "../middleware/auth.js";

const generateRoutes = Router();

generateRoutes.post("/generate", protect, userData);

export default generateRoutes;
