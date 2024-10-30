import dotenv from "dotenv";

dotenv.config();

export const URI_MONGODB = process.env.URI_MONGODB;
export const PORT = process.env.PORT;
export const SECRET_KEY_JWT = process.env.SECRET_KEY_JWT;
