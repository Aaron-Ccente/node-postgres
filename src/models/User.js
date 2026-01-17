import { db } from "../database/db-psql.js";

export class User {
  static async getAllUsers() {
    try {
      const query = `SELECT * FROM users`;
      const response = await db.query(query);

      return {
        success: true,
        message: "Datos obtenidos correctamente",
        data: response.rows,
      };
    } catch (error) {
      console.error("Error en getAllUsers:", error);
      return {
        success: false,
        message: "Error al obtener los datos",
      };
    }
  }
}
