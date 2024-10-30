import { PORT } from "./config/env.js";
import { app } from "./app.js";
import { db_connect } from "./config/db.js";

const initializeApp = async () => {
  try {
    await db_connect();
    console.log("Conexión exitosa a la base de datos");

    app.listen(PORT, () => {
      console.log(`El servidor está escuchando en el puerto ${PORT}`);
    });
  } catch (err) {
    console.error("Error al iniciar la aplicación:", err.message);
  }
};

initializeApp();
