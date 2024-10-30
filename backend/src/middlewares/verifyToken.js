import { SECRET_KEY_JWT } from "../config/env.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Acceso denegado, no se ha proporcionado un token" });
    }

    const decoded = jwt.verify(token, SECRET_KEY_JWT);

    if (!decoded.userID) {
      return res.status(401).json({ message: "Token inválido" });
    }

    req.user = decoded.userID;
    next();
  } catch (err) {
    console.error("Error al verificar el token: ", err);
    return res.status(500).json({ message: "Token inválido o expirado" });
  }
};
