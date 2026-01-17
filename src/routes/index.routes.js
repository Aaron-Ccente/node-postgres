import { Router } from "express";
import UserRoutes from './user.routes.js'
const routes = Router();

// Rutas para usuarios
routes.use("/users", UserRoutes);

export default routes
