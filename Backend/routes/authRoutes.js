import { Router } from "express";
import { login, register } from "../controller/authController.js";

const routes = Router();

routes.post("/register", register);
routes.post("/login", login);

export default routes;
