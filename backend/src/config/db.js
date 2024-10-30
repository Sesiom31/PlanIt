import { URI_MONGODB } from "./env.js";
import mongoose from "mongoose";

export const db_connect = async () => {
  try {
    await mongoose.connect(URI_MONGODB);
  } catch (err) {
    return Promise.reject("Error al conectarse a la bd");
  }
};
