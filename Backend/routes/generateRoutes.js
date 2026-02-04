import { Router } from "express";
import { userData } from "../controller/generateController.js";

const routes = Router();

routes.get("/", (req, res) => {
  res.status(200).send("Welcome to the Server...");
});

routes.post("/generate", userData);

export default routes;
