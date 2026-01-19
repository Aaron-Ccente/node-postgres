import express from "express";
import cors from "cors";
import { PORT } from "./src/config/config.js";
import AllRoutes from './src/routes/index.routes.js'
const app = express();
const PORT_SERVER = PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas generales
app.use("/api", AllRoutes);

app.get("/", (_, res) => {
  res
    .status(200)
    .json({ success: true, message: "SERVIDOR CORRIENDO CORRECTAMENTE" });
});

app.listen(PORT_SERVER, "0.0.0.0", () => {
  console.log(`Server run in port: ${PORT}`);
});
