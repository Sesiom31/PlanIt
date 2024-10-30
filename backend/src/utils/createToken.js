import { SECRET_KEY_JWT } from "../config/env.js";
import jwt from "jsonwebtoken";

export const createToken = (payload) => {
  try {
    const token = jwt.sign(payload, SECRET_KEY_JWT, {
      expiresIn: "1h",
      algorithm: "HS256",
    });
    return token;
  } catch (err) {
    console.error("Error al crear el token", err);
    throw new Error("No se pudo crear el token");
  }
};
