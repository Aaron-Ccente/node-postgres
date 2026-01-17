import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

const routes = Router();

// Ruta para obtener todos los usuarios
routes.get("/", UserController.getAllUser);

// Ruta para crear usuarios
// routes.post("/", UserController.postUser)

export default routes